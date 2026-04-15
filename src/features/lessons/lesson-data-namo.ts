// 1과: 나모땃사 — 세존께 경배

export type StepType =
  | 'intro' | 'teach' | 'teach-grammar' | 'verse'
  | 'quiz' | 'speak' | 'match-listen' | 'match-reverse'
  | 'writing' | 'arrange'

// 경문 원문
const V1 = 'Namo tassa bhagavato arahato sammāsambuddhassa.'
const V1K = '저 세존, 아라한, 완전히 깨달은 분께 경배드립니다.'

export const LESSON_NAMO: { type: StepType; [key: string]: unknown }[] = [
  // ── 소개 ──────────────────────────────────────────
  {
    type: 'intro',
    title: '나모땃사',
    subtitle: '세존께 경배',
    source: '전통 예경문',
    description:
      '불교 예불의 시작을 여는 경배문입니다. 수행 전 세존께 예경하며 마음을 바릅니다.',
    pali: V1,
    korean: V1K,
  },

  // ── 핵심 단어 학습 ────────────────────────────────
  {
    type: 'teach',
    word: 'Namo',
    meaning: '경배, 예경',
    pronunciation: '나모',
    grammar: '불변화사 / 존경의 표현',
    etymology: '√nam (굽히다) + o',
    example: V1,
    exampleKorean: V1K,
  },
  {
    type: 'teach',
    word: 'tassa',
    meaning: '그분의, 그에게',
    pronunciation: '땃사',
    grammar: '대명사 (남성 단수 속격/여격)',
    etymology: 'ta (그) + ssa (속격 어미)',
    example: V1,
    exampleKorean: V1K,
  },
  {
    type: 'teach',
    word: 'bhagavato',
    meaning: '세존의, 복덕 있는 분',
    pronunciation: '바가와또',
    grammar: '명사 (남성 단수 속격)',
    etymology: 'bhaga (복덕) + vat (갖춘) + o',
    example: V1,
    exampleKorean: V1K,
  },
  {
    type: 'teach',
    word: 'arahato',
    meaning: '아라한, 번뇌를 소멸한 분',
    pronunciation: '아라하또',
    grammar: '명사/형용사 (남성 단수 속격)',
    etymology: '√arh (자격 있다) + ata',
    example: V1,
    exampleKorean: V1K,
  },
  {
    type: 'teach',
    word: 'sammāsambuddhassa',
    meaning: '완전히 바르게 깨달은 분',
    pronunciation: '삼마삼붓닷사',
    grammar: '복합어 (남성 단수 속격)',
    etymology: 'sammā (바르게) + sam (완전히) + buddha (깨달은 분) + ssa',
    example: V1,
    exampleKorean: V1K,
  },

  // ── 게송 전체 ─────────────────────────────────────
  {
    type: 'verse',
    pali: V1,
    korean: V1K,
    highlight: 'Namo tassa bhagavato',
    note: '수행 전 세 번 독송합니다.',
  },

  // ── 퀴즈 ──────────────────────────────────────────
  {
    type: 'quiz',
    question: '"Namo"의 뜻은?',
    choices: ['경배, 예경', '법, 가르침', '상가, 공동체', '계율'],
    answer: 0,
  },
  {
    type: 'quiz',
    question: '"bhagavato"는 누구를 가리키나요?',
    choices: ['아라한', '세존(붓다)', '상가', '법'],
    answer: 1,
  },
  {
    type: 'quiz',
    question: '"sammāsambuddhassa"의 의미는?',
    choices: ['번뇌를 소멸한 분', '법을 설하신 분', '완전히 바르게 깨달은 분', '오온을 소멸한 분'],
    answer: 2,
  },

  // ── 따라 읽기 ─────────────────────────────────────
  {
    type: 'speak',
    pali: V1,
    korean: V1K,
    note: '세 번 반복해서 독송해 보세요.',
  },

  // ── 배열 ──────────────────────────────────────────
  {
    type: 'arrange',
    korean: '저 세존, 아라한, 완전히 깨달은 분께 경배드립니다.',
    words: ['Namo', 'tassa', 'bhagavato', 'arahato', 'sammāsambuddhassa.'],
    answer: ['Namo', 'tassa', 'bhagavato', 'arahato', 'sammāsambuddhassa.'],
  },
]
