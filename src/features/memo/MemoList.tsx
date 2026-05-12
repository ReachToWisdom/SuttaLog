// 메모 목록 페이지 — 작성된 메모를 시간순으로 보고, JSON으로 내보내기
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteMemo, downloadMemosJson, listMemos, type Memo } from '../../utils/memo'

function subtitleOf(m: Memo): string {
  const s = m.stepSnapshot
  if (s.stepType === 'teach' && s.word) return `단어 · ${s.word}`
  if (s.stepType === 'teach-grammar' && s.title) return `문법 · ${s.title}`
  if (s.stepType === 'verse' && s.pali) return `경문 · ${s.pali.slice(0, 40)}`
  if (s.stepType === 'quiz' && s.question) return `퀴즈 · ${s.question.slice(0, 40)}`
  if (s.stepType === 'speak' && s.pali) return `따라읽기 · ${s.pali.slice(0, 40)}`
  if (s.stepType === 'arrange' && s.instruction) return `배열 · ${s.instruction.slice(0, 40)}`
  if (s.stepType === 'writing' && s.instruction) return `쓰기 · ${s.instruction.slice(0, 40)}`
  if (s.stepType === 'intro' && s.title) return `소개 · ${s.title}`
  return s.stepType
}

export default function MemoList() {
  const nav = useNavigate()
  const [version, setVersion] = useState(0)
  const memos = useMemo(() => listMemos(), [version])

  const handleDelete = (pageId: string) => {
    if (!confirm('이 메모를 삭제할까요?')) return
    deleteMemo(pageId)
    setVersion(v => v + 1)
  }

  const handleOpen = (m: Memo) => {
    // ScriptureLearn 라우트로 진입. step 위치는 localStorage progress로 저장되어 있으나,
    // 메모 위치로 직접 이동하기 위해 별도 키에 저장한다.
    localStorage.setItem(`suttalog-progress-${m.lessonId}`, String(m.stepIdx))
    nav(`/learn/scripture/${m.lessonId}`)
  }

  return (
    <div className="px-4 pt-6 pb-24 max-w-lg mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold">📝 메모</h1>
        <button
          onClick={() => nav(-1)}
          className="text-sm px-3 py-1 rounded-full active:scale-95"
          style={{ border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)' }}
        >
          ← 뒤로
        </button>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <span
          className="text-xs px-3 py-1 rounded-full"
          style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
        >
          총 {memos.length}개
        </span>
        <button
          onClick={downloadMemosJson}
          disabled={memos.length === 0}
          className="ml-auto text-xs px-3 py-1.5 rounded-full active:scale-95 disabled:opacity-40"
          style={{ backgroundColor: 'var(--color-primary)', color: '#fff' }}
        >
          📤 JSON 내보내기
        </button>
      </div>

      {memos.length === 0 ? (
        <div
          className="rounded-2xl p-8 text-center"
          style={{ backgroundColor: 'var(--color-surface)', border: '1px dashed var(--color-border)' }}
        >
          <p className="text-3xl mb-2">📝</p>
          <p className="text-sm font-semibold">아직 작성한 메모가 없습니다</p>
          <p className="text-xs mt-2 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            학습 중 단계마다 우측 상단의 메모 버튼으로 메모를 남길 수 있습니다.
            <br />
            작성한 메모는 JSON으로 내보내 AI에게 전달해 일괄 수정에 활용하세요.
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {memos.map(m => (
            <div
              key={m.pageId}
              className="rounded-xl p-3"
              style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
            >
              <div className="flex items-start justify-between gap-2 mb-1">
                <p className="text-[10px] font-mono" style={{ color: 'var(--color-text-tertiary)' }}>
                  {m.pageId}
                </p>
                <p className="text-[10px]" style={{ color: 'var(--color-text-tertiary)' }}>
                  {new Date(m.updatedAt).toLocaleString()}
                </p>
              </div>
              <p className="text-xs font-semibold truncate" style={{ color: 'var(--color-primary)' }}>
                {subtitleOf(m)}
              </p>
              <p className="text-sm mt-2 whitespace-pre-wrap leading-relaxed">{m.body}</p>
              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => handleOpen(m)}
                  className="flex-1 py-1.5 rounded-lg text-xs font-bold active:scale-95"
                  style={{ backgroundColor: 'var(--color-primary)', color: '#fff' }}
                >
                  → 해당 단계로 이동
                </button>
                <button
                  onClick={() => handleDelete(m.pageId)}
                  className="px-3 py-1.5 rounded-lg text-xs active:scale-95"
                  style={{ border: '1px solid var(--color-border)', color: '#EF5350' }}
                >
                  삭제
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
