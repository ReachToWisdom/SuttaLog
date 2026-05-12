// 6과: 축복경 (Maṅgala Sutta) — 최상의 축복
import type { StepType } from './lesson-data-sn56-11'

const V1 = 'Asevanā ca bālānaṃ, paṇḍitānañ ca sevanā;\nPūjā ca pūjanīyānaṃ — etaṃ maṅgalamuttamaṃ.'
const V1Ko = '아세와나 짜 발라낭, 빤디따난짜 세와나;\n뿌자 짜 뿌자니야낭 — 에땅 망갈라뭇따망.'
const V1K = '어리석은 자를 가까이하지 않고, 지혜로운 자를 가까이하며;\n경배받을 분께 경배함 — 이것이 최상의 축복이다.'

const V4 = 'Mātāpitu upaṭṭhānaṃ, puttadārassa saṅgaho;\nAnākulā ca kammantā — etaṃ maṅgalamuttamaṃ.'
const V4Ko = '마따삐뚜 우빳타낭, 뿟따다랏사 상가호;\n아나꿀라 짜 깜만따 — 에땅 망갈라뭇따망.'
const V4K = '부모를 봉양하고, 처자식을 돌보며;\n혼란 없는 일 — 이것이 최상의 축복이다.'

export const LESSON_MANGALA: StepType[] = [
  {
    type: 'intro',
    title: '축복경',
    subtitle: 'Maṅgala Sutta — 최상의 축복',
    description: '한 천신이 "최상의 축복이 무엇인가?"라고 묻자 붓다께서 38가지 축복을 설하신 경입니다.',
    icon: '🌸',
  },
  {
    type: 'teach',
    word: 'maṅgala',
    pronKo: '망갈라',
    meaning: '축복, 길상(吉祥)',
    icon: '🌸',
  },
  {
    type: 'teach',
    word: 'uttama',
    pronKo: '웃따마',
    meaning: '최상의, 최고의',
    icon: '🏆',
    grammar: '형용사 (최상급)',
  },
  {
    type: 'teach',
    word: 'Asevanā',
    pronKo: '아세와나',
    meaning: '가까이하지 않음, 절교',
    icon: '🚶',
    grammar: '명사 (여성 주격)',
  },
  {
    type: 'teach',
    word: 'bāla',
    pronKo: '발라',
    meaning: '어리석은 자, 우자(愚者)',
    icon: '😶',
  },
  {
    type: 'teach',
    word: 'paṇḍita',
    pronKo: '빤디따',
    meaning: '지혜로운 자, 현자(賢者)',
    icon: '🧠',
  },
  {
    type: 'teach',
    word: 'Pūjā',
    pronKo: '뿌자',
    meaning: '공양, 경배',
    icon: '🕯️',
    grammar: '명사 (여성 주격)',
  },
  {
    type: 'teach-grammar',
    title: '게송 구조',
    example: V1,
    exampleKo: V1K,
    explanation: '[축복 1], [축복 2];\n[축복 3] — etaṃ maṅgalamuttamaṃ.\n\netaṃ = 이것이 / maṅgalamuttamaṃ = 최상의 축복\n총 10개 게송, 38가지 축복.',
  },
  {
    type: 'verse',
    pali: V1,
    pronKo: V1Ko,
    translation: V1K,
    highlight: ['etaṃ maṅgalamuttamaṃ'],
    note: '첫 번째 게송: 현자를 가까이하는 것이 축복',
  },
  {
    type: 'verse',
    pali: V4,
    pronKo: V4Ko,
    translation: V4K,
    highlight: ['Mātāpitu upaṭṭhānaṃ'],
    note: '네 번째 게송: 부모 봉양이 축복',
  },
  {
    type: 'quiz',
    question: '"maṅgala"의 뜻은?',
    options: ['고통', '축복, 길상', '계율', '지혜'],
    answer: 1,
  },
  {
    type: 'quiz',
    question: '첫 번째 게송의 핵심 가르침은?',
    options: ['부모 봉양', '어리석은 자를 가까이하지 않음', '다문(多聞)', '계율 수행'],
    answer: 1,
  },
  {
    type: 'quiz',
    question: '"etaṃ maṅgalamuttamaṃ"의 뜻은?',
    options: ['이것이 최상의 축복이다', '이것이 법이다', '이것이 계율이다', '이것이 귀의처이다'],
    answer: 0,
  },
  {
    type: 'speak',
    pali: V1,
    pronKo: V1Ko,
  },
  {
    type: 'speak',
    pali: V4,
    pronKo: V4Ko,
  },
  {
    type: 'arrange',
    instruction: '빠알리 문장을 순서대로 배열하세요.',
    translation: '이것이 최상의 축복이다.',
    blocks: ['maṅgalamuttamaṃ.', 'etaṃ'],
    correctOrder: [1, 0],
  },
]
