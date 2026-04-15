// 10과: 보배경 (Ratana Sutta) — 삼보의 공덕과 가피
import type { StepType } from './lesson-data-sn56-11'

const V_INTRO = 'Yānīdha bhūtāni samāgatāni,\nbhummāni vā yāni va antalikkhe;\nsabbe va bhūtā sumanā bhavantu,\nathopi sakkacca suṇantu bhāsitaṃ.'
const V_INTROK = '여기 이 자리에 모여든 존재들이여,\n지상에 있든 허공에 있든;\n모든 존재들이여, 기쁜 마음이 되어라,\n그리고 주의 깊게 이 말씀을 들으라.'

const V1 = 'Yaṃkiñci vittaṃ idha vā huraṃ vā,\nsaggesu vā yaṃ ratanaṃ paṇītaṃ;\nna no samaṃ atthi tathāgatena,\nidampi buddhe ratanaṃ paṇītaṃ;\netena saccena suvatthi hotu.'
const V1K = '이 세상이든 저 세상이든, 어떤 보물이든,\n천상의 뛰어난 보배이든;\n여래와 같은 것은 없으니,\n이것이 붓다 안에 있는 뛰어난 보배이다;\n이 진실에 의해 행복이 있기를.'

const V_REFRAIN = 'etena saccena suvatthi hotu.'
const V_REFRAINK = '이 진실에 의해 행복이 있기를.'

const V2 = 'Ye ariyasaccāni vibhāvayanti,\ngambhīrapaññena sudesitāni;\nkiñcāpi te honti bhavaṃ catutthaṃ,\nidampi dhamme ratanaṃ paṇītaṃ;\netena saccena suvatthi hotu.'
const V2K = '심오한 지혜로 잘 설해진,\n성스러운 진리들을 꿰뚫어 보는 자들;\n그들이 비록 네 번째 존재(생)가 되더라도,\n이것이 담마 안에 있는 뛰어난 보배이다;\n이 진실에 의해 행복이 있기를.'

const V3 = 'Ye suppayuttā manasā daḷhena,\nnikkhamino gotamasāsanamhi;\nte pattipattā amataṃ vigayha,\nladdhā mudhā nibbutiṃ bhuñjamānā;\nidampi saṅghe ratanaṃ paṇītaṃ;\netena saccena suvatthi hotu.'
const V3K = '굳건한 마음으로 잘 실천하여,\n고따마의 가르침에서 나아간 자들;\n그들은 얻어야 할 것을 얻어 불사에 들어,\n얻은 열반을 값없이 누리고 있으니;\n이것이 상가 안에 있는 뛰어난 보배이다;\n이 진실에 의해 행복이 있기를.'

export const LESSON_RATANA: StepType[] = [
  {
    type: 'intro',
    title: '보배경',
    subtitle: 'Ratana Sutta — 삼보의 공덕과 가피',
    description: '베살리에 기근·역병·악귀가 들끓을 때, 붓다께서 이 경을 설하여 도시를 정화하신 경입니다. "etena saccena suvatthi hotu"라는 후렴구가 반복됩니다.',
    icon: '💎',
  },
  {
    type: 'teach',
    word: 'ratana',
    pronKo: '라따나',
    meaning: '보배, 보석',
    icon: '💎',
  },
  {
    type: 'teach',
    word: 'paṇīta',
    pronKo: '빠니따',
    meaning: '뛰어난, 수승한',
    icon: '⭐',
    grammar: '형용사',
  },
  {
    type: 'teach',
    word: 'saccena',
    pronKo: '삿쩨나',
    meaning: '진실에 의해',
    icon: '🔮',
    grammar: '명사 (중성 단수 구격)',
  },
  {
    type: 'teach',
    word: 'suvatthi',
    pronKo: '수왓티',
    meaning: '행복, 안녕, 축복',
    icon: '✨',
  },
  {
    type: 'teach',
    word: 'hotu',
    pronKo: '호뚜',
    meaning: '있기를 (기원)',
    icon: '🙏',
    grammar: '동사 (원망형 3인칭 단수)',
  },
  {
    type: 'teach-grammar',
    title: '진실 서원(Saccakiriyā) 구조',
    example: V_REFRAIN,
    exampleKo: V_REFRAINK,
    explanation: '"etena saccena suvatthi hotu."\n• etena (이) + saccena (진실로) = "이 진실에 의해"\n• suvatthi = 행복, 안녕\n• hotu = 있기를 (원망형)\n\n삼보의 공덕이라는 진실에 의거하여 가피를 기원하는 형식입니다.',
  },
  {
    type: 'verse',
    pali: V_INTRO,
    pronKo: '야니다 부따니 사마가따니...',
    translation: V_INTROK,
    highlight: ['sabbe va bhūtā sumanā bhavantu'],
    note: '경의 시작 — 모든 존재를 초청하는 구절',
  },
  {
    type: 'verse',
    pali: V1,
    pronKo: '양낀찌 윗땅 이다 와 후랑 와...',
    translation: V1K,
    highlight: ['buddhe ratanaṃ paṇītaṃ'],
    note: '붓다 안의 뛰어난 보배',
  },
  {
    type: 'verse',
    pali: V2,
    pronKo: '예 아리야삿짜니 위바와얀띠...',
    translation: V2K,
    highlight: ['dhamme ratanaṃ paṇītaṃ'],
    note: '담마 안의 뛰어난 보배',
  },
  {
    type: 'verse',
    pali: V3,
    pronKo: '예 숩빠윳따 마나사 달헤나...',
    translation: V3K,
    highlight: ['saṅghe ratanaṃ paṇītaṃ'],
    note: '상가 안의 뛰어난 보배',
  },
  {
    type: 'quiz',
    question: '"ratana"의 뜻은?',
    options: ['가르침', '보배, 보석', '승가', '진실'],
    answer: 1,
  },
  {
    type: 'quiz',
    question: '후렴구 "etena saccena suvatthi hotu"의 뜻은?',
    options: ['이 진실에 의해 행복이 있기를', '이 법에 의해 고통이 사라지기를', '이 보배에 귀의합니다', '이 진실을 기억합니다'],
    answer: 0,
  },
  {
    type: 'quiz',
    question: '보배경이 설해진 배경은?',
    options: ['전법륜경 직후', '베살리의 기근·역병·악귀', '자애경과 함께', '아라한들의 모임'],
    answer: 1,
  },
  {
    type: 'speak',
    pali: V_REFRAIN,
    pronKo: '에떼나 삿쩨나 수왓티 호뚜.',
  },
  {
    type: 'speak',
    pali: V1,
    pronKo: '양낀찌 윗땅 이다 와 후랑 와...',
  },
  {
    type: 'arrange',
    instruction: '빠알리 문장을 순서대로 배열하세요.',
    translation: V_REFRAINK,
    blocks: ['saccena', 'etena', 'hotu.', 'suvatthi'],
    correctOrder: [1, 0, 3, 2],
  },
]
