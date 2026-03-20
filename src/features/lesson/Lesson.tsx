// 레슨 진행 화면 (6종 문제 유형 목업)
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

// 목업 문제 데이터
const MOCK_QUESTIONS = [
  {
    type: 'meaning',
    title: '"Dhamma"의 뜻은?',
    pali: 'Dhamma',
    options: ['가르침, 법', '수행, 명상', '열반, 소멸', '괴로움, 고'],
    answer: 0,
  },
  {
    type: 'listening',
    title: '들은 단어를 고르세요',
    pali: '🔊 (발음 재생)',
    audio: 'Dukkha',
    options: ['Sukha', 'Dukkha', 'Mettā', 'Sutta'],
    answer: 1,
  },
  {
    type: 'fill',
    title: '빈칸을 채우세요',
    pali: 'Buddhaṃ ______ gacchāmi',
    hint: '(부처님께 귀의합니다)',
    options: ['saraṇaṃ', 'dhammaṃ', 'saṅghaṃ', 'nibbānaṃ'],
    answer: 0,
  },
  {
    type: 'arrange',
    title: '올바른 순서로 배열하세요',
    hint: '"모든 형성된 것은 무상하다"',
    blocks: ['aniccā', 'Sabbe', 'saṅkhārā'],
    correctOrder: [1, 2, 0], // Sabbe saṅkhārā aniccā
  },
  {
    type: 'scripture',
    title: '이 경전 구절의 의미는?',
    pali: 'Sabbe saṅkhārā dukkhā',
    source: 'Dhammapada 278게',
    options: [
      '모든 형성된 것은 괴로움이다',
      '모든 형성된 것은 무상하다',
      '모든 법은 무아이다',
      '열반은 최상의 행복이다',
    ],
    answer: 0,
  },
  {
    type: 'typing',
    title: '"자비"를 빠알리어로 입력하세요',
    answer: 'mettā',
    hint: 'm___ā',
  },
]

export default function Lesson() {
  const nav = useNavigate()
  const { } = useParams()
  const [qIndex, setQIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [hearts, setHearts] = useState(3)
  const [typingInput, setTypingInput] = useState('')
  const [arrangeOrder, setArrangeOrder] = useState<number[]>([])

  const q = MOCK_QUESTIONS[qIndex]
  const progress = ((qIndex) / MOCK_QUESTIONS.length) * 100

  const checkAnswer = () => {
    setShowResult(true)
    if ('answer' in q && typeof q.answer === 'number' && selected !== q.answer) {
      setHearts(h => Math.max(0, h - 1))
    }
  }

  const next = () => {
    if (qIndex + 1 >= MOCK_QUESTIONS.length) {
      nav('/lesson-complete')
    } else {
      setQIndex(i => i + 1)
      setSelected(null)
      setShowResult(false)
      setTypingInput('')
      setArrangeOrder([])
    }
  }

  const isCorrect = 'answer' in q && typeof q.answer === 'number' && selected === q.answer

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)' }}>
      {/* 상단바: 닫기 + 진행바 + 연꽃잎 */}
      <div className="flex items-center gap-3 px-4 pt-4 pb-2">
        <button onClick={() => nav(-1)} className="text-xl">✕</button>
        <div className="flex-1 h-2.5 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--color-border)' }}>
          <div className="h-full rounded-full transition-all duration-500" style={{ width: `${progress}%`, backgroundColor: 'var(--color-primary)' }} />
        </div>
        <div className="flex gap-0.5">
          {[0, 1, 2].map(i => (
            <span key={i} className={`text-lg ${i < hearts ? '' : 'opacity-20 grayscale'}`}>🪷</span>
          ))}
        </div>
      </div>

      {/* 문제 영역 */}
      <div className="flex-1 px-5 pt-6">
        {/* 문제 유형 뱃지 */}
        <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: 'var(--color-border)' }}>
          {q.type === 'meaning' && '의미 매칭'}
          {q.type === 'listening' && '🔊 듣기'}
          {q.type === 'fill' && '빈칸 채우기'}
          {q.type === 'arrange' && '문장 배열'}
          {q.type === 'scripture' && '📜 경전 해석'}
          {q.type === 'typing' && '⌨️ 입력'}
        </span>

        <h2 className="text-lg font-bold mt-3">{q.title}</h2>

        {/* 빠알리어 텍스트 */}
        {'pali' in q && q.pali && (
          <div className="mt-4 p-4 rounded-xl text-center" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
            <p className="pali-text text-xl font-semibold" style={{ color: 'var(--color-primary)' }}>{q.pali}</p>
            {'hint' in q && q.hint && <p className="text-xs mt-2" style={{ color: 'var(--color-text-secondary)' }}>{q.hint}</p>}
            {'source' in q && q.source && <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>— {q.source}</p>}
          </div>
        )}

        {/* 듣기 문제 - 재생 버튼 */}
        {q.type === 'listening' && (
          <button className="w-20 h-20 mx-auto mt-4 rounded-full flex items-center justify-center text-4xl active:scale-95 transition-transform"
            style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
            🔊
          </button>
        )}

        {/* 선택지 (meaning, listening, fill, scripture) */}
        {'options' in q && q.options && (
          <div className="mt-6 space-y-3">
            {q.options.map((opt, i) => {
              const isSelected = selected === i
              const isAnswer = showResult && 'answer' in q && i === q.answer
              const isWrong = showResult && isSelected && !isAnswer

              return (
                <button
                  key={i}
                  onClick={() => !showResult && setSelected(i)}
                  disabled={showResult}
                  className="w-full p-4 rounded-xl text-left text-sm font-medium transition-all active:scale-[0.98]"
                  style={{
                    backgroundColor: isAnswer ? '#E8F5E9' : isWrong ? '#FFEBEE' : 'var(--color-surface)',
                    border: isAnswer ? '2px solid #4CAF50' : isWrong ? '2px solid #F44336' : isSelected ? '2px solid var(--color-primary)' : '2px solid var(--color-border)',
                  }}
                >
                  {isAnswer && '✅ '}{isWrong && '❌ '}{opt}
                </button>
              )
            })}
          </div>
        )}

        {/* 문장 배열 */}
        {q.type === 'arrange' && 'blocks' in q && (
          <div className="mt-6">
            {/* 배치 슬롯 */}
            <div className="flex gap-2 p-3 min-h-14 rounded-xl mb-4" style={{ backgroundColor: 'var(--color-surface)', border: '2px dashed var(--color-border)' }}>
              {arrangeOrder.map((idx, i) => (
                <span key={i} onClick={() => setArrangeOrder(o => o.filter((_, j) => j !== i))}
                  className="px-3 py-2 rounded-lg text-sm font-medium pali-text cursor-pointer"
                  style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                  {q.blocks![idx]}
                </span>
              ))}
            </div>
            {/* 블록 */}
            <div className="flex gap-2 flex-wrap">
              {q.blocks!.map((block, i) => (
                <button key={i}
                  onClick={() => !arrangeOrder.includes(i) && setArrangeOrder(o => [...o, i])}
                  disabled={arrangeOrder.includes(i)}
                  className="px-4 py-2 rounded-lg text-sm font-medium pali-text transition-all"
                  style={{
                    backgroundColor: arrangeOrder.includes(i) ? 'var(--color-border)' : 'var(--color-surface)',
                    border: '2px solid var(--color-border)',
                    opacity: arrangeOrder.includes(i) ? 0.3 : 1,
                  }}>
                  {block}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 타이핑 */}
        {q.type === 'typing' && (
          <div className="mt-6">
            <input
              type="text"
              value={typingInput}
              onChange={e => setTypingInput(e.target.value)}
              placeholder="빠알리어를 입력하세요"
              className="w-full px-4 py-3 rounded-xl text-lg pali-text text-center"
              style={{ backgroundColor: 'var(--color-surface)', border: '2px solid var(--color-border)', color: 'var(--color-text)' }}
            />
            {'hint' in q && (
              <p className="text-center text-sm mt-2" style={{ color: 'var(--color-text-secondary)' }}>💡 힌트: {q.hint}</p>
            )}
          </div>
        )}
      </div>

      {/* 정답/오답 피드백 */}
      {showResult && (
        <div className="px-5 py-3 rounded-t-2xl"
          style={{ backgroundColor: isCorrect ? '#E8F5E9' : '#FFEBEE' }}>
          <p className="font-bold text-sm">
            {isCorrect ? '✅ 정답! Sādhu!' : '❌ 오답'}
          </p>
          {'answer' in q && typeof q.answer === 'number' && 'options' in q && (
            <p className="text-xs mt-1">정답: {q.options![q.answer as number]}</p>
          )}
        </div>
      )}

      {/* 하단 버튼 */}
      <div className="px-5 pb-8 pt-3" style={{ backgroundColor: 'var(--color-bg)' }}>
        <button
          onClick={showResult ? next : checkAnswer}
          disabled={selected === null && q.type !== 'arrange' && q.type !== 'typing'}
          className="w-full py-4 rounded-xl text-white font-bold text-base disabled:opacity-40 active:scale-[0.97] transition-transform"
          style={{ backgroundColor: 'var(--color-primary)' }}
        >
          {showResult ? '다음' : '확인'}
        </button>
      </div>
    </div>
  )
}
