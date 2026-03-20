// 경전 중심 Duolingo식 학습 UI (데이터는 별도 파일)
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { speakPali } from '../../utils/pali-tts'
import { LESSON_SN56_11, type StepType } from './lesson-data-sn56-11'
import { LESSON_SN22_59 } from './lesson-data-sn22-59'
import { LESSON_SN45_8 } from './lesson-data-sn45-8'
import { LESSON_MN10 } from './lesson-data-mn10'

type Step = StepType

const LESSON_MAP: Record<string, Step[]> = {
  'dhp1-alphabet': LESSON_SN56_11,
  'sn56-11': LESSON_SN56_11,
  'sn22-59': LESSON_SN22_59,
  'sn45-8': LESSON_SN45_8,
  'mn10': LESSON_MN10,
}

export default function ScriptureLearn() {
  const nav = useNavigate()
  const { lessonId } = useParams<{ lessonId: string }>()
  const lid = lessonId || 'dhp1-alphabet'
  const STEPS = LESSON_MAP[lid] || LESSON_SN56_11

  // 이어 학습: localStorage에서 진도 복원
  const savedStep = Number(localStorage.getItem(`suttalog-progress-${lid}`) || '0')
  const [stepIdx, setStepIdxRaw] = useState(Math.min(savedStep, STEPS.length - 1))

  // stepIdx 변경 시 자동 저장
  const setStepIdx = (updater: number | ((prev: number) => number)) => {
    setStepIdxRaw(prev => {
      const next = typeof updater === 'function' ? updater(prev) : updater
      localStorage.setItem(`suttalog-progress-${lid}`, String(next))
      return next
    })
  }
  const [hearts, setHearts] = useState(3)
  const [selected, setSelected] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [writingInput, setWritingInput] = useState('')
  const [writingChecked, setWritingChecked] = useState(false)
  const writingEnabled = localStorage.getItem('suttalog-writing') !== 'off'

  const step = STEPS[stepIdx]
  const progress = ((stepIdx + 1) / STEPS.length) * 100
  const speak = (text: string) => speakPali(text)
  const isQuizType = step.type === 'match-listen' || step.type === 'match-reverse' || step.type === 'quiz'
  const isWriting = step.type === 'writing'

  // 특수문자 키보드
  const SPECIAL_CHARS = ['ā', 'ī', 'ū', 'ṃ', 'ṅ', 'ñ', 'ṭ', 'ḍ', 'ṇ', 'ḷ']

  const getAnswerText = (): string => {
    if (!('answer' in step) || !('options' in step)) return ''
    const s = step as { options: string[]; answer: number }
    return s.options[s.answer]
  }

  const shuffledOpts = (() => {
    if (!('options' in step)) return []
    const opts = [...(step as { options: string[] }).options]
    for (let i = opts.length - 1; i > 0; i--) {
      const j = Math.abs(((stepIdx + 1) * 31 + i * 17) % (i + 1))
      ;[opts[i], opts[j]] = [opts[j], opts[i]]
    }
    return opts
  })()

  const stopAudio = () => speechSynthesis.cancel()

  const handleCheck = () => {
    if (selected === null) return
    setShowResult(true)
    if (shuffledOpts[selected] !== getAnswerText()) setHearts(h => Math.max(0, h - 1))
  }
  const handleNext = () => {
    stopAudio()
    if (stepIdx + 1 >= STEPS.length) { nav('/lesson-complete'); return }
    setStepIdx(i => i + 1); setSelected(null); setShowResult(false); setWritingInput(''); setWritingChecked(false)
  }
  const handlePrev = () => {
    stopAudio()
    if (stepIdx > 0) { setStepIdx(i => i - 1); setSelected(null); setShowResult(false); setWritingInput(''); setWritingChecked(false) }
  }
  const checkWriting = () => {
    setWritingChecked(true)
    const correct = 'answer' in step ? (step as { answer: string }).answer : ''
    if (writingInput.trim().toLowerCase() !== correct.toLowerCase()) setHearts(h => Math.max(0, h - 1))
  }
  const isCorrectAnswer = selected !== null && shuffledOpts[selected] === getAnswerText()

  if (hearts <= 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)' }}>
        <span className="text-5xl">😔</span>
        <h2 className="text-xl font-bold mt-4">연꽃잎을 모두 잃었습니다</h2>
        <button onClick={() => nav('/')} className="mt-6 px-6 py-3 rounded-xl text-white font-bold" style={{ backgroundColor: 'var(--color-primary)' }}>홈으로</button>
      </div>
    )
  }

  const renderOptions = () => {
    const answerText = getAnswerText()
    return (
      <div className="space-y-2.5">
        {shuffledOpts.map((opt, i) => {
          const isAns = showResult && opt === answerText
          const isWrn = showResult && selected === i && opt !== answerText
          return (
            <button key={i} onClick={() => !showResult && setSelected(i)} disabled={showResult}
              className="w-full p-3.5 rounded-xl text-left text-sm font-medium transition-all active:scale-[0.98]"
              style={{
                backgroundColor: isAns ? '#E8F5E9' : isWrn ? '#FFEBEE' : 'var(--color-surface)',
                border: isAns ? '2px solid #4CAF50' : isWrn ? '2px solid #F44336' : selected === i ? '2px solid var(--color-primary)' : '1.5px solid var(--color-border)',
              }}>
              {isAns && '✅ '}{isWrn && '❌ '}{opt}
            </button>
          )
        })}
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)' }}>
      <div className="shrink-0 flex items-center gap-2 px-4 pt-3 pb-2">
        <button onClick={() => nav(-1)} className="text-lg">✕</button>
        <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--color-border)' }}>
          <div className="h-full rounded-full transition-all duration-500" style={{ width: `${progress}%`, backgroundColor: 'var(--color-primary)' }} />
        </div>
        <div className="flex gap-0.5 shrink-0">
          {[0, 1, 2].map(i => (<span key={i} className={`text-base ${i < hearts ? '' : 'opacity-20 grayscale'}`}>🪷</span>))}
        </div>
      </div>

      <div className="flex-1 flex flex-col overflow-y-auto px-4 pt-2">
        {step.type === 'intro' && (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-2">
            <span className="text-6xl mb-4">{step.icon}</span>
            <h1 className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>{step.title}</h1>
            <p className="text-sm pali-text mt-1" style={{ color: 'var(--color-text-secondary)' }}>{step.subtitle}</p>
            <p className="text-sm mt-6 whitespace-pre-line leading-relaxed">{step.description}</p>
          </div>
        )}

        {step.type === 'teach' && (
          <div className="flex-1 flex flex-col pt-1">
            {step.verseLine && (
              <div className="rounded-xl p-3 mb-3" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
                <p className="pali-text text-xs leading-relaxed">
                  {step.verseLine.split(new RegExp(`(${step.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'i')).map((part, i) =>
                    part.toLowerCase() === step.word.toLowerCase()
                      ? <span key={i} className="font-bold px-0.5 rounded text-sm" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>{part}</span>
                      : <span key={i} style={{ color: 'var(--color-text-secondary)' }}>{part}</span>
                  )}
                </p>
                <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>{step.verseLineKo}</p>
              </div>
            )}
            <div className="rounded-2xl p-4 text-center" style={{ backgroundColor: 'var(--color-surface)', border: '2px solid var(--color-primary)' }}>
              <span className="text-3xl">{step.icon}</span>
              <p className="pali-text text-2xl font-bold mt-2" style={{ color: 'var(--color-primary)' }}>{step.word}</p>
              <p className="text-sm mt-1 font-medium">{step.pronKo}</p>
              {step.audio && <button onClick={() => speak(step.word)} className="mt-2 px-4 py-1.5 rounded-full text-xs text-white" style={{ backgroundColor: 'var(--color-accent)' }}>🔊 발음</button>}
              <hr className="my-3" style={{ borderColor: 'var(--color-border)' }} />
              <p className="text-lg font-bold">{step.meaning}</p>
              {step.grammar && <p className="text-xs mt-1 px-2 py-0.5 rounded-full inline-block" style={{ backgroundColor: 'var(--color-border)' }}>{step.grammar}</p>}
            </div>
            {(step.baseForm || step.formNote) && (
              <div className="mt-2 rounded-xl p-3 text-xs" style={{ backgroundColor: '#E3F2FD', border: '1px solid #BBDEFB' }}>
                {step.baseForm && <p className="font-bold">📐 원형: {step.baseForm}</p>}
                {step.formNote && <p className="mt-1 whitespace-pre-line" style={{ color: 'var(--color-text-secondary)' }}>{step.formNote}</p>}
              </div>
            )}
            {step.buddhism && <div className="mt-2 rounded-xl p-3 text-xs" style={{ backgroundColor: '#E8F5E9', border: '1px solid #C8E6C9' }}>☸️ {step.buddhism}</div>}
          </div>
        )}

        {step.type === 'match-listen' && (
          <div className="flex-1 flex flex-col">
            <p className="text-sm font-bold mb-3">{step.instruction}</p>
            <button onClick={() => speak(step.word)} className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-3xl active:scale-95 mb-4" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>🔊</button>
            {renderOptions()}
          </div>
        )}

        {step.type === 'match-reverse' && (
          <div className="flex-1 flex flex-col">
            <p className="text-sm font-bold mb-4">{step.instruction}</p>
            {renderOptions()}
          </div>
        )}

        {step.type === 'quiz' && (
          <div className="flex-1 flex flex-col">
            <p className="text-base font-bold mb-3">{step.question}</p>
            {step.hint && !showResult && <p className="text-xs mb-3" style={{ color: 'var(--color-text-secondary)' }}>💡 {step.hint}</p>}
            {renderOptions()}
          </div>
        )}

        {step.type === 'verse' && (
          <div className="flex-1 flex flex-col">
            <div className="rounded-2xl p-4" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
              <p className="pali-text text-[15px] leading-relaxed">
                {step.pali.split(/(\s+)/).map((token, i) => {
                  const clean = token.replace(/[,.:;—""\n]/g, '').toLowerCase()
                  const isHL = step.highlight?.some(h => clean.includes(h.toLowerCase()))
                  return <span key={i}>{isHL
                    ? <button onClick={() => speak(token)} className="font-bold px-0.5 rounded" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>{token}</button>
                    : <span style={{ color: 'var(--color-primary)' }}>{token}</span>
                  }</span>
                })}
              </p>
              <button onClick={() => speak(step.pali)} className="mt-2 text-xs" style={{ color: 'var(--color-accent)' }}>🔊 전체</button>
              <p className="text-xs mt-2" style={{ color: 'var(--color-primary)', opacity: 0.7 }}>🗣️ {step.pronKo}</p>
              <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>{step.translation}</p>
            </div>
            {step.note && <div className="mt-2 rounded-xl p-3 text-xs" style={{ backgroundColor: '#FFF8E1', border: '1px solid #FFE082' }}>{step.note}</div>}
          </div>
        )}

        {step.type === 'speak' && (
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <p className="text-sm mb-4">🎤 따라 읽어보세요</p>
            <div className="rounded-2xl p-5 w-full" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
              <p className="pali-text text-sm font-semibold" style={{ color: 'var(--color-primary)' }}>{step.pali}</p>
              <p className="text-sm mt-2 font-medium">{step.pronKo}</p>
              <button onClick={() => speak(step.pali)} className="mt-3 px-5 py-2 rounded-full text-white text-sm" style={{ backgroundColor: 'var(--color-accent)' }}>🔊 먼저 듣기</button>
            </div>
            <button className="mt-6 w-16 h-16 rounded-full flex items-center justify-center text-3xl active:scale-90" style={{ backgroundColor: '#EF5350', color: 'white' }}>🎤</button>
            <p className="text-xs mt-2" style={{ color: 'var(--color-text-secondary)' }}>버튼을 누르고 따라 읽으세요</p>
          </div>
        )}

        {step.type === 'teach-grammar' && (
          <div className="flex-1 flex flex-col items-center justify-center px-2">
            <span className="text-4xl mb-3">📐</span>
            <h2 className="text-lg font-bold">{step.title}</h2>
            <div className="mt-4 rounded-2xl p-4 w-full" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
              <p className="pali-text text-base font-bold text-center whitespace-pre-line" style={{ color: 'var(--color-primary)' }}>{step.example}</p>
              <p className="text-center mt-1 font-semibold whitespace-pre-line">{step.exampleKo}</p>
            </div>
            <div className="mt-3 rounded-xl p-3 w-full text-sm whitespace-pre-line" style={{ backgroundColor: '#E3F2FD', border: '1px solid #BBDEFB' }}>{step.explanation}</div>
          </div>
        )}

        {/* 쓰기 (writing 모드 on일 때만, off면 자동 스킵) */}
        {step.type === 'writing' && !writingEnabled && (() => { handleNext(); return null })()}
        {step.type === 'writing' && writingEnabled && (
          <div className="flex-1 flex flex-col">
            <p className="text-base font-bold mb-2">{step.instruction}</p>
            <p className="text-sm mb-1" style={{ color: 'var(--color-text-secondary)' }}>
              뜻: {step.meaning} · 발음: {step.pronKo}
            </p>
            {step.hint && !writingChecked && <p className="text-xs mb-3" style={{ color: 'var(--color-text-secondary)' }}>💡 {step.hint}</p>}

            {/* 입력 필드 */}
            <input type="text" value={writingInput}
              onChange={e => setWritingInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && !writingChecked && checkWriting()}
              placeholder="빠알리어를 입력하세요"
              disabled={writingChecked}
              className="w-full px-4 py-3 rounded-xl text-lg pali-text text-center"
              style={{ backgroundColor: 'var(--color-surface)', border: writingChecked
                ? (writingInput.trim().toLowerCase() === ((step as { answer: string }).answer).toLowerCase() ? '2px solid #4CAF50' : '2px solid #F44336')
                : '2px solid var(--color-border)', color: 'var(--color-text)' }}
            />

            {/* 특수문자 키보드 */}
            <div className="flex flex-wrap gap-1.5 mt-3 justify-center">
              {SPECIAL_CHARS.map(ch => (
                <button key={ch} onClick={() => !writingChecked && setWritingInput(v => v + ch)}
                  className="w-9 h-9 rounded-lg text-sm font-bold pali-text active:scale-90"
                  style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-primary)' }}>
                  {ch}
                </button>
              ))}
            </div>

            {/* 결과 */}
            {writingChecked && (
              <div className="mt-3 rounded-xl p-3" style={{
                backgroundColor: writingInput.trim().toLowerCase() === ((step as { answer: string }).answer).toLowerCase() ? '#E8F5E9' : '#FFEBEE',
              }}>
                <p className="text-sm font-bold">
                  {writingInput.trim().toLowerCase() === ((step as { answer: string }).answer).toLowerCase()
                    ? '✅ Sādhu! 정확합니다!'
                    : `❌ 정답: ${(step as { answer: string }).answer}`}
                </p>
              </div>
            )}
          </div>
        )}

        <div className="min-h-32" />
      </div>

      <div className="fixed bottom-16 left-0 right-0 px-4 pb-3 pt-2 max-w-md mx-auto" style={{ backgroundColor: 'var(--color-bg)' }}>
        {showResult && isQuizType && (
          <div className="rounded-xl p-2.5 mb-2" style={{ backgroundColor: isCorrectAnswer ? '#E8F5E9' : '#FFEBEE' }}>
            <p className="text-sm font-bold">{isCorrectAnswer ? '✅ Sādhu! 정답!' : '❌ 틀렸습니다'}</p>
          </div>
        )}
        <div className="flex gap-2">
          {stepIdx > 0 && (
            <button onClick={handlePrev} className="px-4 py-3.5 rounded-xl font-bold text-sm active:scale-[0.97]"
              style={{ border: '2px solid var(--color-border)' }}>← 이전</button>
          )}
          <button onClick={
              isWriting && !writingChecked ? checkWriting
              : isQuizType && !showResult ? handleCheck
              : handleNext
            }
            className="flex-1 py-3.5 rounded-xl text-white font-bold text-base active:scale-[0.97]"
            style={{ backgroundColor: 'var(--color-primary)' }}>
            {isWriting && !writingChecked ? '확인' : isQuizType && !showResult ? '확인' : '다음 →'}
          </button>
          {/* 스킵 버튼 — 항상 */}
          {(isQuizType || isWriting) && !showResult && !writingChecked && (
            <button onClick={handleNext} className="px-3 py-3.5 rounded-xl text-xs"
              style={{ color: 'var(--color-text-secondary)' }}>건너뛰기</button>
          )}
        </div>
      </div>
    </div>
  )
}
