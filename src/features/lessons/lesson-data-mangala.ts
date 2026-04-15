// 6과: 축복경 (Maṅgala Sutta) — 최상의 축복

export type StepType =
  | 'intro' | 'teach' | 'teach-grammar' | 'verse'
  | 'quiz' | 'speak' | 'match-listen' | 'match-reverse'
  | 'writing' | 'arrange'

// 경문 원문 (핵심 게송)
const V1 = 'Asevanā ca bālānaṃ, paṇḍitānañ ca sevanā;\nPūjā ca pūjanīyānaṃ — etaṃ maṅgalamuttamaṃ.'
const V1K = '어리석은 자를 가까이하지 않고, 지혜로운 자를 가까이하며;\n경배받을 분께 경배함 — 이것이 최상의 축복이다.'

const V2 = 'Paṭirūpadesavāso ca, pubbe ca katapuññatā;\nAttasammāpaṇidhi ca — etaṃ maṅgalamuttamaṃ.'
const V2K = '적절한 곳에 거주하고, 과거에 공덕을 쌓았으며;\n자신을 바르게 세움 — 이것이 최상의 축복이다.'

const V3 = 'Bāhusaccañca sippañca, vinayo ca susikkhito;\nSubhāsitā ca yā vācā — etaṃ maṅgalamuttamaṃ.'
const V3K = '다문(多聞)과 기술, 잘 배운 계율;\n잘 설해진 말 — 이것이 최상의 축복이다.'

const V4 = 'Mātāpitu upaṭṭhānaṃ, puttadārassa saṅgaho;\nAnākulā ca kammantā — etaṃ maṅgalamuttamaṃ.'
const V4K = '부모를 봉양하고, 처자식을 돌보며;\n혼란 없는 일 — 이것이 최상의 축복이다.'

export const LESSON_MANGALA: { type: StepType; [key: string]: unknown }[] = [
  // ── 소개 ──────────────────────────────────────────
  {
    type: 'intro',
    title: '축복경',
    subtitle: 'Maṅgala Sutta — 최상의 축복',
    source: 'Snp 2.4 / Khp 5',
    description:
      '한 천신이 "최상의 축복이 무엇인가?"라고 묻자 붓다께서 38가지 축복을 설하신 경입니다. ' +
      '일상생활의 지혜부터 해탈에 이르는 길까지 체계적으로 가르칩니다.',
    pali: V1,
    korean: V1K,
  },

  // ── 핵심 단어 학습 ────────────────────────────────
  {
    type: 'teach',
    word: 'maṅgala',
    meaning: '축복, 길상(吉祥)',
    pronunciation: '망갈라',
    grammar: '명사 (중성)',
    etymology: '좋은 징조, 상서로운 것',
    example: V1,
    exampleKorean: V1K,
  },
  {
    type: 'teach',
    word: 'uttama',
    meaning: '최상의, 최고의',
    pronunciation: '웃따마',
    grammar: '형용사',
    etymology: 'ut (위) + tama (최상급 접미사)',
    example: V1,
    exampleKorean: V1K,
  },
  {
    type: 'teach',
    word: 'Asevanā',
    meaning: '가까이하지 않음, 섬기지 않음',
    pronunciation: '아세와나',
    grammar: '명사 (여성 주격)',
    etymology: 'a (없는) + sevanā (섬김, 가까이함)',
    example: V1,
    exampleKorean: V1K,
  },
  {
    type: 'teach',
    word: 'bāla',
    meaning: '어리석은 자, 우자(愚者)',
    pronunciation: '발라',
    grammar: '명사/형용사 (남성)',
    etymology: '지혜가 없는 자',
    example: V1,
    exampleKorean: V1K,
  },
  {
    type: 'teach',
    word: 'paṇḍita',
    meaning: '지혜로운 자, 현자(賢者)',
    pronunciation: '빤디따',
    grammar: '명사/형용사 (남성)',
    etymology: '지식과 지혜를 갖춘 자',
    example: V1,
    exampleKorean: V1K,
  },
  {
    type: 'teach',
    word: 'sevanā',
    meaning: '가까이함, 섬김',
    pronunciation: '세와나',
    grammar: '명사 (여성 주격)',
    etymology: '√sev (섬기다, 따르다)',
    example: V1,
    exampleKorean: V1K,
  },
  {
    type: 'teach',
    word: 'Pūjā',
    meaning: '공양, 경배',
    pronunciation: '뿌자',
    grammar: '명사 (여성 주격)',
    etymology: '√pūj (공경하다)',
    example: V1,
    exampleKorean: V1K,
  },

  // ── 문법 설명 ─────────────────────────────────────
  {
    type: 'teach-grammar',
    title: '게송 구조 분석',
    explanation:
      '축복경의 각 게송은 같은 구조를 따릅니다:\n\n' +
      '[축복 1], [축복 2];\n[축복 3] — etaṃ maṅgalamuttamaṃ.\n\n' +
      '• etaṃ = 이것이 (지시대명사 중성 주격)\n' +
      '• maṅgalamuttamaṃ = 최상의 축복 (복합어)\n' +
      '총 10개 게송, 38가지 축복을 담고 있습니다.',
  },

  // ── 게송 ──────────────────────────────────────────
  {
    type: 'verse',
    pali: V1,
    korean: V1K,
    highlight: 'etaṃ maṅgalamuttamaṃ',
    note: '첫 번째 게송: 현자를 가까이하는 것이 축복',
  },
  {
    type: 'verse',
    pali: V2,
    korean: V2K,
    highlight: 'Paṭirūpadesavāso',
    note: '두 번째 게송: 적절한 곳에 거주하는 것이 축복',
  },
  {
    type: 'verse',
    pali: V3,
    korean: V3K,
    highlight: 'Bāhusaccañca sippañca',
    note: '세 번째 게송: 다문과 기술이 축복',
  },
  {
    type: 'verse',
    pali: V4,
    korean: V4K,
    highlight: 'Mātāpitu upaṭṭhānaṃ',
    note: '네 번째 게송: 부모 봉양이 축복',
  },

  // ── 퀴즈 ──────────────────────────────────────────
  {
    type: 'quiz',
    question: '"maṅgala"의 뜻은?',
    choices: ['고통', '축복, 길상', '계율', '지혜'],
    answer: 1,
  },
  {
    type: 'quiz',
    question: '축복경에서 첫 번째 축복은?',
    choices: ['부모 봉양', '어리석은 자를 가까이하지 않음', '다문(多聞)', '계율 수행'],
    answer: 1,
  },
  {
    type: 'quiz',
    question: '"paṇḍita"의 반대말은?',
    choices: ['uttama', 'bāla', 'pūjā', 'sevanā'],
    answer: 1,
  },
  {
    type: 'quiz',
    question: '각 게송의 결말 구절 "etaṃ maṅgalamuttamaṃ"의 뜻은?',
    choices: ['이것이 최상의 축복이다', '이것이 법이다', '이것이 계율이다', '이것이 귀의처이다'],
    answer: 0,
  },

  // ── 따라 읽기 ─────────────────────────────────────
  {
    type: 'speak',
    pali: V1,
    korean: V1K,
    note: '첫 번째 게송을 독송해 보세요.',
  },
  {
    type: 'speak',
    pali: V4,
    korean: V4K,
    note: '네 번째 게송을 독송해 보세요.',
  },

  // ── 배열 ──────────────────────────────────────────
  {
    type: 'arrange',
    korean: '이것이 최상의 축복이다.',
    words: ['etaṃ', 'maṅgalamuttamaṃ.'],
    answer: ['etaṃ', 'maṅgalamuttamaṃ.'],
  },
]
