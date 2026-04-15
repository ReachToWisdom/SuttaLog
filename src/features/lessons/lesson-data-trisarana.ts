// 2과: 삼귀의 — 붓다·담마·상가에 귀의

export type StepType =
  | 'intro' | 'teach' | 'teach-grammar' | 'verse'
  | 'quiz' | 'speak' | 'match-listen' | 'match-reverse'
  | 'writing' | 'arrange'

// 경문 원문 (1회차)
const V1 = 'Buddhaṃ saraṇaṃ gacchāmi.'
const V1K = '저는 붓다께 귀의합니다.'
const V2 = 'Dhammaṃ saraṇaṃ gacchāmi.'
const V2K = '저는 담마(법)에 귀의합니다.'
const V3 = 'Saṅghaṃ saraṇaṃ gacchāmi.'
const V3K = '저는 상가(승가)에 귀의합니다.'

const V_FULL =
  'Buddhaṃ saraṇaṃ gacchāmi.\n' +
  'Dhammaṃ saraṇaṃ gacchāmi.\n' +
  'Saṅghaṃ saraṇaṃ gacchāmi.\n' +
  'Dutiyampi buddhaṃ saraṇaṃ gacchāmi.\n' +
  'Dutiyampi dhammaṃ saraṇaṃ gacchāmi.\n' +
  'Dutiyampi saṅghaṃ saraṇaṃ gacchāmi.\n' +
  'Tatiyampi buddhaṃ saraṇaṃ gacchāmi.\n' +
  'Tatiyampi dhammaṃ saraṇaṃ gacchāmi.\n' +
  'Tatiyampi saṅghaṃ saraṇaṃ gacchāmi.'
const V_FULLK =
  '저는 붓다께 귀의합니다.\n저는 담마에 귀의합니다.\n저는 상가에 귀의합니다.\n' +
  '두 번째로 붓다께 귀의합니다.\n두 번째로 담마에 귀의합니다.\n두 번째로 상가에 귀의합니다.\n' +
  '세 번째로 붓다께 귀의합니다.\n세 번째로 담마에 귀의합니다.\n세 번째로 상가에 귀의합니다.'

export const LESSON_TRISARANA: { type: StepType; [key: string]: unknown }[] = [
  // ── 소개 ──────────────────────────────────────────
  {
    type: 'intro',
    title: '삼귀의',
    subtitle: '붓다·담마·상가에 귀의',
    source: 'Khp 1',
    description:
      '불교 수행의 기초가 되는 세 가지 귀의(三歸依)입니다. 붓다(Buddha), 담마(Dhamma), 상가(Saṅgha) — 삼보에 귀의하며 수행의 기반을 세웁니다.',
    pali: V1,
    korean: V1K,
  },

  // ── 핵심 단어 학습 ────────────────────────────────
  {
    type: 'teach',
    word: 'saraṇaṃ',
    meaning: '귀의처, 피난처',
    pronunciation: '사라남',
    grammar: '명사 (중성 단수 대격)',
    etymology: '√sar (기억하다, 의지하다) + aṇa',
    example: V1,
    exampleKorean: V1K,
  },
  {
    type: 'teach',
    word: 'gacchāmi',
    meaning: '저는 갑니다, 저는 나아갑니다',
    pronunciation: '갓차미',
    grammar: '동사 (현재 1인칭 단수)',
    etymology: '√gam (가다) + āmi',
    example: V1,
    exampleKorean: V1K,
  },
  {
    type: 'teach',
    word: 'Dutiyampi',
    meaning: '두 번째로도',
    pronunciation: '두띠얌삐',
    grammar: '부사 (dutiya + pi)',
    etymology: 'dutiya (두 번째) + pi (도, 역시)',
    example: 'Dutiyampi buddhaṃ saraṇaṃ gacchāmi.',
    exampleKorean: '두 번째로 붓다께 귀의합니다.',
  },
  {
    type: 'teach',
    word: 'Tatiyampi',
    meaning: '세 번째로도',
    pronunciation: '따띠얌삐',
    grammar: '부사 (tatiya + pi)',
    etymology: 'tatiya (세 번째) + pi (도, 역시)',
    example: 'Tatiyampi saṅghaṃ saraṇaṃ gacchāmi.',
    exampleKorean: '세 번째로 상가에 귀의합니다.',
  },

  // ── 문법 설명 ─────────────────────────────────────
  {
    type: 'teach-grammar',
    title: '귀의문 구조',
    explanation:
      '삼귀의는 [귀의 대상 대격] + saraṇaṃ + gacchāmi 구조를 반복합니다.\n\n' +
      'Buddhaṃ / Dhammaṃ / Saṅghaṃ — 각각 대격(saraṇaṃ으로 향하는 대상)\n\n' +
      '1회 → 2회(dutiyampi) → 3회(tatiyampi) 순서로 세 번 반복합니다.',
  },

  // ── 게송 전체 ─────────────────────────────────────
  {
    type: 'verse',
    pali: V_FULL,
    korean: V_FULLK,
    highlight: 'saraṇaṃ gacchāmi',
    note: '삼보(三寶)에 세 번씩, 총 9문장을 독송합니다.',
  },

  // ── 퀴즈 ──────────────────────────────────────────
  {
    type: 'quiz',
    question: '"saraṇaṃ"의 뜻은?',
    choices: ['경배', '귀의처, 피난처', '상가', '법'],
    answer: 1,
  },
  {
    type: 'quiz',
    question: '"gacchāmi"는 어떤 의미인가요?',
    choices: ['저는 갑니다', '저는 봅니다', '저는 압니다', '저는 닦습니다'],
    answer: 0,
  },
  {
    type: 'quiz',
    question: '두 번째 귀의문은 어떻게 시작하나요?',
    choices: ['Tatiyampi', 'Dutiyampi', 'Ekampi', 'Catutthapi'],
    answer: 1,
  },

  // ── 따라 읽기 ─────────────────────────────────────
  {
    type: 'speak',
    pali: V1,
    korean: V1K,
  },
  {
    type: 'speak',
    pali: V2,
    korean: V2K,
  },
  {
    type: 'speak',
    pali: V3,
    korean: V3K,
  },

  // ── 배열 ──────────────────────────────────────────
  {
    type: 'arrange',
    korean: '저는 붓다께 귀의합니다.',
    words: ['Buddhaṃ', 'saraṇaṃ', 'gacchāmi.'],
    answer: ['Buddhaṃ', 'saraṇaṃ', 'gacchāmi.'],
  },
]
