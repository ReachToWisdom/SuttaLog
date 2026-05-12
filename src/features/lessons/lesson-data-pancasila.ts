// 3과: 오계 — 다섯 가지 수행 규칙
import type { StepType } from './lesson-data-sn56-11'

const V1 = 'Pāṇātipātā veramaṇī sikkhāpadaṃ samādiyāmi.'
const V1Ko = '빠나띠빠따 웨라마니 식카빠당 사마디야미.'
const V1K = '살아있는 생명을 죽이지 않는 계를 받들겠습니다.'
const V4 = 'Musāvādā veramaṇī sikkhāpadaṃ samādiyāmi.'
const V4Ko = '무사와다 웨라마니 식카빠당 사마디야미.'
const V4K = '거짓말하지 않는 계를 받들겠습니다.'

const V_FULL =
  'Pāṇātipātā veramaṇī sikkhāpadaṃ samādiyāmi.\n' +
  'Adinnādānā veramaṇī sikkhāpadaṃ samādiyāmi.\n' +
  'Kāmesumicchācārā veramaṇī sikkhāpadaṃ samādiyāmi.\n' +
  'Musāvādā veramaṇī sikkhāpadaṃ samādiyāmi.\n' +
  'Surāmerayamajjapamādaṭṭhānā veramaṇī sikkhāpadaṃ samādiyāmi.'
const V_FULLK =
  '살아있는 생명을 죽이지 않는 계를 받들겠습니다.\n' +
  '주지 않은 것을 취하지 않는 계를 받들겠습니다.\n' +
  '감각적 쾌락에서 삿된 행을 하지 않는 계를 받들겠습니다.\n' +
  '거짓말하지 않는 계를 받들겠습니다.\n' +
  '방일의 원인이 되는 술을 마시지 않는 계를 받들겠습니다.'

export const LESSON_PANCASILA: StepType[] = [
  {
    type: 'intro',
    title: '오계',
    subtitle: '다섯 가지 수행 규칙',
    description: '재가 불자의 기본 수행 규칙 다섯 가지입니다. 불살생·불투도·불사음·불망어·불음주. 계(Sīla)는 삼학(계·정·혜)의 기초입니다.',
    icon: '📿',
  },
  {
    type: 'teach',
    word: 'veramaṇī',
    pronKo: '웨라마니',
    meaning: '삼가는 것, 절제',
    icon: '🚫',
    grammar: '명사 (여성 단수 주격)',
  },
  {
    type: 'teach',
    word: 'sikkhāpadaṃ',
    pronKo: '식카빠당',
    meaning: '계, 수행 규칙',
    icon: '📜',
    grammar: '명사 (중성 단수 대격)',
  },
  {
    type: 'teach',
    word: 'samādiyāmi',
    pronKo: '사마디야미',
    meaning: '받들겠습니다, 수지합니다',
    icon: '🤲',
    grammar: '동사 (현재 1인칭 단수)',
  },
  {
    type: 'teach',
    word: 'Pāṇātipātā',
    pronKo: '빠나띠빠따',
    meaning: '살생으로부터',
    icon: '🐾',
    grammar: '복합어 (탈격)',
  },
  {
    type: 'teach',
    word: 'Musāvādā',
    pronKo: '무사와다',
    meaning: '거짓말로부터',
    icon: '🗣️',
    grammar: '명사 (탈격)',
  },
  {
    type: 'teach-grammar',
    title: '오계의 구조',
    example: V1,
    exampleKo: V1K,
    explanation: '[금지 행위 탈격] + veramaṇī + sikkhāpadaṃ + samādiyāmi\n• 탈격(-ā) = "~으로부터 멀어짐" → 절제를 표현\n• veramaṇī = 삼가는 것\n• samādiyāmi = 수지(받들어 지킴)',
  },
  {
    type: 'verse',
    pali: V_FULL,
    pronKo: '빠나띠빠따 웨라마니 식카빠당 사마디야미...',
    translation: V_FULLK,
    highlight: ['sikkhāpadaṃ samādiyāmi'],
    note: '다섯 계를 차례로 독송합니다.',
  },
  {
    type: 'quiz',
    question: '"sikkhāpadaṃ"의 뜻은?',
    options: ['귀의처', '수행 규칙(계)', '법', '삼매'],
    answer: 1,
  },
  {
    type: 'quiz',
    question: '"veramaṇī"는 어떤 의미인가요?',
    options: ['닦음', '삼가는 것, 절제', '받들겠습니다', '마음'],
    answer: 1,
  },
  {
    type: 'quiz',
    question: '4번째 계는 무엇을 금지하나요?',
    options: ['살생', '음주', '거짓말', '투도'],
    answer: 2,
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
    translation: V4K,
    blocks: ['veramaṇī', 'Musāvādā', 'samādiyāmi.', 'sikkhāpadaṃ'],
    correctOrder: [1, 0, 3, 2],
  },
]
