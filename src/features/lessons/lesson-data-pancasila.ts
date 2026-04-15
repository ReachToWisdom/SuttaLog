// 3과: 오계 — 다섯 가지 수행 규칙

export type StepType =
  | 'intro' | 'teach' | 'teach-grammar' | 'verse'
  | 'quiz' | 'speak' | 'match-listen' | 'match-reverse'
  | 'writing' | 'arrange'

// 경문 원문
const V1 = 'Pāṇātipātā veramaṇī sikkhāpadaṃ samādiyāmi.'
const V1K = '살아있는 생명을 죽이지 않는 계를 받들겠습니다.'
const V2 = 'Adinnādānā veramaṇī sikkhāpadaṃ samādiyāmi.'
const V2K = '주지 않은 것을 취하지 않는 계를 받들겠습니다.'
const V3 = 'Kāmesumicchācārā veramaṇī sikkhāpadaṃ samādiyāmi.'
const V3K = '감각적 쾌락에서 삿된 행을 하지 않는 계를 받들겠습니다.'
const V4 = 'Musāvādā veramaṇī sikkhāpadaṃ samādiyāmi.'
const V4K = '거짓말하지 않는 계를 받들겠습니다.'
const V5 = 'Surāmerayamajjapamādaṭṭhānā veramaṇī sikkhāpadaṃ samādiyāmi.'
const V5K = '방일의 원인이 되는 술·발효음료를 마시지 않는 계를 받들겠습니다.'

const V_FULL = [V1, V2, V3, V4, V5].join('\n')
const V_FULLK = [V1K, V2K, V3K, V4K, V5K].join('\n')

export const LESSON_PANCASILA: { type: StepType; [key: string]: unknown }[] = [
  // ── 소개 ──────────────────────────────────────────
  {
    type: 'intro',
    title: '오계',
    subtitle: '다섯 가지 수행 규칙',
    source: 'AN 8.39',
    description:
      '재가 불자의 기본 수행 규칙 다섯 가지입니다. 불살생·불투도·불사음·불망어·불음주. 계(Sīla)는 삼학(계·정·혜)의 기초입니다.',
    pali: V1,
    korean: V1K,
  },

  // ── 핵심 단어 학습 ────────────────────────────────
  {
    type: 'teach',
    word: 'veramaṇī',
    meaning: '삼가는 것, 절제',
    pronunciation: '웨라마니',
    grammar: '명사 (여성 단수 주격)',
    etymology: 'vi + ram (그치다, 삼가다)',
    example: V1,
    exampleKorean: V1K,
  },
  {
    type: 'teach',
    word: 'sikkhāpadaṃ',
    meaning: '계, 수행 규칙',
    pronunciation: '식카빠당',
    grammar: '명사 (중성 단수 대격)',
    etymology: 'sikkhā (수행, 배움) + pada (항목, 규칙)',
    example: V1,
    exampleKorean: V1K,
  },
  {
    type: 'teach',
    word: 'samādiyāmi',
    meaning: '받들겠습니다, 수지(受持)합니다',
    pronunciation: '사마디야미',
    grammar: '동사 (현재 1인칭 단수)',
    etymology: 'sam + ā + √dā (받다, 취하다) + āmi',
    example: V1,
    exampleKorean: V1K,
  },
  {
    type: 'teach',
    word: 'Pāṇātipātā',
    meaning: '살생으로부터',
    pronunciation: '빠나띠빠따',
    grammar: '복합어 (탈격)',
    etymology: 'pāṇa (생명) + ati + √pat (죽이다)',
    example: V1,
    exampleKorean: V1K,
  },
  {
    type: 'teach',
    word: 'Musāvādā',
    meaning: '거짓말로부터',
    pronunciation: '무사와다',
    grammar: '명사 (탈격)',
    etymology: 'musā (거짓) + vāda (말)',
    example: V4,
    exampleKorean: V4K,
  },

  // ── 문법 설명 ─────────────────────────────────────
  {
    type: 'teach-grammar',
    title: '오계의 구조',
    explanation:
      '오계는 모두 동일한 구조를 따릅니다:\n\n' +
      '[금지 행위 탈격] + veramaṇī + sikkhāpadaṃ + samādiyāmi\n\n' +
      '• 탈격(-ā/-to) = "~으로부터 멀어짐" → 절제를 표현\n' +
      '• veramaṇī = 삼가는 것\n' +
      '• samādiyāmi = 수지(받들어 지킴)',
  },

  // ── 게송 전체 ─────────────────────────────────────
  {
    type: 'verse',
    pali: V_FULL,
    korean: V_FULLK,
    highlight: 'sikkhāpadaṃ samādiyāmi',
    note: '다섯 계를 차례로 독송합니다.',
  },

  // ── 매칭 퀴즈 ─────────────────────────────────────
  {
    type: 'match-reverse',
    pairs: [
      { pali: 'Pāṇātipātā', korean: '살생' },
      { pali: 'Adinnādānā', korean: '투도(주지 않은 것 취함)' },
      { pali: 'Musāvādā', korean: '거짓말' },
      { pali: 'samādiyāmi', korean: '받들겠습니다' },
    ],
  },

  // ── 퀴즈 ──────────────────────────────────────────
  {
    type: 'quiz',
    question: '"sikkhāpadaṃ"의 뜻은?',
    choices: ['귀의처', '수행 규칙(계)', '법', '삼매'],
    answer: 1,
  },
  {
    type: 'quiz',
    question: '"veramaṇī"는 어떤 의미인가요?',
    choices: ['닦음', '삼가는 것, 절제', '받들겠습니다', '마음'],
    answer: 1,
  },
  {
    type: 'quiz',
    question: '4번째 계는 무엇을 금지하나요?',
    choices: ['살생', '음주', '거짓말', '투도'],
    answer: 2,
  },

  // ── 따라 읽기 ─────────────────────────────────────
  {
    type: 'speak',
    pali: V1,
    korean: V1K,
  },
  {
    type: 'speak',
    pali: V4,
    korean: V4K,
  },

  // ── 배열 ──────────────────────────────────────────
  {
    type: 'arrange',
    korean: '거짓말하지 않는 계를 받들겠습니다.',
    words: ['Musāvādā', 'veramaṇī', 'sikkhāpadaṃ', 'samādiyāmi.'],
    answer: ['Musāvādā', 'veramaṇī', 'sikkhāpadaṃ', 'samādiyāmi.'],
  },
]
