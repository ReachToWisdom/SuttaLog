// 2과: 삼귀의 — 붓다·담마·상가에 귀의
import type { StepType } from './lesson-data-sn56-11'

const V1 = 'Buddhaṃ saraṇaṃ gacchāmi.'
const V1Ko = '붓당 사라낭 갓차미.'
const V1K = '저는 붓다께 귀의합니다.'
const V2 = 'Dhammaṃ saraṇaṃ gacchāmi.'
const V2Ko = '담망 사라낭 갓차미.'
const V2K = '저는 담마(법)에 귀의합니다.'
const V3 = 'Saṅghaṃ saraṇaṃ gacchāmi.'
const V3Ko = '상강 사라낭 갓차미.'
const V3K = '저는 상가(승가)에 귀의합니다.'

const V_FULL =
  'Buddhaṃ saraṇaṃ gacchāmi.\nDhammaṃ saraṇaṃ gacchāmi.\nSaṅghaṃ saraṇaṃ gacchāmi.\n' +
  'Dutiyampi buddhaṃ saraṇaṃ gacchāmi.\nDutiyampi dhammaṃ saraṇaṃ gacchāmi.\nDutiyampi saṅghaṃ saraṇaṃ gacchāmi.\n' +
  'Tatiyampi buddhaṃ saraṇaṃ gacchāmi.\nTatiyampi dhammaṃ saraṇaṃ gacchāmi.\nTatiyampi saṅghaṃ saraṇaṃ gacchāmi.'
const V_FULLK =
  '저는 붓다께 귀의합니다.\n저는 담마에 귀의합니다.\n저는 상가에 귀의합니다.\n' +
  '두 번째로 붓다께 귀의합니다.\n두 번째로 담마에 귀의합니다.\n두 번째로 상가에 귀의합니다.\n' +
  '세 번째로 붓다께 귀의합니다.\n세 번째로 담마에 귀의합니다.\n세 번째로 상가에 귀의합니다.'

export const LESSON_TRISARANA: StepType[] = [
  {
    type: 'intro',
    title: '삼귀의',
    subtitle: '붓다·담마·상가에 귀의',
    description: '불교 수행의 기초가 되는 세 가지 귀의(三歸依)입니다. 삼보에 귀의하며 수행의 기반을 세웁니다.',
    icon: '🪷',
  },
  {
    type: 'teach',
    word: 'saraṇaṃ',
    pronKo: '사라낭',
    meaning: '귀의처, 피난처',
    icon: '🏠',
    grammar: '명사 (중성 단수 대격)',
  },
  {
    type: 'teach',
    word: 'gacchāmi',
    pronKo: '갓차미',
    meaning: '저는 갑니다, 나아갑니다',
    icon: '🚶',
    grammar: '동사 (현재 1인칭 단수)',
  },
  {
    type: 'teach',
    word: 'Dutiyampi',
    pronKo: '두띠얌삐',
    meaning: '두 번째로도',
    icon: '2️⃣',
    grammar: '부사 (dutiya + pi)',
  },
  {
    type: 'teach',
    word: 'Tatiyampi',
    pronKo: '따띠얌삐',
    meaning: '세 번째로도',
    icon: '3️⃣',
    grammar: '부사 (tatiya + pi)',
  },
  {
    type: 'teach-grammar',
    title: '귀의문 구조',
    example: 'Buddhaṃ saraṇaṃ gacchāmi.',
    exampleKo: '저는 붓다께 귀의합니다.',
    explanation: '[귀의 대상 대격] + saraṇaṃ + gacchāmi 구조를 반복합니다.\n1회 → 2회(dutiyampi) → 3회(tatiyampi) 순서로 세 번 반복합니다.',
  },
  {
    type: 'verse',
    pali: V_FULL,
    pronKo: '붓당 사라낭 갓차미...',
    translation: V_FULLK,
    highlight: ['saraṇaṃ gacchāmi'],
    note: '삼보에 세 번씩, 총 9문장을 독송합니다.',
  },
  {
    type: 'quiz',
    question: '"saraṇaṃ"의 뜻은?',
    options: ['경배', '귀의처, 피난처', '상가', '법'],
    answer: 1,
  },
  {
    type: 'quiz',
    question: '두 번째 귀의문은 어떻게 시작하나요?',
    options: ['Tatiyampi', 'Dutiyampi', 'Ekampi', 'Catutthapi'],
    answer: 1,
  },
  {
    type: 'speak',
    pali: V1,
    pronKo: V1Ko,
  },
  {
    type: 'speak',
    pali: V2,
    pronKo: V2Ko,
  },
  {
    type: 'speak',
    pali: V3,
    pronKo: V3Ko,
  },
  {
    type: 'arrange',
    instruction: '빠알리 문장을 순서대로 배열하세요.',
    translation: V1K,
    blocks: ['saraṇaṃ', 'Buddhaṃ', 'gacchāmi.'],
    correctOrder: [1, 0, 2],
  },
]
