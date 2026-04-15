// 10과: 보배경 (Ratana Sutta) — 삼보의 공덕과 가피

export type StepType =
  | 'intro' | 'teach' | 'teach-grammar' | 'verse'
  | 'quiz' | 'speak' | 'match-listen' | 'match-reverse'
  | 'writing' | 'arrange'

// 경문 원문 (핵심 게송)
const V_INTRO =
  'Yānīdha bhūtāni samāgatāni,\nbhummāni vā yāni va antalikkhe;\nsabbe va bhūtā sumanā bhavantu,\nathopi sakkacca suṇantu bhāsitaṃ.'
const V_INTROK =
  '여기 이 자리에 모여든 존재들이여,\n지상에 있든 허공에 있든;\n모든 존재들이여, 기쁜 마음이 되어라,\n그리고 주의 깊게 이 말씀을 들으라.'

const V1 =
  'Yaṃkiñci vittaṃ idha vā huraṃ vā,\nsaggesu vā yaṃ ratanaṃ paṇītaṃ;\nna no samaṃ atthi tathāgatena,\nidampi buddhe ratanaṃ paṇītaṃ;\netena saccena suvatthi hotu.'
const V1K =
  '이 세상이든 저 세상이든, 어떤 보물이든,\n천상의 뛰어난 보배이든;\n여래(如來)와 같은 것은 없으니,\n이것이 붓다 안에 있는 뛰어난 보배이다;\n이 진실에 의해 행복이 있기를.'

const V2 =
  'Ye ariyasaccāni vibhāvayanti,\ngambhīrapaññena sudesitāni;\nkiñcāpi te honti bhavaṃ catutthaṃ,\nidampi dhamme ratanaṃ paṇītaṃ;\netena saccena suvatthi hotu.'
const V2K =
  '심오한 지혜로 잘 설해진,\n성스러운 진리들을 꿰뚫어 보는 자들;\n그들이 비록 네 번째 존재(생)가 되더라도,\n이것이 담마 안에 있는 뛰어난 보배이다;\n이 진실에 의해 행복이 있기를.'

const V3 =
  'Ye suppayuttā manasā daḷhena,\nnikkhamino gotamasāsanamhi;\nte pattipattā amataṃ vigayha,\nladdhā mudhā nibbutiṃ bhuñjamānā;\nidampi saṅghe ratanaṃ paṇītaṃ;\netena saccena suvatthi hotu.'
const V3K =
  '굳건한 마음으로 잘 실천하여,\n고따마의 가르침에서 나아간 자들;\n그들은 얻어야 할 것을 얻어 불사(不死)에 들어,\n얻은 열반을 값없이 누리고 있으니;\n이것이 상가 안에 있는 뛰어난 보배이다;\n이 진실에 의해 행복이 있기를.'

const V_REFRAIN = 'etena saccena suvatthi hotu.'
const V_REFRAINK = '이 진실에 의해 행복이 있기를.'

export const LESSON_RATANA: { type: StepType; [key: string]: unknown }[] = [
  // ── 소개 ──────────────────────────────────────────
  {
    type: 'intro',
    title: '보배경',
    subtitle: 'Ratana Sutta — 삼보의 공덕과 가피',
    source: 'Snp 2.1 / Khp 6',
    description:
      '베살리(Vesālī)에 기근·역병·악귀가 들끓을 때, 붓다께서 아난다 존자에게 이 경을 설하여 도시를 정화하신 경입니다. ' +
      '삼보(붓다·담마·상가) 각각의 뛰어난 보배(ratana)를 찬탄하며, ' +
      '"etena saccena suvatthi hotu(이 진실로 행복이 있기를)"라는 후렴구가 반복됩니다.',
    pali: V1,
    korean: V1K,
  },

  // ── 핵심 단어 학습 ────────────────────────────────
  {
    type: 'teach',
    word: 'ratana',
    meaning: '보배, 보석',
    pronunciation: '라따나',
    grammar: '명사 (중성)',
    etymology: '귀중한 것, 보물',
    example: V1,
    exampleKorean: V1K,
  },
  {
    type: 'teach',
    word: 'paṇīta',
    meaning: '뛰어난, 수승한',
    pronunciation: '빠니따',
    grammar: '형용사',
    etymology: 'pa + √nī (이끌다) — 탁월한',
    example: V1,
    exampleKorean: V1K,
  },
  {
    type: 'teach',
    word: 'saccena',
    meaning: '진실에 의해',
    pronunciation: '삿쩨나',
    grammar: '명사 (중성 단수 구격)',
    etymology: 'sacca (진실, 사실) + ena (구격 어미)',
    example: V_REFRAIN,
    exampleKorean: V_REFRAINK,
  },
  {
    type: 'teach',
    word: 'suvatthi',
    meaning: '행복, 안녕, 축복',
    pronunciation: '수왓티',
    grammar: '명사/불변화사',
    etymology: 'su (좋은) + atthi (있음)',
    example: V_REFRAIN,
    exampleKorean: V_REFRAINK,
  },
  {
    type: 'teach',
    word: 'hotu',
    meaning: '있기를 (기원)',
    pronunciation: '호뚜',
    grammar: '동사 (원망형 3인칭 단수)',
    etymology: '√hū/bhū (있다, 되다) + tu',
    example: V_REFRAIN,
    exampleKorean: V_REFRAINK,
  },
  {
    type: 'teach',
    word: 'tathāgata',
    meaning: '여래(如來)',
    pronunciation: '따타가따',
    grammar: '명사 (남성)',
    etymology: 'tathā (이와 같이) + gata (간) — 붓다의 칭호',
    example: V1,
    exampleKorean: V1K,
  },

  // ── 문법 설명 ─────────────────────────────────────
  {
    type: 'teach-grammar',
    title: '진실 서원(Saccakiriyā) 구조',
    explanation:
      '보배경의 각 게송 끝에 반복되는 후렴구:\n\n' +
      '"etena saccena suvatthi hotu."\n\n' +
      '• etena (이) + saccena (진실로) = "이 진실에 의해"\n' +
      '• suvatthi = 행복, 안녕\n' +
      '• hotu = 있기를 (원망형)\n\n' +
      '삼보의 공덕이라는 진실에 의거하여 가피를 기원하는 형식입니다.',
  },

  // ── 게송 ──────────────────────────────────────────
  {
    type: 'verse',
    pali: V_INTRO,
    korean: V_INTROK,
    highlight: 'sabbe va bhūtā sumanā bhavantu',
    note: '경의 시작 — 모든 존재를 초청하는 구절',
  },
  {
    type: 'verse',
    pali: V1,
    korean: V1K,
    highlight: 'buddhe ratanaṃ paṇītaṃ',
    note: '붓다 안의 뛰어난 보배',
  },
  {
    type: 'verse',
    pali: V2,
    korean: V2K,
    highlight: 'dhamme ratanaṃ paṇītaṃ',
    note: '담마 안의 뛰어난 보배',
  },
  {
    type: 'verse',
    pali: V3,
    korean: V3K,
    highlight: 'saṅghe ratanaṃ paṇītaṃ',
    note: '상가 안의 뛰어난 보배',
  },

  // ── 퀴즈 ──────────────────────────────────────────
  {
    type: 'quiz',
    question: '"ratana"의 뜻은?',
    choices: ['가르침', '보배, 보석', '승가', '진실'],
    answer: 1,
  },
  {
    type: 'quiz',
    question: '보배경의 후렴구 "etena saccena suvatthi hotu"의 뜻은?',
    choices: ['이 진실에 의해 행복이 있기를', '이 법에 의해 고통이 사라지기를', '이 보배에 귀의합니다', '이 진실을 기억합니다'],
    answer: 0,
  },
  {
    type: 'quiz',
    question: '"tathāgata"는 누구의 칭호인가요?',
    choices: ['아라한', '붓다', '상가', '천신'],
    answer: 1,
  },
  {
    type: 'quiz',
    question: '보배경이 설해진 배경은?',
    choices: ['전법륜경 직후', '베살리의 기근·역병·악귀', '자애경과 함께', '아라한들의 모임'],
    answer: 1,
  },

  // ── 따라 읽기 ─────────────────────────────────────
  {
    type: 'speak',
    pali: V_REFRAIN,
    korean: V_REFRAINK,
    note: '후렴구를 독송합니다.',
  },
  {
    type: 'speak',
    pali: V1,
    korean: V1K,
    note: '붓다의 보배 게송을 독송합니다.',
  },

  // ── 배열 ──────────────────────────────────────────
  {
    type: 'arrange',
    korean: '이 진실에 의해 행복이 있기를.',
    words: ['etena', 'saccena', 'suvatthi', 'hotu.'],
    answer: ['etena', 'saccena', 'suvatthi', 'hotu.'],
  },
]
