// 8과: 자애경 (Metta Sutta) — 자애의 마음 수행

export type StepType =
  | 'intro' | 'teach' | 'teach-grammar' | 'verse'
  | 'quiz' | 'speak' | 'match-listen' | 'match-reverse'
  | 'writing' | 'arrange'

// 경문 원문 (핵심 게송)
const V1 =
  'Karaṇīyamatthakusalena,\nyaṃ taṃ santaṃ padaṃ abhisamecca:\nSakko ujū ca sūjū ca,\nsuvaco cassa mudu anatimānī.'
const V1K =
  '선함에 능숙하여 할 일을 하는 자는,\n저 고요한 경지를 깨달아야 한다:\n유능하고, 정직하고, 매우 정직하며,\n온순하고, 유연하고, 교만하지 않아야 한다.'

const V2 =
  'Santussako ca subharo ca,\nappakicco ca sallahukavutti;\nSantindriyo ca nipako ca,\nappagabbho kulesvananugiddho.'
const V2K =
  '만족할 줄 알고, 부양하기 쉬우며,\n일이 적고, 가볍게 살며;\n감각 기능이 고요하고, 사려 깊고,\n무례하지 않으며, 가문에 탐착하지 않아야 한다.'

const V3 =
  'Sukhino vā khemino hontu,\nsabbe sattā bhavantu sukhitattā.'
const V3K = '행복하고 평화롭기를,\n모든 존재들이여, 행복한 마음이 되기를!'

const V4 =
  'Ye keci pāṇabhūtatthi,\ntasā vā thāvarā vā anavasesā;\nDīghā vā ye mahantā vā,\nmajjhimā rassakā aṇukathūlā.'
const V4K =
  '어떤 생명 있는 존재이건,\n두려움을 가진 것이든 두려움 없는 것이든 남김없이;\n길거나 크거나,\n중간이거나 짧거나 작거나 굵거나.'

const V5 =
  'Mettañca sabbalokasmiṃ,\nmānasaṃ bhāvaye aparimāṇaṃ;\nUddhaṃ adho ca tiriyañca,\nasambādhaṃ averaṃ asapattaṃ.'
const V5K =
  '온 세상을 향해,\n헤아릴 수 없는 자애의 마음을 닦아라;\n위와 아래, 사방으로,\n막힘 없이, 원한 없이, 적의 없이.'

export const LESSON_METTA: { type: StepType; [key: string]: unknown }[] = [
  // ── 소개 ──────────────────────────────────────────
  {
    type: 'intro',
    title: '자애경',
    subtitle: 'Metta Sutta — 자애의 마음 수행',
    source: 'Snp 1.8 / Khp 9',
    description:
      '숲속에서 수행하던 비구들이 나무 정령의 방해를 받자, 붓다께서 자애(慈愛, Mettā)를 닦는 법을 가르치신 경입니다. ' +
      '자애명상(자비관)의 가장 중요한 경전이며, 모든 존재에 대한 무한한 자애를 일으킵니다.',
    pali: V3,
    korean: V3K,
  },

  // ── 핵심 단어 학습 ────────────────────────────────
  {
    type: 'teach',
    word: 'mettā',
    meaning: '자애, 자비',
    pronunciation: '멧따',
    grammar: '명사 (여성)',
    etymology: '√mit/mid (친밀하다) — 존재들의 행복을 바라는 마음',
    example: V5,
    exampleKorean: V5K,
  },
  {
    type: 'teach',
    word: 'sabbe sattā',
    meaning: '모든 존재들',
    pronunciation: '삽베 삿따',
    grammar: '형용사 + 명사 (복수 주격)',
    etymology: 'sabbe (모든) + sattā (존재, 생명)',
    example: V3,
    exampleKorean: V3K,
  },
  {
    type: 'teach',
    word: 'sukhino',
    meaning: '행복한',
    pronunciation: '수키노',
    grammar: '형용사 (복수 주격)',
    etymology: 'sukha (행복, 즐거움) + ino',
    example: V3,
    exampleKorean: V3K,
  },
  {
    type: 'teach',
    word: 'bhavantu',
    meaning: '되기를 (기원)',
    pronunciation: '바완뚜',
    grammar: '동사 (원망형 3인칭 복수)',
    etymology: '√bhū (되다, 있다) + antu',
    example: V3,
    exampleKorean: V3K,
  },
  {
    type: 'teach',
    word: 'aparimāṇaṃ',
    meaning: '헤아릴 수 없는, 무량(無量)',
    pronunciation: '아빠리마남',
    grammar: '형용사 (중성 대격)',
    etymology: 'a (없는) + pari + māṇa (헤아림)',
    example: V5,
    exampleKorean: V5K,
  },
  {
    type: 'teach',
    word: 'averaṃ',
    meaning: '원한 없이',
    pronunciation: '아웨람',
    grammar: '형용사 (중성)',
    etymology: 'a (없는) + vera (원한, 적의)',
    example: V5,
    exampleKorean: V5K,
  },

  // ── 문법 설명 ─────────────────────────────────────
  {
    type: 'teach-grammar',
    title: '원망형(願望形) — bhavantu',
    explanation:
      '자애경의 핵심 구조는 원망형(Optative)을 사용합니다:\n\n' +
      '• "sukhino hontu" = 행복하기를!\n' +
      '• "bhavantu sukhitattā" = 행복한 마음이 되기를!\n\n' +
      '원망형은 기원·바람을 표현할 때 씁니다.\n' +
      '자애명상에서는 이 문장들을 마음속으로 반복합니다.',
  },

  // ── 게송 ──────────────────────────────────────────
  {
    type: 'verse',
    pali: V3,
    korean: V3K,
    highlight: 'sabbe sattā bhavantu sukhitattā',
    note: '자애경의 핵심 구절 — 모든 존재의 행복을 기원합니다.',
  },
  {
    type: 'verse',
    pali: V5,
    korean: V5K,
    highlight: 'Mettañca sabbalokasmiṃ',
    note: '온 세상에 무한한 자애를 퍼뜨리는 구절',
  },
  {
    type: 'verse',
    pali: V1,
    korean: V1K,
    highlight: 'Karaṇīyamatthakusalena',
    note: '자애경의 첫 번째 게송',
  },
  {
    type: 'verse',
    pali: V4,
    korean: V4K,
    highlight: 'Ye keci pāṇabhūtatthi',
    note: '모든 존재를 포함하는 구절',
  },

  // ── 퀴즈 ──────────────────────────────────────────
  {
    type: 'quiz',
    question: '"mettā"의 뜻은?',
    choices: ['계율', '자애, 자비', '지혜', '삼매'],
    answer: 1,
  },
  {
    type: 'quiz',
    question: '"sabbe sattā"의 뜻은?',
    choices: ['모든 붓다', '모든 법', '모든 존재들', '모든 비구'],
    answer: 2,
  },
  {
    type: 'quiz',
    question: '"bhavantu sukhitattā"는 무슨 의미인가요?',
    choices: ['행복한 마음이 되기를', '행복을 닦아라', '행복을 알아야 한다', '행복이 있다'],
    answer: 0,
  },
  {
    type: 'quiz',
    question: '"aparimāṇaṃ"의 뜻은?',
    choices: ['원한 없이', '막힘 없이', '헤아릴 수 없는', '고요한'],
    answer: 2,
  },

  // ── 따라 읽기 ─────────────────────────────────────
  {
    type: 'speak',
    pali: V3,
    korean: V3K,
    note: '자애 기원 핵심 구절을 독송합니다.',
  },
  {
    type: 'speak',
    pali: V5,
    korean: V5K,
    note: '자애를 온 세상에 퍼뜨리는 구절을 독송합니다.',
  },

  // ── 배열 ──────────────────────────────────────────
  {
    type: 'arrange',
    korean: '모든 존재들이여, 행복한 마음이 되기를!',
    words: ['sabbe', 'sattā', 'bhavantu', 'sukhitattā.'],
    answer: ['sabbe', 'sattā', 'bhavantu', 'sukhitattā.'],
  },
]
