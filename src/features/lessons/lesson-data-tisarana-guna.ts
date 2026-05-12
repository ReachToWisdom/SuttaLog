// 4과: 삼보 공덕 — 붓다눗사띠·담마눗사띠·상가눗사띠
// 출처: DOCS/제4과. 삼보 공덕.txt
import type { StepType } from './lesson-data-sn56-11'

const V_BUDDHA =
  'Itipi so Bhagavā, Arahaṁ, Sammāsambuddho, Vijjācaraṇa-sampanno, Sugato, Lokavidū, ' +
  'Anuttaro Purisadamma sārathi, Satthā devamanussānaṁ, Buddho, Bhagavā’ti.'
const V_BUDDHAKo =
  '이띠삐 소 바가와, 아라항, 삼마삼붓도, 윗자짜라나삼빤노, 수가또, 로까위두, ' +
  '아눗따로 뿌리사담마사라티, 삿타 데와마눗사낭, 붓도, 바가와띠.'
const V_BUDDHAK =
  '그러므로 그분 세존께서는, 아라한, 완전히 바르게 깨달은 분, 명지와 실천을 갖춘 분, ' +
  '잘 가신 분, 세상을 아는 분, 위없는 조어장부, 신과 인간의 스승, 붓다, 세존이시다.'

const V_DHAMMA =
  'Svākkhāto Bhagavatā Dhammo, sandiṭṭhiko, akāliko, ehipassiko, opaneyyiko, paccattaṁ veditabbo viññūhī’ti.'
const V_DHAMMAKo =
  '스왁카또 바가와따 담모, 산딧티꼬, 아깔리꼬, 에히빳시꼬, 오빠네이이꼬, 빳짯땅 웨디땁보 윈뉴히띠.'
const V_DHAMMAK =
  '세존께서 잘 설하신 담마는, 직접 볼 수 있고, 시간을 초월하며, 와서 보라 할 만하고, ' +
  '향상으로 이끌며, 지혜로운 이들이 각자 스스로 알아야 하는 것이다.'

const V_SANGHA =
  'Suppaṭipanno Bhagavato sāvakasaṅgho, ujuppaṭipanno Bhagavato sāvakasaṅgho, ' +
  'ñāyappaṭipanno Bhagavato sāvakasaṅgho, sāmīcippaṭipanno Bhagavato sāvakasaṅgho, ' +
  'yadidaṁ cattāri purisayugāni aṭṭha purisapuggalā, esa Bhagavato sāvakasaṅgho, ' +
  'āhuneyyo pāhuneyyo dakkhiṇeyyo, añjalikaraṇīyo anuttaraṁ puññakkhettaṁ lokassā’ti.'
const V_SANGHAKo =
  '숩빠띠빤노 바가와또 사와까상고, 우줍빠띠빤노 바가와또 사와까상고, ' +
  '냐얍빠띠빤노 바가와또 사와까상고, 사미찝빠띠빤노 바가와또 사와까상고, ' +
  '야디당 짯따리 뿌리사유가니 앗타 뿌리사뿍갈라, 에사 바가와또 사와까상고, ' +
  '아후네이요 빠후네이요 닥키네이요, 안잘리까라니요 아눗따랑 뿐냑켓땅 로깟사띠.'
const V_SANGHAK =
  '세존의 제자 승가는 잘 수행하고, 바르게 수행하고, 올바른 방법으로 수행하고, 합당하게 수행한다. ' +
  '곧 네 쌍의 인간, 여덟 부류의 성인들 — 그분이 세존의 제자 승가이니, ' +
  '예경 받을 만하고, 환대 받을 만하고, 보시 받을 만하고, 합장 받을 만하며, 세상의 위없는 복밭이다.'

export const LESSON_TISARANA_GUNA: StepType[] = [
  { type: 'intro', icon: '🙏', title: '삼보 공덕', subtitle: '붓다눗사띠·담마눗사띠·상가눗사띠',
    description: '삼보(三寶)의 공덕을 기억하고 새기는 수행(隨念, Anussati).\n붓다 9덕, 담마 6덕, 상가 9덕을 기억합니다.' },

  // ===== 1. 붓다눗사띠 =====
  { type: 'teach', icon: '🌟', word: 'Arahaṁ', pronKo: '아라항', meaning: '아라한, 번뇌 없는 분',
    grammar: '형용사/명사 (주격)', baseForm: 'arahant',
    buddhism: '①번 공덕. 모든 번뇌를 끊어 공양받을 만한 분.', verseLine: V_BUDDHA, verseLineKo: V_BUDDHAK, audio: true },

  { type: 'teach', icon: '☸️', word: 'Sammāsambuddho', pronKo: '삼마삼붓도', meaning: '완전히 바르게 깨달은 분',
    grammar: '형용사 (남성 주격)', baseForm: 'sammā(바르게) + saṁ(완전히) + buddha',
    buddhism: '②번 공덕. 정등각자(正等覺者). 스승 없이 스스로 깨달음.', verseLine: V_BUDDHA, verseLineKo: V_BUDDHAK, audio: true },

  { type: 'teach', icon: '📐', word: 'Vijjācaraṇa-sampanno', pronKo: '윗자짜라나삼빤노', meaning: '명지(明知)와 실천을 갖춘 분',
    grammar: '복합어 (주격)', baseForm: 'vijjā(앎) + caraṇa(실천) + sampanno(갖춘)',
    buddhism: '③번 공덕. 지혜와 행이 모두 원만함.', verseLine: V_BUDDHA, verseLineKo: V_BUDDHAK, audio: true },

  { type: 'teach', icon: '🚢', word: 'Sugato', pronKo: '수가또', meaning: '잘 가신 분, 선서(善逝)',
    grammar: '형용사 (주격)', baseForm: 'su(잘) + gata(간)',
    buddhism: '④번 공덕. 열반에 잘 가신 분.', verseLine: V_BUDDHA, verseLineKo: V_BUDDHAK, audio: true },

  { type: 'teach', icon: '🌍', word: 'Lokavidū', pronKo: '로까위두', meaning: '세상을 아는 분',
    grammar: '복합어 (주격)', baseForm: 'loka(세상) + vidū(아는 자)',
    buddhism: '⑤번 공덕. 세간(중생계·기세계·행세계)을 두루 아심.', verseLine: V_BUDDHA, verseLineKo: V_BUDDHAK, audio: true },

  { type: 'teach', icon: '🎯', word: 'Anuttaro Purisadamma sārathi', pronKo: '아눗따로 뿌리사담마사라티', meaning: '위없는 조어장부(調御丈夫)',
    grammar: '복합어 (주격)', baseForm: 'anuttara(위없는) + purisadamma(조어할 사람) + sārathi(마부)',
    buddhism: '⑥번 공덕. 사람을 길들이는 데 더없이 뛰어난 분.', verseLine: V_BUDDHA, verseLineKo: V_BUDDHAK, audio: true },

  { type: 'teach', icon: '👨‍🏫', word: 'Satthā devamanussānaṁ', pronKo: '삿타 데와마눗사낭', meaning: '신과 인간의 스승',
    grammar: '명사 (주격) + 속격 복수', baseForm: 'satthā(스승) + devamanussānaṁ(신과 인간의)',
    buddhism: '⑦번 공덕. 천상과 인간을 모두 가르치시는 분.', verseLine: V_BUDDHA, verseLineKo: V_BUDDHAK, audio: true },

  { type: 'verse', pali: V_BUDDHA, pronKo: V_BUDDHAKo, translation: V_BUDDHAK,
    highlight: ['Arahaṁ', 'Sammāsambuddho', 'Sugato', 'Lokavidū', 'Buddho', 'Bhagavā'],
    note: '🙏 붓다의 9덕 — 아라한 · 정등각자 · 명행족 · 선서 · 세간해 · 무상사 · 조어장부 · 천인사 · 불·세존.' },

  // ===== 2. 담마눗사띠 =====
  { type: 'teach', icon: '📖', word: 'Svākkhāto', pronKo: '스왁카또', meaning: '잘 설해진',
    grammar: '과거분사 (남성 주격)', baseForm: 'su(잘) + ākhyāta(설해진)',
    buddhism: '담마 1덕. 처음·중간·끝이 모두 좋은 가르침.', verseLine: V_DHAMMA, verseLineKo: V_DHAMMAK, audio: true },

  { type: 'teach', icon: '👁️', word: 'sandiṭṭhiko', pronKo: '산딧티꼬', meaning: '직접 볼 수 있는',
    grammar: '형용사 (남성 주격)',
    buddhism: '담마 2덕. 지금 여기서 스스로 볼 수 있음.', verseLine: V_DHAMMA, verseLineKo: V_DHAMMAK, audio: true },

  { type: 'teach', icon: '⏳', word: 'akāliko', pronKo: '아깔리꼬', meaning: '시간을 초월한',
    grammar: '형용사 (남성 주격)', baseForm: 'a(부정) + kāla(시간) + ika',
    buddhism: '담마 3덕. 즉시 결과를 가져오며 때를 가리지 않음.', verseLine: V_DHAMMA, verseLineKo: V_DHAMMAK, audio: true },

  { type: 'teach', icon: '🤚', word: 'ehipassiko', pronKo: '에히빳시꼬', meaning: '와서 보라 할 수 있는',
    grammar: '형용사 (남성 주격)', baseForm: 'ehi(오라) + passa(보라) + ika',
    buddhism: '담마 4덕. 누구든 검증하도록 초대할 수 있음.', verseLine: V_DHAMMA, verseLineKo: V_DHAMMAK, audio: true },

  { type: 'teach', icon: '📈', word: 'opaneyyiko', pronKo: '오빠네이이꼬', meaning: '향상으로 이끄는',
    grammar: '형용사 (남성 주격)',
    buddhism: '담마 5덕. 안으로 이끌어 열반에 이르게 함.', verseLine: V_DHAMMA, verseLineKo: V_DHAMMAK, audio: true },

  { type: 'teach', icon: '🧠', word: 'paccattaṁ veditabbo viññūhī', pronKo: '빳짯땅 웨디땁보 윈뉴히', meaning: '지혜로운 이가 각자 스스로 알아야 할',
    grammar: '구문', baseForm: 'paccattaṁ(각자) + veditabba(알아야 할) + viññūhi(지혜로운 자들에 의해)',
    buddhism: '담마 6덕. 지혜로운 이가 스스로 체득하는 것.', verseLine: V_DHAMMA, verseLineKo: V_DHAMMAK, audio: true },

  { type: 'verse', pali: V_DHAMMA, pronKo: V_DHAMMAKo, translation: V_DHAMMAK,
    highlight: ['Svākkhāto', 'sandiṭṭhiko', 'akāliko', 'ehipassiko', 'opaneyyiko'],
    note: '📜 담마의 6덕 — 잘 설해짐 · 직견 · 시간 초월 · 와서 봄 · 향상 · 자증.' },

  // ===== 3. 상가눗사띠 =====
  { type: 'teach', icon: '🧘', word: 'Suppaṭipanno', pronKo: '숩빠띠빤노', meaning: '잘 수행하는',
    grammar: '과거분사 (남성 주격)', baseForm: 'su(잘) + paṭipanna(수행하는)',
    buddhism: '상가 1덕. 바른 도를 잘 수행함.', verseLine: V_SANGHA, verseLineKo: V_SANGHAK, audio: true },

  { type: 'teach', icon: '📏', word: 'ujuppaṭipanno', pronKo: '우줍빠띠빤노', meaning: '곧게 수행하는',
    grammar: '과거분사 (남성 주격)', baseForm: 'uju(곧은) + paṭipanna',
    buddhism: '상가 2덕. 굽음 없이 곧게 수행함.', verseLine: V_SANGHA, verseLineKo: V_SANGHAK, audio: true },

  { type: 'teach', icon: '🎯', word: 'ñāyappaṭipanno', pronKo: '냐얍빠띠빤노', meaning: '바른 방법으로 수행하는',
    grammar: '과거분사 (남성 주격)', baseForm: 'ñāya(바른 도) + paṭipanna',
    buddhism: '상가 3덕. 정도에 따라 수행함.', verseLine: V_SANGHA, verseLineKo: V_SANGHAK, audio: true },

  { type: 'teach', icon: '🪷', word: 'sāmīcippaṭipanno', pronKo: '사미찝빠띠빤노', meaning: '합당하게 수행하는',
    grammar: '과거분사 (남성 주격)', baseForm: 'sāmīci(합당함) + paṭipanna',
    buddhism: '상가 4덕. 마땅한 도리로 수행함.', verseLine: V_SANGHA, verseLineKo: V_SANGHAK, audio: true },

  { type: 'teach', icon: '👥', word: 'cattāri purisayugāni aṭṭha purisapuggalā', pronKo: '짯따리 뿌리사유가니 앗타 뿌리사뿍갈라', meaning: '네 쌍 여덟 분',
    grammar: '복합어', baseForm: '예류·일래·불환·아라한 (도+과 = 4쌍 8분)',
    buddhism: '사쌍팔배(四雙八輩). 성인 제자의 네 단계×도/과 두 단계 = 여덟 부류.', verseLine: V_SANGHA, verseLineKo: V_SANGHAK, audio: true },

  { type: 'teach', icon: '🌾', word: 'puññakkhettaṁ', pronKo: '뿐냑켓땅', meaning: '복밭(福田)',
    grammar: '복합어 (중성 주격)', baseForm: 'puñña(공덕) + khetta(밭)',
    buddhism: '상가에 베푼 보시는 세상 어디에도 견줄 수 없는 복밭이 됨.', verseLine: V_SANGHA, verseLineKo: V_SANGHAK, audio: true },

  { type: 'verse', pali: V_SANGHA, pronKo: V_SANGHAKo, translation: V_SANGHAK,
    highlight: ['Suppaṭipanno', 'ujuppaṭipanno', 'ñāyappaṭipanno', 'sāmīcippaṭipanno', 'puññakkhettaṁ'],
    note: '👥 상가의 9덕 — 4가지 수행(잘·곧게·바르게·합당하게) + 사쌍팔배 + 4가지 받음(예경·환대·보시·합장) + 위없는 복밭.' },

  { type: 'quiz', question: '"Arahaṁ"의 뜻은?',
    options: ['세상을 아는 분', '아라한, 번뇌 없는 분', '잘 가신 분', '스승'], answer: 1 },

  { type: 'quiz', question: '"sandiṭṭhiko"는 담마의 어떤 덕목인가요?',
    options: ['시간을 초월함', '와서 보라 할 수 있음', '직접 볼 수 있음', '향상으로 이끎'], answer: 2 },

  { type: 'quiz', question: '"Suppaṭipanno"는 어느 삼보의 덕목인가요?',
    options: ['붓다', '담마', '상가', '계'], answer: 2 },

  { type: 'quiz', question: '"cattāri purisayugāni aṭṭha purisapuggalā"의 뜻은?',
    options: ['네 쌍 여덟 분의 성인', '네 가지 진리', '여덟 가지 길', '네 무량심'], answer: 0 },

  { type: 'speak', pali: V_BUDDHA, pronKo: '이띠삐 소 바가와 아라항 삼마삼붓도...' },
  { type: 'speak', pali: V_DHAMMA, pronKo: '스왁카또 바가와따 담모 산딧티꼬...' },
  { type: 'speak', pali: V_SANGHA, pronKo: '숩빠띠빤노 바가와또 사와까상고...' },
]
