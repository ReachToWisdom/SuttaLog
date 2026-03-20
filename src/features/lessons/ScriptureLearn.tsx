// 경전 중심 Duolingo식 학습 — 문장별 모든 단어 순서대로
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { speakPali } from '../../utils/pali-tts'

// --- 스텝 타입 ---
type Step =
  | { type: 'intro'; title: string; subtitle: string; description: string; icon: string }
  | { type: 'teach'; word: string; pronKo: string; meaning: string; icon: string; buddhism?: string; audio?: boolean; verseLine?: string; verseLineKo?: string; grammar?: string; baseForm?: string; formNote?: string }
  | { type: 'match-listen'; instruction: string; word: string; pronKo: string; options: string[]; answer: number }
  | { type: 'match-meaning'; instruction: string; word: string; options: string[]; answer: number }
  | { type: 'match-reverse'; instruction: string; meaning: string; options: string[]; answer: number }
  | { type: 'verse'; pali: string; pronKo: string; translation: string; highlight?: string[]; note?: string }
  | { type: 'quiz'; question: string; options: string[]; answer: number; hint?: string }
  | { type: 'speak'; pali: string; pronKo: string }
  | { type: 'teach-grammar'; title: string; example: string; exampleKo: string; explanation: string }

const VERSE1 = 'Ekaṃ samayaṃ bhagavā bārāṇasiyaṃ viharati isipatane migadāye.'
const VERSE1_KO = '한 때 세존께서 바라나시의 녹야원, 이시빠따나에 머무셨다.'
const VERSE2 = 'Tatra kho bhagavā pañcavaggiye bhikkhū āmantesi:'
const VERSE2_KO = '거기서 세존께서 다섯 비구에게 말씀하셨다:'

// --- 전법륜경 1과: 문장별 모든 단어 ---
const STEPS: Step[] = [
  // ===== 경전 소개 =====
  {
    type: 'intro', icon: '☸️',
    title: '전법륜경',
    subtitle: 'Dhammacakkappavattana Sutta (SN 56.11)',
    description: '붓다가 깨달음을 이룬 후\n다섯 수행자에게 처음으로 설한 가르침.\n\n이 경전에서 사성제(四聖諦)와\n팔정도(八正道)가 최초로 설해졌습니다.\n\n첫 문장부터 한 단어씩 배워봅시다.',
  },

  // ===== 첫 문장: 7개 단어 순서대로 =====

  // 1) Ekaṃ
  {
    type: 'teach', icon: '1️⃣',
    word: 'ekaṃ', pronKo: '에깡', meaning: '하나의, 어떤',
    grammar: '수사(數詞), 대격',
    baseForm: 'eka (하나)',
    formNote: 'eka → ekaṃ: 대격 어미 -ṃ이 붙어 "하나의(때를)"이 됨',
    verseLine: VERSE1, verseLineKo: VERSE1_KO,
    audio: true,
  },

  // 2) samayaṃ
  {
    type: 'teach', icon: '⏰',
    word: 'samayaṃ', pronKo: '사마양', meaning: '때, 시기',
    grammar: '남성명사, 대격 단수',
    baseForm: 'samaya (때)',
    formNote: 'samaya → samayaṃ: 남성 -a 어간 대격 어미 -ṃ. "ekaṃ samayaṃ" = "한 때에"',
    verseLine: VERSE1, verseLineKo: VERSE1_KO,
    audio: true,
  },

  // 문법 포인트: 대격 -ṃ
  {
    type: 'teach-grammar',
    title: '대격(對格) 어미 -ṃ',
    example: 'eka → ekaṃ, samaya → samayaṃ',
    exampleKo: '하나 → 하나의(를), 때 → 때(를)',
    explanation: '남성/중성 -a 어간 명사는 대격에서 -ṃ이 붙습니다.\n대격 = 목적어 "~을/를" 또는 시간 표현에 사용.\n"ekaṃ samayaṃ" = "한 때에" (시간 부사구)',
  },

  // 3) bhagavā
  {
    type: 'teach', icon: '🙏',
    word: 'bhagavā', pronKo: '바가와~', meaning: '세존께서',
    grammar: '남성명사, 주격 단수',
    baseForm: 'bhagavant (복덕 있는 분)',
    formNote: 'bhagavant → bhagavā: 특수 어간(-ant)의 주격 형태. 주격 = "~이/가" (주어)',
    verseLine: VERSE1, verseLineKo: VERSE1_KO,
    buddhism: '세존(世尊). 붓다의 존칭. "복덕을 갖추신 분". 경전에서 가장 많이 쓰는 호칭.',
    audio: true,
  },

  // 퀴즈: 첫 3단어
  { type: 'quiz', question: '"ekaṃ samayaṃ bhagavā"의 뜻은?',
    options: ['한 때 세존께서', '모든 비구들이', '괴로움의 원인은', '법의 바퀴를'],
    answer: 0, hint: 'ekaṃ=하나의, samayaṃ=때, bhagavā=세존' },

  // 4) bārāṇasiyaṃ
  {
    type: 'teach', icon: '📍',
    word: 'bārāṇasiyaṃ', pronKo: '바~라~나시양', meaning: '바라나시에서',
    grammar: '여성명사, 처격(7격) 단수',
    baseForm: 'Bārāṇasī (바라나시)',
    formNote: 'Bārāṇasī → bārāṇasiyaṃ: 처격 어미 = "~에서". 장소를 나타냄',
    verseLine: VERSE1, verseLineKo: VERSE1_KO,
    buddhism: '바라나시. 현재 인도 우타르프라데시주 도시. 붓다가 첫 설법을 한 곳.',
    audio: true,
  },

  // 5) viharati
  {
    type: 'teach', icon: '🏠',
    word: 'viharati', pronKo: '위하라띠', meaning: '머무시다, 거주하다',
    grammar: '동사, 현재 3인칭 단수',
    baseForm: '√vi-har (머물다)',
    formNote: '어근 √har(나르다) + 접두사 vi = 머물다.\nviharati = "그가 머문다". 경전 서두 정형구에 항상 나옴.',
    verseLine: VERSE1, verseLineKo: VERSE1_KO,
    buddhism: '비하라(vihāra) = 정사, 사원. 같은 어근에서 유래.',
    audio: true,
  },

  // 6) isipatane
  {
    type: 'teach', icon: '🏔️',
    word: 'isipatane', pronKo: '이시빠따네', meaning: '이시빠따나에',
    grammar: '중성명사, 처격(7격) 단수',
    baseForm: 'Isipatana (선인 떨어진 곳)',
    formNote: 'Isipatana → isipatane: 중성 -a 어간 처격 어미 -e. "~에"를 나타냄',
    verseLine: VERSE1, verseLineKo: VERSE1_KO,
    buddhism: '이시빠따나 = "선인(isi)들이 내려온(patana) 곳". 녹야원의 다른 이름.',
    audio: true,
  },

  // 7) migadāye
  {
    type: 'teach', icon: '🦌',
    word: 'migadāye', pronKo: '미가다~예', meaning: '녹야원에',
    grammar: '남성명사, 처격(7격) 단수',
    baseForm: 'migadāya (사슴 동산)',
    formNote: 'miga(사슴) + dāya(동산) = migadāya.\nmigadāya → migadāye: 남성 -a 어간 처격 어미 -e',
    verseLine: VERSE1, verseLineKo: VERSE1_KO,
    buddhism: '녹야원(鹿野苑). 사슴이 노니는 동산. 붓다 최초 설법지. 현재 사르나트(Sarnath).',
    audio: true,
  },

  // 문법 포인트: 처격
  {
    type: 'teach-grammar',
    title: '처격(處格, 7격) 어미 -e / -yaṃ',
    example: 'Bārāṇasī → bārāṇasiyaṃ\nmigadāya → migadāye',
    exampleKo: '바라나시 → 바라나시에서\n녹야원 → 녹야원에',
    explanation: '처격 = "~에서, ~안에" (장소)\n-a 어간: -e (migadāye)\n-ī 어간: -iyaṃ (bārāṇasiyaṃ)\n한국어 조사 "~에서"와 같은 역할.',
  },

  // ===== 첫 문장 전체 확인 =====
  {
    type: 'verse',
    pali: VERSE1,
    pronKo: '에깡 사마양 바가와~ 바~라~나시양 위하라띠 이시빠따네 미가다~예.',
    translation: VERSE1_KO,
    highlight: ['ekaṃ', 'samayaṃ', 'bhagavā', 'bārāṇasiyaṃ', 'viharati', 'isipatane', 'migadāye'],
    note: '✅ 첫 문장의 모든 단어를 배웠습니다! 각 단어를 탭해 복습하세요.',
  },

  // 첫 문장 퀴즈
  { type: 'quiz', question: '"viharati"의 뜻은?',
    options: ['말하다', '머무시다', '걷다', '앉다'], answer: 1 },
  { type: 'quiz', question: '"migadāye"에서 -e는 무슨 격?',
    options: ['주격 (~이/가)', '대격 (~을/를)', '처격 (~에서)', '속격 (~의)'], answer: 2 },
  { type: 'quiz', question: '"bārāṇasiyaṃ"의 원형(사전형)은?',
    options: ['bārāṇasī', 'bārāṇasa', 'bārāṇasi', 'bārāṇa'], answer: 0, hint: '-iyaṃ은 -ī 어간의 처격' },

  // 따라 읽기
  { type: 'speak', pali: 'Ekaṃ samayaṃ bhagavā bārāṇasiyaṃ viharati isipatane migadāye.',
    pronKo: '에깡 사마양 바가와~ 바~라~나시양 위하라띠 이시빠따네 미가다~예.' },

  // ===== 두 번째 문장: 5개 단어 =====

  // 1) Tatra
  {
    type: 'teach', icon: '👉',
    word: 'tatra', pronKo: '따뜨라', meaning: '거기서',
    grammar: '부사 (불변어)',
    formNote: '변하지 않는 단어(불변어). 격변화 없음. "그곳에서".',
    verseLine: VERSE2, verseLineKo: VERSE2_KO,
    audio: true,
  },

  // 2) kho
  {
    type: 'teach', icon: '❗',
    word: 'kho', pronKo: '코', meaning: '실로, 참으로',
    grammar: '강조 불변어',
    formNote: '문장을 강조하는 역할. 영어 "indeed". 번역에 잘 드러나지 않지만 경전에 매우 자주 나옴.',
    verseLine: VERSE2, verseLineKo: VERSE2_KO,
    audio: true,
  },

  // 3) pañcavaggiye (+ 합성어 분석)
  {
    type: 'teach', icon: '5️⃣',
    word: 'pañcavaggiye', pronKo: '빤짜왁기예', meaning: '다섯 무리의',
    grammar: '형용사, 대격 복수',
    baseForm: 'pañcavaggiya',
    formNote: 'pañca(다섯) + vaggiya(무리의) = 합성어.\npañcavaggiya → pañcavaggiye: 대격 복수 어미 -e',
    verseLine: VERSE2, verseLineKo: VERSE2_KO,
    buddhism: '다섯 비구(五比丘). 꼰단냐, 왑빠, 밧디야, 마하나마, 앗사지. 붓다와 함께 고행한 수행자들.',
    audio: true,
  },

  // 4) bhikkhū (+ bhikkhu 격변화 교육!)
  {
    type: 'teach', icon: '🧘',
    word: 'bhikkhū', pronKo: '빅쿠~', meaning: '비구들을',
    grammar: '남성명사, 대격 복수',
    baseForm: 'bhikkhu (비구, 단수)',
    formNote: 'bhikkhu(비구) 의 변화:\n• bhikkhu = 주격 단수 "비구가"\n• bhikkhū = 대격 복수 "비구들을"\n• bhikkhave = 호격 복수 "비구들이여"\n\n여기서는 "다섯 비구들을(대상으로)"이라는 뜻.',
    verseLine: VERSE2, verseLineKo: VERSE2_KO,
    buddhism: '비구(比丘). 출가 수행자. 원래 뜻은 "걸식하는 자". 붓다의 제자.',
    audio: true,
  },

  // 문법: bhikkhu 격변화표
  {
    type: 'teach-grammar',
    title: 'bhikkhu(비구)의 격변화',
    example: 'bhikkhu → bhikkhū → bhikkhave',
    exampleKo: '비구가 → 비구들을 → 비구들이여',
    explanation: '-u 어간 남성명사 변화:\n• 주격(~이/가): bhikkhu (단수) / bhikkhū (복수)\n• 대격(~을/를): bhikkhuṃ (단수) / bhikkhū (복수)\n• 호격(~이여): bhikkhu (단수) / bhikkhave (복수)\n\n💡 대격 복수와 주격 복수가 같은 형태(bhikkhū)!',
  },

  // 5) āmantesi
  {
    type: 'teach', icon: '🗣️',
    word: 'āmantesi', pronKo: '아~만떼시', meaning: '말씀하셨다, 부르셨다',
    grammar: '동사, 과거(aorist) 3인칭 단수',
    baseForm: '√manteti (부르다, 말하다)',
    formNote: 'ā(접두사) + mantesi(과거형).\n현재: manteti "부른다"\n과거: āmantesi "불렀다/말씀하셨다"\n\n접두사 ā-는 방향을 나타냄.',
    verseLine: VERSE2, verseLineKo: VERSE2_KO,
    audio: true,
  },

  // ===== 두 번째 문장 전체 확인 =====
  {
    type: 'verse',
    pali: VERSE2,
    pronKo: '따뜨라 코 바가와~ 빤짜왁기예 빅쿠~ 아~만떼시:',
    translation: VERSE2_KO,
    highlight: ['tatra', 'kho', 'bhagavā', 'pañcavaggiye', 'bhikkhū', 'āmantesi'],
    note: '✅ 두 번째 문장 완료! bhagavā가 다시 나왔죠? 같은 단어가 반복됩니다.',
  },

  // 두 번째 문장 퀴즈
  { type: 'quiz', question: '"bhikkhū"와 "bhikkhave"의 차이는?',
    options: [
      'bhikkhū=대격(~을), bhikkhave=호격(~이여)',
      '같은 뜻, 다른 발음',
      'bhikkhū=단수, bhikkhave=복수',
      'bhikkhū=과거, bhikkhave=현재',
    ], answer: 0, hint: '격(格)이 다릅니다' },

  { type: 'quiz', question: '"āmantesi"는 어떤 시제?',
    options: ['현재 (지금 말한다)', '과거 (말씀하셨다)', '미래 (말할 것이다)', '명령 (말하라)'],
    answer: 1, hint: '경전 서두는 과거 이야기' },

  { type: 'quiz', question: '"pañcavaggiye"에서 pañca는?',
    options: ['셋', '넷', '다섯', '여섯'], answer: 2 },

  // 따라 읽기
  { type: 'speak', pali: VERSE2, pronKo: '따뜨라 코 바가와~ 빤짜왁기예 빅쿠~ 아~만떼시:' },

  // ===== 종합 퀴즈 =====
  { type: 'quiz', question: '전법륜경의 첫 설법 장소는?',
    options: ['보드가야', '사위성', '바라나시 녹야원', '라자가하'], answer: 2 },
  { type: 'quiz', question: '"ekaṃ"에서 -ṃ은 무슨 격 어미?',
    options: ['주격', '대격', '처격', '호격'], answer: 1 },
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

  // 정답 텍스트 기반 비교
  const getAnswerText = (): string => {
    if (!('answer' in step) || !('options' in step)) return ''
    const s = step as { options: string[]; answer: number }
    return s.options[s.answer]
  }

  // 셔플
  const shuffledOpts = (() => {
    if (!('options' in step)) return []
    const opts = [...(step as { options: string[] }).options]
    for (let i = opts.length - 1; i > 0; i--) {
      const j = Math.abs(((stepIdx + 1) * 31 + i * 17) % (i + 1))
      ;[opts[i], opts[j]] = [opts[j], opts[i]]
    }
    return opts
  })()

  const handleCheck = () => {
    if (selected === null) return
    setShowResult(true)
    if (shuffledOpts[selected] !== getAnswerText()) setHearts(h => Math.max(0, h - 1))
  }

  const handleNext = () => {
    if (stepIdx + 1 >= STEPS.length) { nav('/lesson-complete'); return }
    setStepIdx(i => i + 1)
    setSelected(null); setShowResult(false)
  }

  const handlePrev = () => {
    if (stepIdx > 0) { setStepIdx(i => i - 1); setSelected(null); setShowResult(false) }
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

  // 셔플된 선택지 렌더링
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

        {/* 소개 */}
        {step.type === 'intro' && (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-2">
            <span className="text-6xl mb-4">{step.icon}</span>
            <h1 className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>{step.title}</h1>
            <p className="text-sm pali-text mt-1" style={{ color: 'var(--color-text-secondary)' }}>{step.subtitle}</p>
            <p className="text-sm mt-6 whitespace-pre-line leading-relaxed">{step.description}</p>
          </div>
        )}

        {/* 단어 소개 */}
        {step.type === 'teach' && (
          <div className="flex-1 flex flex-col pt-1">
            {/* 경전 원문 — 배우는 단어 하이라이트 */}
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

            {/* 단어 카드 */}
            <div className="rounded-2xl p-4 text-center" style={{ backgroundColor: 'var(--color-surface)', border: '2px solid var(--color-primary)' }}>
              <span className="text-3xl">{step.icon}</span>
              <p className="pali-text text-2xl font-bold mt-2" style={{ color: 'var(--color-primary)' }}>{step.word}</p>
              <p className="text-sm mt-1 font-medium">{step.pronKo}</p>
              {step.audio && (
                <button onClick={() => speak(step.word)} className="mt-2 px-4 py-1.5 rounded-full text-xs text-white" style={{ backgroundColor: 'var(--color-accent)' }}>🔊 발음</button>
              )}
              <hr className="my-3" style={{ borderColor: 'var(--color-border)' }} />
              <p className="text-lg font-bold">{step.meaning}</p>
              {step.grammar && <p className="text-xs mt-1 px-2 py-0.5 rounded-full inline-block" style={{ backgroundColor: 'var(--color-border)' }}>{step.grammar}</p>}
            </div>

            {/* 원형 + 변화 설명 */}
            {(step.baseForm || step.formNote) && (
              <div className="mt-2 rounded-xl p-3 text-xs" style={{ backgroundColor: '#E3F2FD', border: '1px solid #BBDEFB' }}>
                {step.baseForm && <p className="font-bold">📐 원형: {step.baseForm}</p>}
                {step.formNote && <p className="mt-1 whitespace-pre-line" style={{ color: 'var(--color-text-secondary)' }}>{step.formNote}</p>}
              </div>
            )}

            {/* 불교 용어 */}
            {step.buddhism && (
              <div className="mt-2 rounded-xl p-3 text-xs" style={{ backgroundColor: '#E8F5E9', border: '1px solid #C8E6C9' }}>
                ☸️ {step.buddhism}
              </div>
            )}
          </div>
        )}

        {/* 듣고 매칭 */}
        {step.type === 'match-listen' && (
          <div className="flex-1 flex flex-col">
            <p className="text-sm font-bold mb-3">{step.instruction}</p>
            <button onClick={() => speak(step.word)}
              className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-3xl active:scale-95 transition-transform mb-4"
              style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>🔊</button>
            {renderOptions()}
          </div>
        )}

        {/* 퀴즈 */}
        {step.type === 'quiz' && (
          <div className="flex-1 flex flex-col">
            <p className="text-base font-bold mb-3">{step.question}</p>
            {step.hint && !showResult && <p className="text-xs mb-3" style={{ color: 'var(--color-text-secondary)' }}>💡 {step.hint}</p>}
            {renderOptions()}
          </div>
        )}

        {/* 경전 구절 */}
        {step.type === 'verse' && (
          <div className="flex-1 flex flex-col">
            <div className="rounded-2xl p-4" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
              <p className="pali-text text-[15px] leading-relaxed">
                {step.pali.split(/(\s+)/).map((token, i) => {
                  const clean = token.replace(/[,.:;—""]/g, '').toLowerCase()
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

        {/* 따라 읽기 */}
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

        {/* 문법 */}
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

        {/* 역방향 매칭 */}
        {step.type === 'match-reverse' && (
          <div className="flex-1 flex flex-col">
            <p className="text-sm font-bold mb-4">{step.instruction}</p>
            {renderOptions()}
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
              className="px-4 py-3.5 rounded-xl font-bold text-sm active:scale-[0.97]"
              style={{ border: '2px solid var(--color-border)' }}>← 이전</button>
          )}
          <button
            onClick={isQuizType && !showResult ? handleCheck : handleNext}
            disabled={isQuizType && selected === null && !showResult}
            className="flex-1 py-3.5 rounded-xl text-white font-bold text-base disabled:opacity-40 active:scale-[0.97]"
            style={{ backgroundColor: 'var(--color-primary)' }}>
            {isQuizType && !showResult ? '확인' : '다음 →'}
          </button>
        </div>
      </div>
    </div>
  )
}
