// 8과: 자애경 (Metta Sutta) — 자애의 마음 수행
import type { StepType } from './lesson-data-sn56-11'

const V3 = 'Sukhino vā khemino hontu,\nsabbe sattā bhavantu sukhitattā.'
const V3Ko = '수키노 와 케미노 혼뚜,\n삽베 삿따 바완뚜 수키땃따.'
const V3K = '행복하고 평화롭기를,\n모든 존재들이여, 행복한 마음이 되기를!'

const V5 = 'Mettañca sabbalokasmiṃ,\nmānasaṃ bhāvaye aparimāṇaṃ;\nUddhaṃ adho ca tiriyañca,\nasambādhaṃ averaṃ asapattaṃ.'
const V5Ko = '멧딴짜 삽발로까스밍,\n마나상 바와예 아빠리마낭;\n웃당 아도 짜 띠리얀짜,\n아삼바당 아웨랑 아사빳땅.'
const V5K = '온 세상을 향해,\n헤아릴 수 없는 자애의 마음을 닦아라;\n위와 아래, 사방으로,\n막힘 없이, 원한 없이, 적의 없이.'

const V1 = 'Karaṇīyamatthakusalena,\nyaṃ taṃ santaṃ padaṃ abhisamecca:\nSakko ujū ca sūjū ca,\nsuvaco cassa mudu anatimānī.'
const V1Ko = '까라니야맛타꾸살레나,\n양 땅 산땅 빠당 아비사멧짜:\n삭꼬 우주 짜 수주 짜,\n수와쪼 짯사 무두 아나띠마니.'
const V1K = '선함에 능숙하여 할 일을 하는 자는,\n저 고요한 경지를 깨달아야 한다:\n유능하고, 정직하고, 매우 정직하며,\n온순하고, 유연하고, 교만하지 않아야 한다.'

export const LESSON_METTA: StepType[] = [
  {
    type: 'intro',
    title: '자애경',
    subtitle: 'Metta Sutta — 자애의 마음 수행',
    description: '숲속 수행자들이 나무 정령의 방해를 받자 붓다께서 자애(慈愛, Mettā)를 닦는 법을 가르치신 경입니다. 자애명상(자비관)의 가장 중요한 경전입니다.',
    icon: '💛',
  },
  {
    type: 'teach',
    word: 'mettā',
    pronKo: '멧따',
    meaning: '자애, 자비',
    icon: '💛',
    grammar: '명사 (여성)',
    buddhism: '존재들의 행복을 바라는 마음',
  },
  {
    type: 'teach',
    word: 'sabbe sattā',
    pronKo: '삽베 삿따',
    meaning: '모든 존재들',
    icon: '🌍',
    grammar: '형용사 + 명사 (복수 주격)',
  },
  {
    type: 'teach',
    word: 'sukhino',
    pronKo: '수키노',
    meaning: '행복한',
    icon: '😊',
    grammar: '형용사 (복수 주격)',
  },
  {
    type: 'teach',
    word: 'bhavantu',
    pronKo: '바완뚜',
    meaning: '되기를 (기원)',
    icon: '🙏',
    grammar: '동사 (원망형 3인칭 복수)',
  },
  {
    type: 'teach',
    word: 'aparimāṇaṃ',
    pronKo: '아빠리마낭',
    meaning: '헤아릴 수 없는, 무량(無量)',
    icon: '♾️',
    grammar: '형용사 (중성 대격)',
  },
  {
    type: 'teach',
    word: 'averaṃ',
    pronKo: '아웨랑',
    meaning: '원한 없이',
    icon: '☮️',
    grammar: '형용사 (중성)',
  },
  {
    type: 'teach-grammar',
    title: '원망형(願望形) — bhavantu',
    example: V3,
    exampleKo: V3K,
    explanation: '자애경의 핵심은 원망형(Optative) 사용:\n• hontu = 되기를!\n• bhavantu sukhitattā = 행복한 마음이 되기를!\n\n원망형은 기원·바람을 표현합니다.\n자애명상에서 이 문장들을 마음속으로 반복합니다.',
  },
  {
    type: 'verse',
    pali: V3,
    pronKo: V3Ko,
    translation: V3K,
    highlight: ['sabbe sattā bhavantu sukhitattā'],
    note: '자애경의 핵심 구절 — 모든 존재의 행복을 기원합니다.',
  },
  {
    type: 'verse',
    pali: V5,
    pronKo: V5Ko,
    translation: V5K,
    highlight: ['Mettañca sabbalokasmiṃ'],
    note: '온 세상에 무한한 자애를 퍼뜨리는 구절',
  },
  {
    type: 'verse',
    pali: V1,
    pronKo: V1Ko,
    translation: V1K,
    highlight: ['Karaṇīyamatthakusalena'],
    note: '자애경의 첫 번째 게송',
  },
  {
    type: 'quiz',
    question: '"mettā"의 뜻은?',
    options: ['계율', '자애, 자비', '지혜', '삼매'],
    answer: 1,
  },
  {
    type: 'quiz',
    question: '"sabbe sattā"의 뜻은?',
    options: ['모든 붓다', '모든 법', '모든 존재들', '모든 비구'],
    answer: 2,
  },
  {
    type: 'quiz',
    question: '"bhavantu sukhitattā"는 무슨 의미인가요?',
    options: ['행복한 마음이 되기를', '행복을 닦아라', '행복을 알아야 한다', '행복이 있다'],
    answer: 0,
  },
  {
    type: 'quiz',
    question: '"aparimāṇaṃ"의 뜻은?',
    options: ['원한 없이', '막힘 없이', '헤아릴 수 없는', '고요한'],
    answer: 2,
  },
  {
    type: 'speak',
    pali: V3,
    pronKo: V3Ko,
  },
  {
    type: 'speak',
    pali: V5,
    pronKo: V5Ko,
  },
  {
    type: 'arrange',
    instruction: '빠알리 문장을 순서대로 배열하세요.',
    translation: '모든 존재들이여, 행복한 마음이 되기를!',
    blocks: ['sattā', 'sabbe', 'sukhitattā.', 'bhavantu'],
    correctOrder: [1, 0, 3, 2],
  },
]
