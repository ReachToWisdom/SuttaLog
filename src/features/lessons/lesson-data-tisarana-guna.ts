// 4과: 삼보공덕 — 붓다눗사띠·담마눗사띠·상가눗사띠
import type { StepType } from './lesson-data-sn56-11'

const V_BUDDHA =
  'Iti pi so bhagavā arahaṃ sammāsambuddho vijjācaraṇasampanno sugato lokavidū ' +
  'anuttaro purisadammasārathi satthā devamanussānaṃ buddho bhagavā ti.'
const V_BUDDHAK =
  '그러므로 그 세존께서는: 아라한이시고, 완전히 바르게 깨달은 분이시고, ' +
  '명지와 실천을 갖춘 분이시고, 피안에 잘 가신 분이시고, 세상을 아는 분이시고, ' +
  '최상의 조어사이시고, 신들과 인간의 스승이시고, 붓다이시고, 세존이시다.'

const V_DHAMMA =
  'Svākkhāto bhagavatā dhammo sandiṭṭhiko akāliko ehipassiko opaneyyiko paccattaṃ veditabbo viññūhī ti.'
const V_DHAMMAK =
  '세존께서 잘 설하신 법은: 직접 볼 수 있고, 시간을 초월하며, 와서 보라고 할 수 있고, ' +
  '향상으로 이끌며, 지혜로운 이들이 각자 스스로 알아야 하는 것이다.'

const V_SANGHA =
  'Supaṭipanno bhagavato sāvakasaṅgho, ujupaṭipanno bhagavato sāvakasaṅgho, ' +
  'ñāyapaṭipanno bhagavato sāvakasaṅgho, sāmīcipaṭipanno bhagavato sāvakasaṅgho.'
const V_SANGHAK =
  '세존의 제자 승가는: 잘 수행하고, 바르게 수행하고, 올바르게 수행하고, 화합하여 수행하는 이들이다.'

export const LESSON_TISARANA_GUNA: StepType[] = [
  {
    type: 'intro',
    title: '삼보공덕',
    subtitle: '붓다눗사띠·담마눗사띠·상가눗사띠',
    description: '삼보(三寶)의 공덕을 기억하고 새기는 수행(隨念, Anussati)입니다. 붓다 9덕, 담마 6덕, 상가 4덕을 기억합니다.',
    icon: '🙏',
  },
  {
    type: 'teach',
    word: 'arahaṃ',
    pronKo: '아라항',
    meaning: '아라한, 번뇌 없는 분',
    icon: '🌟',
    grammar: '형용사/명사 (주격)',
  },
  {
    type: 'teach',
    word: 'sugato',
    pronKo: '수가또',
    meaning: '피안에 잘 가신 분',
    icon: '🚢',
    grammar: '형용사 (주격)',
  },
  {
    type: 'teach',
    word: 'lokavidū',
    pronKo: '로까위두',
    meaning: '세상을 아는 분',
    icon: '🌍',
    grammar: '복합어 (주격)',
  },
  {
    type: 'verse',
    pali: V_BUDDHA,
    pronKo: '이띠 삐 소 바가와 아라항 삼마삼붓도...',
    translation: V_BUDDHAK,
    highlight: ['arahaṃ sammāsambuddho'],
    note: '붓다의 아홉 가지 공덕(9덕)을 기억합니다.',
  },
  {
    type: 'teach',
    word: 'Svākkhāto',
    pronKo: '스왁카또',
    meaning: '잘 설해진',
    icon: '📖',
    grammar: '과거분사 (중성 주격)',
  },
  {
    type: 'teach',
    word: 'sandiṭṭhiko',
    pronKo: '산딧티꼬',
    meaning: '직접 볼 수 있는',
    icon: '👁️',
    grammar: '형용사 (남성 주격)',
  },
  {
    type: 'teach',
    word: 'akāliko',
    pronKo: '아깔리꼬',
    meaning: '시간을 초월한',
    icon: '⏳',
    grammar: '형용사 (남성 주격)',
  },
  {
    type: 'verse',
    pali: V_DHAMMA,
    pronKo: '스왁카또 바가와따 담모 산딧티꼬 아깔리꼬...',
    translation: V_DHAMMAK,
    highlight: ['Svākkhāto bhagavatā dhammo'],
    note: '담마의 여섯 가지 공덕(6덕)을 기억합니다.',
  },
  {
    type: 'teach',
    word: 'Supaṭipanno',
    pronKo: '수빠띠빤노',
    meaning: '잘 수행하는',
    icon: '🧘',
    grammar: '형용사 (남성 주격)',
  },
  {
    type: 'verse',
    pali: V_SANGHA,
    pronKo: '수빠띠빤노 바가와또 사와까상고...',
    translation: V_SANGHAK,
    highlight: ['Supaṭipanno bhagavato sāvakasaṅgho'],
    note: '상가의 네 가지 공덕(4덕)을 기억합니다.',
  },
  {
    type: 'quiz',
    question: '"arahaṃ"의 뜻은?',
    options: ['세상을 아는 분', '아라한, 번뇌 없는 분', '잘 가신 분', '스승'],
    answer: 1,
  },
  {
    type: 'quiz',
    question: '"sandiṭṭhiko"는 담마의 어떤 덕목인가요?',
    options: ['시간을 초월함', '와서 보라고 할 수 있음', '직접 볼 수 있음', '향상으로 이끎'],
    answer: 2,
  },
  {
    type: 'quiz',
    question: '"Supaṭipanno"는 어느 삼보의 덕목인가요?',
    options: ['붓다', '담마', '상가', '계'],
    answer: 2,
  },
  {
    type: 'speak',
    pali: V_BUDDHA,
    pronKo: '이띠 삐 소 바가와 아라항 삼마삼붓도...',
  },
  {
    type: 'speak',
    pali: V_DHAMMA,
    pronKo: '스왁카또 바가와따 담모...',
  },
  {
    type: 'speak',
    pali: V_SANGHA,
    pronKo: '수빠띠빤노 바가와또 사와까상고...',
  },
]
