// 1과: 나모땃사 — 세존께 경배
import type { StepType } from './lesson-data-sn56-11'

const V1 = 'Namo tassa bhagavato arahato sammāsambuddhassa.'
const V1Ko = '나모 땃사 바가와또 아라하또 삼마삼붓닷사.'
const V1K = '저 세존, 아라한, 완전히 깨달은 분께 경배드립니다.'

export const LESSON_NAMO: StepType[] = [
  {
    type: 'intro',
    title: '나모땃사',
    subtitle: '세존께 경배',
    description: '불교 예불의 시작을 여는 경배문입니다. 수행 전 세존께 예경하며 마음을 바릅니다.',
    icon: '🙏',
  },
  {
    type: 'teach',
    word: 'Namo',
    pronKo: '나모',
    meaning: '경배, 예경',
    icon: '🙏',
    grammar: '불변화사 / 존경의 표현',
  },
  {
    type: 'teach',
    word: 'tassa',
    pronKo: '땃사',
    meaning: '그분의, 그에게',
    icon: '👆',
    grammar: '대명사 (남성 단수 속격/여격)',
  },
  {
    type: 'teach',
    word: 'bhagavato',
    pronKo: '바가와또',
    meaning: '세존의, 복덕 있는 분',
    icon: '✨',
    grammar: '명사 (남성 단수 속격)',
  },
  {
    type: 'teach',
    word: 'arahato',
    pronKo: '아라하또',
    meaning: '아라한, 번뇌를 소멸한 분',
    icon: '🌟',
    grammar: '명사/형용사 (남성 단수 속격)',
  },
  {
    type: 'teach',
    word: 'sammāsambuddhassa',
    pronKo: '삼마삼붓닷사',
    meaning: '완전히 바르게 깨달은 분',
    icon: '☸️',
    grammar: '복합어 (남성 단수 속격)',
  },
  {
    type: 'verse',
    pali: V1,
    pronKo: V1Ko,
    translation: V1K,
    highlight: ['Namo tassa bhagavato'],
    note: '수행 전 세 번 독송합니다.',
  },
  {
    type: 'quiz',
    question: '"Namo"의 뜻은?',
    options: ['경배, 예경', '법, 가르침', '상가, 공동체', '계율'],
    answer: 0,
  },
  {
    type: 'quiz',
    question: '"sammāsambuddhassa"의 의미는?',
    options: ['번뇌를 소멸한 분', '법을 설하신 분', '완전히 바르게 깨달은 분', '오온을 소멸한 분'],
    answer: 2,
  },
  {
    type: 'speak',
    pali: V1,
    pronKo: V1Ko,
  },
  {
    type: 'arrange',
    instruction: '빠알리 문장을 순서대로 배열하세요.',
    translation: V1K,
    blocks: ['tassa', 'Namo', 'sammāsambuddhassa.', 'bhagavato', 'arahato'],
    correctOrder: [1, 0, 3, 4, 2],
  },
]
