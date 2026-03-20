// 경전 중심 Duolingo식 학습 — 소개→매칭→퀴즈→문맥→따라읽기
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { speakPali } from '../../utils/pali-tts'

// --- 스텝 타입 ---
type Step =
  | { type: 'intro'; title: string; subtitle: string; description: string; icon: string }
  | { type: 'teach'; word: string; pronKo: string; meaning: string; icon: string; buddhism?: string; audio?: boolean; verseLine?: string; verseLineKo?: string }
  | { type: 'match-listen'; instruction: string; word: string; pronKo: string; options: string[]; answer: number }
  | { type: 'match-meaning'; instruction: string; word: string; options: string[]; answer: number }
  | { type: 'match-reverse'; instruction: string; meaning: string; options: string[]; answer: number }
  | { type: 'verse'; pali: string; pronKo: string; translation: string; highlight?: string[]; note?: string }
  | { type: 'quiz'; question: string; options: string[]; answer: number; hint?: string }
  | { type: 'speak'; pali: string; pronKo: string }
  | { type: 'teach-grammar'; title: string; example: string; exampleKo: string; explanation: string }

// --- 전법륜경 1과 학습 데이터 ---
const STEPS: Step[] = [
  // ===== 1. 경전 소개 =====
  {
    type: 'intro',
    title: '전법륜경',
    subtitle: 'Dhammacakkappavattana Sutta',
    description: '붓다가 깨달음을 이룬 후\n다섯 수행자에게 처음으로 설한 가르침.\n\n이 경전에서 사성제(四聖諦)와\n팔정도(八正道)가 최초로 설해졌습니다.',
    icon: '☸️',
  },

  // ===== 2. 핵심 단어 3개 소개 (하나씩) =====
  {
    type: 'teach',
    word: 'bhagavā', pronKo: '바가와~', meaning: '세존 (붓다의 존칭)',
    icon: '🙏',
    buddhism: '세존(世尊). "복덕을 갖추신 분". 경전에서 붓다를 가리킬 때 가장 많이 쓰는 말.',
    audio: true,
    verseLine: 'Ekaṃ samayaṃ bhagavā bārāṇasiyaṃ viharati isipatane migadāye.',
    verseLineKo: '한 때 세존께서 바라나시의 녹야원에 머무셨다.',
  },
  {
    type: 'teach',
    word: 'bhikkhave', pronKo: '빅카웨', meaning: '비구들이여',
    icon: '🧘',
    buddhism: '비구(比丘)들을 부르는 말. 경전에서 가장 자주 나오는 호칭.',
    audio: true,
    verseLine: '"Dveme, bhikkhave, antā pabbajitena na sevitabbā."',
    verseLineKo: '"비구들이여, 출가자가 따르지 말아야 할 두 극단이 있다."',
  },
  {
    type: 'teach',
    word: 'dukkhaṃ', pronKo: '둑캉', meaning: '괴로움',
    icon: '💫',
    buddhism: '고(苦). 사성제의 첫째 진리. 단순한 고통이 아닌, 불만족·불완전함을 포괄.',
    audio: true,
    verseLine: 'Idaṃ kho pana, bhikkhave, dukkhaṃ ariyasaccaṃ—',
    verseLineKo: '비구들이여, 이것이 괴로움의 성스러운 진리이다—',
  },

  // ===== 3. 쉬운 매칭 — 듣고 고르기 =====
  {
    type: 'match-listen',
    instruction: '🔊 듣고 맞는 뜻을 고르세요',
    word: 'bhagavā', pronKo: '바가와~',
    options: ['세존 (붓다)', '비구', '괴로움', '법'],
    answer: 0,
  },
  {
    type: 'match-listen',
    instruction: '🔊 듣고 맞는 뜻을 고르세요',
    word: 'dukkhaṃ', pronKo: '둑캉',
    options: ['행복', '세존', '괴로움', '비구'],
    answer: 2,
  },

  // ===== 4. 뜻→단어 매칭 (역방향) =====
  {
    type: 'match-reverse',
    instruction: '"세존"은 빠알리어로?',
    meaning: '세존 (붓다의 존칭)',
    options: ['dukkhaṃ', 'bhagavā', 'bhikkhave', 'dhammaṃ'],
    answer: 1,
  },
  {
    type: 'match-reverse',
    instruction: '"비구들이여"는 빠알리어로?',
    meaning: '비구들이여 (부르는 말)',
    options: ['bhagavā', 'dukkhaṃ', 'maggo', 'bhikkhave'],
    answer: 3,
  },

  // ===== 5. 경전 구절에서 확인 =====
  {
    type: 'verse',
    pali: 'Ekaṃ samayaṃ bhagavā bārāṇasiyaṃ viharati isipatane migadāye.',
    pronKo: '에깡 사마양 바가와~ 바~라~나시양 위하라띠 이시빠따네 미가다~예.',
    translation: '한 때 세존께서 바라나시의 녹야원, 이시빠따나에 머무셨다.',
    highlight: ['bhagavā'],
    note: '💡 방금 배운 "bhagavā(세존)"가 여기 나옵니다!',
  },
  {
    type: 'quiz',
    question: '이 구절에서 "세존"을 가리키는 단어는?',
    options: ['Ekaṃ', 'samayaṃ', 'bhagavā', 'viharati'],
    answer: 2,
  },

  // ===== 6. 다음 구절 =====
  {
    type: 'verse',
    pali: 'Tatra kho bhagavā pañcavaggiye bhikkhū āmantesi:',
    pronKo: '따뜨라 코 바가와~ 빤짜왁기예 빅쿠~ 아~만떼시:',
    translation: '거기서 세존께서 다섯 비구에게 말씀하셨다:',
    highlight: ['bhagavā', 'bhikkhū'],
    note: '💡 "bhagavā"와 "bhikkhū(비구)" 모두 보입니다!',
  },

  // ===== 7. 새 단어 추가 소개 =====
  {
    type: 'teach',
    word: 'majjhimā paṭipadā', pronKo: '맛지마~ 빠띠빠다~', meaning: '중도 (두 극단의 중간 길)',
    icon: '⚖️',
    buddhism: '중도(中道). 쾌락과 고행의 양극단을 피하는 길. 붓다 가르침의 핵심 방법론.',
    audio: true,
    verseLine: 'Ete kho, bhikkhave, ubho ante anupagamma majjhimā paṭipadā tathāgatena abhisambuddhā',
    verseLineKo: '이 양극단에 다가가지 않고, 여래가 깨달은 중도가 있으니',
  },
  {
    type: 'teach',
    word: 'ariyo aṭṭhaṅgiko maggo', pronKo: '아리요 앗탕기꼬 막고', meaning: '성스러운 팔정도',
    icon: '☸️',
    buddhism: '팔정도(八正道). 괴로움의 소멸로 이끄는 여덟 가지 수행법.',
    audio: true,
    verseLine: 'Ayameva ariyo aṭṭhaṅgiko maggo, seyyathidaṃ—',
    verseLineKo: '그것은 바로 성스러운 팔정도이니—',
  },

  // ===== 8. 팔정도 구절 =====
  {
    type: 'verse',
    pali: 'Ayameva ariyo aṭṭhaṅgiko maggo, seyyathidaṃ — sammādiṭṭhi, sammāsaṅkappo, sammāvācā, sammākammanto, sammāājīvo, sammāvāyāmo, sammāsati, sammāsamādhi.',
    pronKo: '아야메와 아리요 앗탕기꼬 막고 — 삼마~딧티, 삼마~상깝뽀, 삼마~와~짜~, 삼마~깜만또, 삼마~아~지~워, 삼마~와~야~모, 삼마~사띠, 삼마~사마~디.',
    translation: '그것은 바로 성스러운 팔정도이니 — 바른 견해, 바른 사유, 바른 말, 바른 행위, 바른 생계, 바른 정진, 바른 마음챙김, 바른 삼매이다.',
    highlight: ['ariyo', 'maggo', 'sammāsati'],
    note: '☸️ sammāsati(바른 마음챙김) = 사념처 수행. 이것이 우리 학습의 최종 목표!',
  },
  { type: 'quiz', question: '팔정도의 "sammāsati"의 뜻은?', options: ['바른 견해', '바른 말', '바른 마음챙김', '바른 삼매'], answer: 2 },

  // ===== 9. 고성제 =====
  {
    type: 'teach',
    word: 'ariyasaccaṃ', pronKo: '아리야삿짱', meaning: '성스러운 진리 (성제)',
    icon: '📜',
    buddhism: '성제(聖諦). 사성제(고·집·멸·도)의 각 항목. ariya(성스러운) + sacca(진리).',
    audio: true,
    verseLine: 'Idaṃ kho pana, bhikkhave, dukkhaṃ ariyasaccaṃ—',
    verseLineKo: '비구들이여, 이것이 괴로움의 성스러운 진리이다—',
  },
  {
    type: 'verse',
    pali: 'Idaṃ kho pana, bhikkhave, dukkhaṃ ariyasaccaṃ — jātipi dukkhā, jarāpi dukkhā, byādhipi dukkho, maraṇampi dukkhaṃ.',
    pronKo: '이당 코 빠나, 빅카웨, 둑캉 아리야삿짱 — 자~띠삐 둑카~, 자라~삐 둑카~, 뱌~디삐 둑코, 마라낭삐 둑캉.',
    translation: '비구들이여, 이것이 괴로움의 성스러운 진리이다 — 태어남도 괴로움, 늙음도 괴로움, 병듦도 괴로움, 죽음도 괴로움이다.',
    highlight: ['dukkhaṃ', 'ariyasaccaṃ'],
    note: '☸️ 생로병사(生老病死) = 붓다가 출가를 결심한 네 가지 고통.',
  },
  { type: 'quiz', question: '사성제의 첫째 "고성제"의 핵심은?', options: ['행복이 최고다', '생로병사가 모두 괴로움이다', '신을 믿어야 한다', '고행이 답이다'], answer: 1 },

  // ===== 10. 문법 맛보기 =====
  {
    type: 'teach-grammar',
    title: '호격(呼格): ~이여!',
    example: 'bhikkhave',
    exampleKo: '비구들이여',
    explanation: '경전에서 붓다가 제자를 부를 때 쓰는 형태.\n"bhikkhu(비구)" → "bhikkhave(비구들이여)"로 변함.\n한국어 "~이여, ~들이여"와 같은 역할.',
  },

  // ===== 11. 따라 읽기 =====
  { type: 'speak', pali: 'Ekaṃ samayaṃ bhagavā', pronKo: '에깡 사마양 바가와~' },

  // ===== 12. 종합 퀴즈 =====
  { type: 'quiz', question: '"bhagavā"의 뜻은?', options: ['비구', '세존', '법', '괴로움'], answer: 1 },
  { type: 'quiz', question: '붓다의 첫 설법 장소는?', options: ['보드가야', '사위성', '녹야원', '쿠시나가라'], answer: 2 },
  { type: 'quiz', question: '이 경전의 핵심 가르침 2가지는?', options: ['사성제와 팔정도', '자애와 연민', '선정과 지혜', '계율과 보시'], answer: 0 },
]

export default function ScriptureLearn() {
  const nav = useNavigate()
  const [stepIdx, setStepIdx] = useState(0)
  const [hearts, setHearts] = useState(3)
  const [selected, setSelected] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)

  const step = STEPS[stepIdx]
  const progress = ((stepIdx + 1) / STEPS.length) * 100

  const speak = (text: string) => speakPali(text)

  const isQuizType = step.type === 'match-listen' || step.type === 'match-meaning' || step.type === 'match-reverse' || step.type === 'quiz'

  // 보기 랜덤: 정답 텍스트로 비교 (인덱스 문제 해결)
  const getAnswerText = (): string => {
    if (!('answer' in step) || !('options' in step)) return ''
    const s = step as { options: string[]; answer: number }
    return s.options[s.answer]
  }

  const shuffleArray = (arr: string[]): string[] => {
    const shuffled = [...arr]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(((stepIdx * 7 + 3) * (i + 1) * 13 + i) % (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  // 셔플된 옵션 (stepIdx마다 고정)
  const shuffledOpts = (() => {
    if (!('options' in step)) return []
    return shuffleArray((step as { options: string[] }).options)
  })()

  const handleCheck = () => {
    if (selected === null) return
    setShowResult(true)
    const answerText = getAnswerText()
    if (shuffledOpts[selected] !== answerText) setHearts(h => Math.max(0, h - 1))
  }

  const handleNext = () => {
    if (stepIdx + 1 >= STEPS.length) { nav('/lesson-complete'); return }
    setStepIdx(i => i + 1)
    setSelected(null)
    setShowResult(false)
  }

  const isCorrectAnswer = selected !== null && shuffledOpts[selected] === getAnswerText()

  // 하트 소진
  if (hearts <= 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)' }}>
        <span className="text-5xl">😔</span>
        <h2 className="text-xl font-bold mt-4">연꽃잎을 모두 잃었습니다</h2>
        <p className="text-sm mt-2" style={{ color: 'var(--color-text-secondary)' }}>복습 후 다시 도전하세요</p>
        <button onClick={() => nav('/')} className="mt-6 px-6 py-3 rounded-xl text-white font-bold" style={{ backgroundColor: 'var(--color-primary)' }}>홈으로</button>
      </div>
    )
  }

  // 선택지 렌더링 (셔플된 옵션, 정답은 텍스트로 비교)
  const renderOptions = (_options: string[]) => {
    const answerText = getAnswerText()
    return (
    <div className="space-y-2.5">
      {shuffledOpts.map((opt, i) => {
        const isAnswer = showResult && opt === answerText
        const isWrong = showResult && selected === i && opt !== answerText
        return (
          <button key={i} onClick={() => !showResult && setSelected(i)} disabled={showResult}
            className="w-full p-3.5 rounded-xl text-left text-sm font-medium transition-all active:scale-[0.98]"
            style={{
              backgroundColor: isAnswer ? '#E8F5E9' : isWrong ? '#FFEBEE' : 'var(--color-surface)',
              border: isAnswer ? '2px solid #4CAF50' : isWrong ? '2px solid #F44336' : selected === i ? '2px solid var(--color-primary)' : '1.5px solid var(--color-border)',
            }}>
            {isAnswer && '✅ '}{isWrong && '❌ '}{opt}
          </button>
        )
      })}
    </div>
  )}

  // 이전 스텝으로
  const handlePrev = () => {
    if (stepIdx > 0) {
      setStepIdx(i => i - 1)
      setSelected(null)
      setShowResult(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)' }}>
      {/* 상단바 */}
      <div className="shrink-0 flex items-center gap-2 px-4 pt-3 pb-2">
        <button onClick={() => nav(-1)} className="text-lg">✕</button>
        <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--color-border)' }}>
          <div className="h-full rounded-full transition-all duration-500" style={{ width: `${progress}%`, backgroundColor: 'var(--color-primary)' }} />
        </div>
        <div className="flex gap-0.5 shrink-0">
          {[0, 1, 2].map(i => (<span key={i} className={`text-base ${i < hearts ? '' : 'opacity-20 grayscale'}`}>🪷</span>))}
        </div>
      </div>

      {/* 메인 */}
      <div className="flex-1 flex flex-col overflow-y-auto px-4 pt-2">

        {/* ===== 소개 ===== */}
        {step.type === 'intro' && (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-2">
            <span className="text-6xl mb-4">{step.icon}</span>
            <h1 className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>{step.title}</h1>
            <p className="text-sm pali-text mt-1" style={{ color: 'var(--color-text-secondary)' }}>{step.subtitle}</p>
            <p className="text-sm mt-6 whitespace-pre-line leading-relaxed">{step.description}</p>
          </div>
        )}

        {/* ===== 단어 소개 (teach) ===== */}
        {step.type === 'teach' && (
          <div className="flex-1 flex flex-col px-2 pt-2">
            {/* 경전 원문 컨텍스트 — 항상 먼저 보여줌 */}
            {step.verseLine && (
              <div className="rounded-xl p-3 mb-3" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
                <p className="pali-text text-sm leading-relaxed" style={{ color: 'var(--color-primary)' }}>
                  {step.verseLine.split(new RegExp(`(${step.word.split(' ')[0]})`, 'i')).map((part, i) =>
                    part.toLowerCase() === step.word.split(' ')[0].toLowerCase()
                      ? <span key={i} className="font-bold px-0.5 rounded" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>{part}</span>
                      : <span key={i}>{part}</span>
                  )}
                </p>
                <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>{step.verseLineKo}</p>
              </div>
            )}

            {/* 배우는 단어 카드 */}
            <div className="rounded-2xl p-5 text-center" style={{ backgroundColor: 'var(--color-surface)', border: '2px solid var(--color-primary)' }}>
              <span className="text-4xl">{step.icon}</span>
              <p className="pali-text text-2xl font-bold mt-3" style={{ color: 'var(--color-primary)' }}>{step.word}</p>
              <p className="text-base mt-1 font-medium">{step.pronKo}</p>
              {step.audio && (
                <button onClick={() => speak(step.word)} className="mt-2 px-4 py-1.5 rounded-full text-xs text-white" style={{ backgroundColor: 'var(--color-accent)' }}>
                  🔊 발음 듣기
                </button>
              )}
              <hr className="my-3" style={{ borderColor: 'var(--color-border)' }} />
              <p className="text-lg font-bold">{step.meaning}</p>
            </div>

            {/* 불교 용어 설명 */}
            {step.buddhism && (
              <div className="mt-3 rounded-xl p-3 text-left text-xs" style={{ backgroundColor: '#E8F5E9', border: '1px solid #C8E6C9' }}>
                ☸️ {step.buddhism}
              </div>
            )}
          </div>
        )}

        {/* ===== 듣고 매칭 ===== */}
        {step.type === 'match-listen' && (
          <div className="flex-1 flex flex-col">
            <p className="text-sm font-bold mb-3">{step.instruction}</p>
            <button onClick={() => speak(step.word)}
              className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-3xl active:scale-95 transition-transform mb-2"
              style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
              🔊
            </button>
            <p className="text-center text-xs mb-4" style={{ color: 'var(--color-text-secondary)' }}>탭하여 다시 듣기</p>
            {renderOptions(step.options)}
          </div>
        )}

        {/* ===== 뜻 매칭 ===== */}
        {step.type === 'match-meaning' && (
          <div className="flex-1 flex flex-col">
            <p className="text-sm font-bold mb-2">{step.instruction}</p>
            <div className="rounded-xl p-4 mb-4 text-center" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
              <p className="pali-text text-xl font-bold" style={{ color: 'var(--color-primary)' }}>{step.word}</p>
            </div>
            {renderOptions(step.options)}
          </div>
        )}

        {/* ===== 역방향 매칭 ===== */}
        {step.type === 'match-reverse' && (
          <div className="flex-1 flex flex-col">
            <p className="text-sm font-bold mb-4">{step.instruction}</p>
            <div className="space-y-2.5">
              {shuffledOpts.map((opt, i) => {
                const answerText = getAnswerText()
                const isAns = showResult && opt === answerText
                const isWrn = showResult && selected === i && opt !== answerText
                return (
                  <button key={i} onClick={() => { if (!showResult) { setSelected(i); speak(opt) } }} disabled={showResult}
                    className="w-full p-3.5 rounded-xl text-center text-sm font-medium pali-text transition-all active:scale-[0.98]"
                    style={{
                      backgroundColor: isAns ? '#E8F5E9' : isWrn ? '#FFEBEE' : 'var(--color-surface)',
                      border: isAns ? '2px solid #4CAF50' : isWrn ? '2px solid #F44336' : selected === i ? '2px solid var(--color-primary)' : '1.5px solid var(--color-border)',
                    }}>
                    {isAns && '✅ '}{isWrn && '❌ '}{opt}
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* ===== 경전 구절 ===== */}
        {step.type === 'verse' && (
          <div className="flex-1 flex flex-col">
            <div className="rounded-2xl p-4" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
              {/* 빠알리 원문 — 하이라이트 단어 강조 */}
              <p className="pali-text text-[15px] leading-relaxed">
                {step.pali.split(/(\s+)/).map((token, i) => {
                  const clean = token.replace(/[,.:;—""]/g, '').toLowerCase()
                  const isHL = step.highlight?.some(h => clean.includes(h.toLowerCase()))
                  return (
                    <span key={i}>
                      {isHL ? (
                        <button onClick={() => speak(token)} className="font-bold px-0.5 rounded" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                          {token}
                        </button>
                      ) : (
                        <span style={{ color: 'var(--color-primary)' }}>{token}</span>
                      )}
                    </span>
                  )
                })}
              </p>
              <button onClick={() => speak(step.pali)} className="mt-2 text-xs flex items-center gap-1" style={{ color: 'var(--color-accent)' }}>🔊 전체 듣기</button>
              {/* 한국어 발음 */}
              <p className="text-xs mt-2" style={{ color: 'var(--color-primary)', opacity: 0.7 }}>🗣️ {step.pronKo}</p>
              {/* 번역 */}
              <p className="text-xs mt-1.5" style={{ color: 'var(--color-text-secondary)' }}>{step.translation}</p>
            </div>
            {step.note && (
              <div className="mt-3 rounded-xl p-3 text-xs" style={{ backgroundColor: '#FFF8E1', border: '1px solid #FFE082' }}>
                {step.note}
              </div>
            )}
          </div>
        )}

        {/* ===== 퀴즈 ===== */}
        {step.type === 'quiz' && (
          <div className="flex-1 flex flex-col">
            <p className="text-base font-bold mb-3">{step.question}</p>
            {step.hint && !showResult && <p className="text-xs mb-3" style={{ color: 'var(--color-text-secondary)' }}>💡 {step.hint}</p>}
            {renderOptions(step.options)}
          </div>
        )}

        {/* ===== 따라 읽기 ===== */}
        {step.type === 'speak' && (
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <p className="text-sm mb-4">🎤 따라 읽어보세요</p>
            <div className="rounded-2xl p-5 w-full" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
              <p className="pali-text text-base font-semibold" style={{ color: 'var(--color-primary)' }}>{step.pali}</p>
              <p className="text-sm mt-2 font-medium">{step.pronKo}</p>
              <button onClick={() => speak(step.pali)} className="mt-3 px-5 py-2 rounded-full text-white text-sm" style={{ backgroundColor: 'var(--color-accent)' }}>🔊 먼저 듣기</button>
            </div>
            <button className="mt-6 w-16 h-16 rounded-full flex items-center justify-center text-3xl active:scale-90 transition-transform" style={{ backgroundColor: '#EF5350', color: 'white' }}>🎤</button>
            <p className="text-xs mt-2" style={{ color: 'var(--color-text-secondary)' }}>버튼을 누르고 따라 읽으세요</p>
          </div>
        )}

        {/* ===== 문법 소개 ===== */}
        {step.type === 'teach-grammar' && (
          <div className="flex-1 flex flex-col items-center justify-center px-2">
            <span className="text-4xl mb-3">📐</span>
            <h2 className="text-lg font-bold">{step.title}</h2>
            <div className="mt-4 rounded-2xl p-4 w-full" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
              <p className="pali-text text-xl font-bold text-center" style={{ color: 'var(--color-primary)' }}>{step.example}</p>
              <p className="text-center mt-1 font-semibold">{step.exampleKo}</p>
            </div>
            <div className="mt-3 rounded-xl p-3 w-full text-sm whitespace-pre-line" style={{ backgroundColor: '#E3F2FD', border: '1px solid #BBDEFB' }}>
              {step.explanation}
            </div>
          </div>
        )}

        <div className="flex-1 min-h-4" />
      </div>

      {/* 하단 */}
      <div className="shrink-0 px-4 pb-20 pt-2">
        {showResult && isQuizType && (
          <div className="rounded-xl p-2.5 mb-2" style={{ backgroundColor: isCorrectAnswer ? '#E8F5E9' : '#FFEBEE' }}>
            <p className="text-sm font-bold">{isCorrectAnswer ? '✅ Sādhu! 정답!' : '❌ 틀렸습니다'}</p>
          </div>
        )}
        <div className="flex gap-2">
          {stepIdx > 0 && (
            <button onClick={handlePrev}
              className="px-4 py-3.5 rounded-xl font-bold text-sm active:scale-[0.97] transition-transform"
              style={{ border: '2px solid var(--color-border)', color: 'var(--color-text)' }}>
              ← 이전
            </button>
          )}
          <button
            onClick={isQuizType && !showResult ? handleCheck : handleNext}
            disabled={isQuizType && selected === null && !showResult}
            className="flex-1 py-3.5 rounded-xl text-white font-bold text-base disabled:opacity-40 active:scale-[0.97] transition-transform"
            style={{ backgroundColor: 'var(--color-primary)' }}>
            {isQuizType && !showResult ? '확인' : '다음 →'}
          </button>
        </div>
      </div>
    </div>
  )
}
