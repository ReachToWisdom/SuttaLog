// 4과: 삼보공덕 — 붓다눗사띠·담마눗사띠·상가눗사띠

export type StepType =
  | 'intro' | 'teach' | 'teach-grammar' | 'verse'
  | 'quiz' | 'speak' | 'match-listen' | 'match-reverse'
  | 'writing' | 'arrange'

// 붓다눗사띠 (Buddha Recollection)
const V_BUDDHA =
  'Iti pi so bhagavā arahaṃ sammāsambuddho vijjācaraṇasampanno sugato lokavidū ' +
  'anuttaro purisadammasārathi satthā devamanussānaṃ buddho bhagavā ti.'
const V_BUDDHAK =
  '그러므로 그 세존께서는: 아라한이시고, 완전히 바르게 깨달은 분이시고, ' +
  '명지와 실천을 갖춘 분이시고, 피안에 잘 가신 분이시고, 세상을 아는 분이시고, ' +
  '최상의 조어사(調御師)이시고, 신들과 인간의 스승이시고, 붓다이시고, 세존이시다.'

// 담마눗사띠 (Dhamma Recollection)
const V_DHAMMA =
  'Svākkhāto bhagavatā dhammo sandiṭṭhiko akāliko ehipassiko opaneyyiko paccattaṃ veditabbo viññūhī ti.'
const V_DHAMMAK =
  '세존께서 잘 설하신 법은: 직접 볼 수 있고, 시간을 초월하며, 와서 보라고 할 수 있고, ' +
  '향상으로 이끌며, 지혜로운 이들이 각자 스스로 알아야 하는 것이다.'

// 상가눗사띠 (Saṅgha Recollection)
const V_SANGHA =
  'Supaṭipanno bhagavato sāvakasaṅgho, ujupaṭipanno bhagavato sāvakasaṅgho, ' +
  'ñāyapaṭipanno bhagavato sāvakasaṅgho, sāmīcipaṭipanno bhagavato sāvakasaṅgho.'
const V_SANGHAK =
  '세존의 제자 승가는: 잘 수행하고, 바르게 수행하고, 올바르게 수행하고, 화합하여 수행하는 이들이다.'

export const LESSON_TISARANA_GUNA: { type: StepType; [key: string]: unknown }[] = [
  // ── 소개 ──────────────────────────────────────────
  {
    type: 'intro',
    title: '삼보공덕',
    subtitle: '붓다눗사띠·담마눗사띠·상가눗사띠',
    source: 'AN 11.12 / AN 11.13',
    description:
      '삼보(三寶)의 공덕을 기억하고 새기는 수행(隨念, Anussati)입니다. ' +
      '붓다의 덕목 9가지, 담마의 덕목 6가지, 상가의 덕목 4가지를 기억합니다.',
    pali: V_BUDDHA,
    korean: V_BUDDHAK,
  },

  // ── 핵심 단어: 붓다의 9덕 ─────────────────────────
  {
    type: 'teach',
    word: 'arahaṃ',
    meaning: '아라한, 번뇌 없는 분',
    pronunciation: '아라항',
    grammar: '형용사/명사 (주격)',
    etymology: '√arh (자격 있다) — 번뇌를 소멸한 자',
    example: V_BUDDHA,
    exampleKorean: V_BUDDHAK,
  },
  {
    type: 'teach',
    word: 'sammāsambuddho',
    meaning: '완전히 바르게 깨달은 분',
    pronunciation: '삼마삼붓도',
    grammar: '형용사 (주격)',
    etymology: 'sammā (바르게) + sam (완전히) + √budh (깨닫다)',
    example: V_BUDDHA,
    exampleKorean: V_BUDDHAK,
  },
  {
    type: 'teach',
    word: 'sugato',
    meaning: '피안에 잘 가신 분',
    pronunciation: '수가또',
    grammar: '형용사 (주격)',
    etymology: 'su (좋게) + √gam (가다)',
    example: V_BUDDHA,
    exampleKorean: V_BUDDHAK,
  },
  {
    type: 'teach',
    word: 'lokavidū',
    meaning: '세상을 아는 분',
    pronunciation: '로까위두',
    grammar: '복합어 (주격)',
    etymology: 'loka (세상) + vidū (아는 자, √vid)',
    example: V_BUDDHA,
    exampleKorean: V_BUDDHAK,
  },

  // ── 붓다눗사띠 게송 ───────────────────────────────
  {
    type: 'verse',
    pali: V_BUDDHA,
    korean: V_BUDDHAK,
    highlight: 'arahaṃ sammāsambuddho',
    note: '붓다의 아홉 가지 공덕(9덕)을 기억합니다.',
  },

  // ── 핵심 단어: 담마의 6덕 ─────────────────────────
  {
    type: 'teach',
    word: 'Svākkhāto',
    meaning: '잘 설해진',
    pronunciation: '스왁카또',
    grammar: '과거분사 (중성 주격)',
    etymology: 'su (잘) + ā + √khā (설하다)',
    example: V_DHAMMA,
    exampleKorean: V_DHAMMAK,
  },
  {
    type: 'teach',
    word: 'sandiṭṭhiko',
    meaning: '직접 볼 수 있는',
    pronunciation: '산딧티꼬',
    grammar: '형용사 (남성 주격)',
    etymology: 'san (함께) + diṭṭhi (봄, 견해)',
    example: V_DHAMMA,
    exampleKorean: V_DHAMMAK,
  },
  {
    type: 'teach',
    word: 'akāliko',
    meaning: '시간을 초월한',
    pronunciation: '아깔리꼬',
    grammar: '형용사 (남성 주격)',
    etymology: 'a (없는) + kāla (시간)',
    example: V_DHAMMA,
    exampleKorean: V_DHAMMAK,
  },
  {
    type: 'teach',
    word: 'ehipassiko',
    meaning: '와서 보라고 할 수 있는',
    pronunciation: '에히빳시꼬',
    grammar: '형용사 (남성 주격)',
    etymology: 'ehi (오라) + passa (보라) + ika',
    example: V_DHAMMA,
    exampleKorean: V_DHAMMAK,
  },

  // ── 담마눗사띠 게송 ───────────────────────────────
  {
    type: 'verse',
    pali: V_DHAMMA,
    korean: V_DHAMMAK,
    highlight: 'Svākkhāto bhagavatā dhammo',
    note: '담마의 여섯 가지 공덕(6덕)을 기억합니다.',
  },

  // ── 핵심 단어: 상가의 4덕 ─────────────────────────
  {
    type: 'teach',
    word: 'Supaṭipanno',
    meaning: '잘 수행하는',
    pronunciation: '수빠띠빤노',
    grammar: '형용사 (남성 주격)',
    etymology: 'su (잘) + paṭi + √pad (가다, 수행하다)',
    example: V_SANGHA,
    exampleKorean: V_SANGHAK,
  },
  {
    type: 'teach',
    word: 'ujupaṭipanno',
    meaning: '바르게 수행하는',
    pronunciation: '우주빠띠빤노',
    grammar: '형용사 (남성 주격)',
    etymology: 'uju (곧은, 바른) + paṭipanna',
    example: V_SANGHA,
    exampleKorean: V_SANGHAK,
  },

  // ── 상가눗사띠 게송 ───────────────────────────────
  {
    type: 'verse',
    pali: V_SANGHA,
    korean: V_SANGHAK,
    highlight: 'Supaṭipanno bhagavato sāvakasaṅgho',
    note: '상가의 네 가지 공덕(4덕)을 기억합니다.',
  },

  // ── 퀴즈 ──────────────────────────────────────────
  {
    type: 'quiz',
    question: '"arahaṃ"의 뜻은?',
    choices: ['세상을 아는 분', '아라한, 번뇌 없는 분', '잘 가신 분', '스승'],
    answer: 1,
  },
  {
    type: 'quiz',
    question: '"sandiṭṭhiko"는 담마의 어떤 덕목인가요?',
    choices: ['시간을 초월함', '와서 보라고 할 수 있음', '직접 볼 수 있음', '향상으로 이끎'],
    answer: 2,
  },
  {
    type: 'quiz',
    question: '붓다의 9덕 중 "lokavidū"의 뜻은?',
    choices: ['최상의 조어사', '세상을 아는 분', '잘 가신 분', '완전히 깨달은 분'],
    answer: 1,
  },
  {
    type: 'quiz',
    question: '"Supaṭipanno"는 어느 삼보의 덕목인가요?',
    choices: ['붓다', '담마', '상가', '계'],
    answer: 2,
  },

  // ── 따라 읽기 ─────────────────────────────────────
  {
    type: 'speak',
    pali: V_BUDDHA,
    korean: V_BUDDHAK,
    note: '붓다눗사띠를 독송합니다.',
  },
  {
    type: 'speak',
    pali: V_DHAMMA,
    korean: V_DHAMMAK,
    note: '담마눗사띠를 독송합니다.',
  },
  {
    type: 'speak',
    pali: V_SANGHA,
    korean: V_SANGHAK,
    note: '상가눗사띠를 독송합니다.',
  },
]
