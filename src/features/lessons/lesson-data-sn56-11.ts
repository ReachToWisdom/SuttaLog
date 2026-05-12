// 7과: 초전법륜경(Dhammacakkappavattana Sutta, SN 56.11)
// 출처: DOCS/제7과. 초전법륜경.txt
// ⚠️ 이 파일은 StepType을 export 합니다 (다른 lesson-data 파일이 import).

export type StepType =
  | { type: 'intro'; title: string; subtitle: string; description: string; icon: string }
  | { type: 'teach'; word: string; pronKo: string; meaning: string; icon: string; buddhism?: string; audio?: boolean; verseLine?: string; verseLineKo?: string; grammar?: string; baseForm?: string; formNote?: string }
  | { type: 'teach-grammar'; title: string; example: string; exampleKo: string; explanation: string }
  | { type: 'verse'; pali: string; pronKo: string; translation: string; highlight?: string[]; note?: string }
  | { type: 'quiz'; question: string; options: string[]; answer: number; hint?: string }
  | { type: 'speak'; pali: string; pronKo: string }
  | { type: 'match-listen'; instruction: string; word: string; pronKo: string; options: string[]; answer: number }
  | { type: 'match-reverse'; instruction: string; meaning: string; options: string[]; answer: number }
  | { type: 'writing'; instruction: string; meaning: string; pronKo: string; answer: string; hint?: string }
  | { type: 'arrange'; instruction: string; translation: string; blocks: string[]; correctOrder: number[] }

const V_INTRO = 'Ekaṁ samayaṁ bhagavā bārāṇasiyaṁ viharati isipatane migadāye. Tatra kho bhagavā pañcavaggiye bhikkhū āmantesi —'
const V_INTROK = '한 때 세존께서 바라나시의 이시빠따나, 녹야원에 머무셨다. 거기서 세존께서 다섯 비구에게 말씀하셨다 —'

const V_EXTREMES = '"Dveme, bhikkhave, antā pabbajitena na sevitabbā. Katame dve? Yo cāyaṁ kāmesu kāmasukhallikānuyogo hīno gammo pothujjaniko anariyo anatthasaṁhito, yo cāyaṁ attakilamathānuyogo dukkho anariyo anatthasaṁhito."'
const V_EXTREMESK = '"비구들이여, 출가자가 따르지 말아야 할 두 극단이 있다. 무엇이 둘인가? 감각적 욕망에 빠지는 쾌락 추구 — 저열하고, 범속하고, 범부의 것이며, 성스럽지 않고, 이익이 없다. 그리고 자기를 학대하는 고행 추구 — 괴롭고, 성스럽지 않고, 이익이 없다."'

const V_MIDDLE = '"Ete kho, bhikkhave, ubho ante anupagamma majjhimā paṭipadā tathāgatena abhisambuddhā cakkhukaraṇī ñāṇakaraṇī upasamāya abhiññāya sambodhāya nibbānāya saṁvattati."'
const V_MIDDLEK = '"비구들이여, 이 두 극단에 다가가지 않고 여래가 완전히 깨달은 중도 — 눈을 만들고, 앎을 만들며, 적정·증지·정각·열반으로 이끄는 중도가 있다."'

const V_PATH = '"Katamā ca sā, bhikkhave, majjhimā paṭipadā ... ayameva ariyo aṭṭhaṅgiko maggo, seyyathidaṁ — sammādiṭṭhi sammāsaṅkappo sammāvācā sammākammanto sammāājīvo sammāvāyāmo sammāsati sammāsamādhi."'
const V_PATHK = '"비구들이여, 그 중도는 무엇인가? 그것은 바로 성스러운 팔정도 — 정견·정사유·정어·정업·정명·정정진·정념·정정이다."'

const V_DUKKHA = '"Idaṁ kho pana, bhikkhave, dukkhaṁ ariyasaccaṁ — jātipi dukkhā, jarāpi dukkhā, byādhipi dukkho, maraṇampi dukkhaṁ, appiyehi sampayogo dukkho, piyehi vippayogo dukkho, yampicchaṁ na labhati tampi dukkhaṁ — saṁkhittena pañcupādānakkhandhā dukkhā."'
const V_DUKKHAK = '"비구들이여, 이것이 괴로움의 성스러운 진리(고제)이다 — 태어남도 괴로움, 늙음도 괴로움, 병듦도 괴로움, 죽음도 괴로움, 미운 자와 만남도 괴로움, 좋은 자와 헤어짐도 괴로움, 원하는 것을 얻지 못함도 괴로움 — 요컨대 오취온(五取蘊)이 괴로움이다."'

const V_SAMUDAYA = '"Idaṁ kho pana, bhikkhave, dukkhasamudayaṁ ariyasaccaṁ — yāyaṁ taṇhā ponobbhavikā nandirāgasahagatā tatratatrābhinandinī, seyyathidaṁ — kāmataṇhā, bhavataṇhā, vibhavataṇhā."'
const V_SAMUDAYAK = '"비구들이여, 이것이 괴로움의 일어남의 성스러운 진리(집제)이다 — 재생을 가져오고, 즐거움과 탐욕이 함께하며, 이곳저곳에서 즐기는 갈애 — 곧 욕애·유애·무유애이다."'

const V_NIRODHA = '"Idaṁ kho pana, bhikkhave, dukkhanirodhaṁ ariyasaccaṁ — yo tassāyeva taṇhāya asesavirāganirodho cāgo paṭinissaggo mutti anālayo."'
const V_NIRODHAK = '"비구들이여, 이것이 괴로움의 소멸의 성스러운 진리(멸제)이다 — 그 갈애가 남김없이 사라지고 소멸하며, 버려지고, 놓아지고, 풀려나며, 집착이 없는 것이다."'

const V_MAGGA = '"Idaṁ kho pana, bhikkhave, dukkhanirodhagāminī paṭipadā ariyasaccaṁ — ayameva ariyo aṭṭhaṅgiko maggo, seyyathidaṁ — sammādiṭṭhi ... sammāsamādhi."'
const V_MAGGAK = '"비구들이여, 이것이 괴로움의 소멸로 이끄는 길의 성스러운 진리(도제)이다 — 바로 성스러운 팔정도이니, 정견 ... 정정이다."'

const V_INSIGHT = '"\'Idaṁ dukkhaṁ ariyasaccan\'ti me, bhikkhave, pubbe ananussutesu dhammesu cakkhuṁ udapādi, ñāṇaṁ udapādi, paññā udapādi, vijjā udapādi, āloko udapādi. \'Taṁ kho panidaṁ dukkhaṁ ariyasaccaṁ pariññeyyan\'ti ... \'pariññātan\'ti ..." (사성제 각각에 3차원 — 알아야 함·알아짐의 12행상)'
const V_INSIGHTK = '"\'이것이 고성제이다\'라고 비구들이여, 일찍이 들은 적 없던 법에 대해 눈이 생기고, 앎이 생기고, 지혜가 생기고, 명지가 생기고, 광명이 생겼다. \'이 고성제는 완전히 알아야 한다\' ... \'이미 완전히 알았다\' ... (사성제 각각에 3단계 = 12행상)."'

const V_PROCLAIM = '"Yāvakīvañca me, bhikkhave, imesu catūsu ariyasaccesu evaṁ tiparivaṭṭaṁ dvādasākāraṁ yathābhūtaṁ ñāṇadassanaṁ na suvisuddhaṁ ahosi, neva tāvāhaṁ ... \'anuttaraṁ sammāsambodhiṁ abhisambuddho\'ti paccaññāsiṁ. Yato ca kho me ... suvisuddhaṁ ahosi, athāhaṁ ... paccaññāsiṁ. Ñāṇañca pana me dassanaṁ udapādi — \'akuppā me vimutti, ayamantimā jāti, natthidāni punabbhavo\'ti."'
const V_PROCLAIMK = '"비구들이여, 이 사성제에 대해 이와 같이 3회전 12행상의 여실한 지견이 청정해지기 전에는, 나는 위없는 정등각을 깨달았다고 천명하지 않았다. 그러나 그것이 청정해진 뒤에 천명하였다. 그리고 나에게 지견이 일어났다 — \'나의 해탈은 흔들리지 않으며, 이것이 마지막 생이고, 이제 다시 태어남은 없다.\'"'

const V_KONDANNA = 'Imasmiñca pana veyyākaraṇasmiṁ bhaññamāne āyasmato Koṇḍaññassa virajaṁ vītamalaṁ dhammacakkhuṁ udapādi — "Yaṁ kiñci samudayadhammaṁ, sabbaṁ taṁ nirodhadhamman"ti.'
const V_KONDANNAK = '이 가르침이 설해지고 있을 때, 꼰단냐 존자에게 티끌 없고 때 묻지 않은 법의 눈이 일어났다 — "일어남의 법인 모든 것은 그 소멸의 법이다."'

const V_DEVAS = 'Pavattite ca pana bhagavatā dhammacakke bhummā devā saddamanussāvesuṁ — "Etaṁ bhagavatā bārāṇasiyaṁ isipatane migadāye anuttaraṁ dhammacakkaṁ pavattitaṁ appaṭivattiyaṁ samaṇena vā brāhmaṇena vā devena vā mārena vā brahmunā vā kenaci vā lokasmin"ti. (지신→사대왕천→도리천→야마천→도솔천→화락천→타화자재천→범천계까지 차례로 환호)'
const V_DEVASK = '세존께서 법륜을 굴리시자 지신들이 환호하였다 — "이것은 세존께서 바라나시 이시빠따나 녹야원에서 굴리신 위없는 법륜이니, 사문·바라문·신·마라·범천 그 누구에 의해서도 되돌릴 수 없다." (이 환호는 사대왕천·도리천·야마천·도솔천·화락천·타화자재천·범천계까지 차례로 퍼져 범천계까지 이르렀다.)'

const V_UDANA = 'Atha kho bhagavā imaṁ udānaṁ udānesi — "Aññāsi vata, bho, Koṇḍañño, aññāsi vata, bho, Koṇḍañño"ti! Iti hidaṁ āyasmato Koṇḍaññassa "Aññāsikoṇḍañño"tveva nāmaṁ ahosīti.'
const V_UDANAK = '그때 세존께서 이 우다나를 읊으셨다 — "참으로 꼰단냐는 알았구나! 참으로 꼰단냐는 알았구나!" 이로 인해 꼰단냐 존자의 이름은 "안냐시꼰단냐(완전히 안 꼰단냐)"가 되었다.'

export const LESSON_SN56_11: StepType[] = [
  { type: 'intro', icon: '☸️', title: '초전법륜경', subtitle: 'Dhammacakkappavattana Sutta (SN 56.11)',
    description: '붓다께서 깨달음을 이룬 뒤 녹야원의 다섯 비구에게 처음으로 설하신 가르침.\n양극단·중도·팔정도·사성제·3법륜 12행상·꼰단냐의 법안 — 불교의 핵심이 한 자리에.' },

  { type: 'verse', pali: V_INTRO, pronKo: '에깡 사마양 바가와 바라나시양 위하라띠 이시빠따네 미가다예...',
    translation: V_INTROK, highlight: ['bārāṇasiyaṁ', 'isipatane', 'migadāye', 'pañcavaggiye', 'bhikkhū'],
    note: '서두 — 바라나시 녹야원, 다섯 비구를 향한 첫 설법.' },

  { type: 'teach', icon: '⚖️', word: 'majjhimā paṭipadā', pronKo: '맛지마 빠띠빠다', meaning: '중도',
    grammar: '여성형 명사구', buddhism: '쾌락과 고행 두 극단을 떠난 길. 정각·열반으로 이끔.', verseLine: V_MIDDLE, verseLineKo: V_MIDDLEK, audio: true },

  { type: 'teach', icon: '🪷', word: 'taṇhā', pronKo: '딴하', meaning: '갈애',
    grammar: '여성명사', buddhism: '집제의 핵심. 욕애·유애·무유애 세 가지로 분류됨.', verseLine: V_SAMUDAYA, verseLineKo: V_SAMUDAYAK, audio: true },

  { type: 'teach', icon: '🌀', word: 'tiparivaṭṭaṁ dvādasākāraṁ', pronKo: '띠빠리왓땅 드와다사까랑', meaning: '3회전 12행상',
    grammar: '복합어', buddhism: '사성제 각각에 ① 이것이 ~다 ② ~해야 한다 ③ ~했다 의 3차원, 합해 12행상.', verseLine: V_PROCLAIM, verseLineKo: V_PROCLAIMK, audio: true },

  { type: 'verse', pali: V_EXTREMES, pronKo: '드웨메, 빅카웨, 안따 빱바지떼나 나 세위땁바...',
    translation: V_EXTREMESK, highlight: ['kāmasukhallikānuyogo', 'attakilamathānuyogo'], note: '① 두 극단 — 쾌락 추구와 고행 추구.' },

  { type: 'verse', pali: V_MIDDLE, pronKo: '에떼 코, 빅카웨, 우보 안떼 아누빠감마 맛지마 빠띠빠다...',
    translation: V_MIDDLEK, highlight: ['majjhimā paṭipadā', 'tathāgatena abhisambuddhā', 'nibbānāya'], note: '② 중도 — 양극단을 떠나 정각·열반으로 이끔.' },

  { type: 'verse', pali: V_PATH, pronKo: '까따마 짜 사 빅카웨 맛지마 빠띠빠다...',
    translation: V_PATHK, highlight: ['ariyo aṭṭhaṅgiko maggo', 'sammādiṭṭhi', 'sammāsamādhi'], note: '③ 중도의 구체 = 팔정도.' },

  { type: 'verse', pali: V_DUKKHA, pronKo: '이당 코 빠나 빅카웨 둑캉 아리야삿짱...',
    translation: V_DUKKHAK, highlight: ['dukkhaṁ', 'ariyasaccaṁ', 'pañcupādānakkhandhā'], note: '④ 고성제 — 생로병사·애별리·원증회·구부득, 요컨대 오취온.' },

  { type: 'verse', pali: V_SAMUDAYA, pronKo: '이당 코 빠나 빅카웨 둑카사무다양 아리야삿짱...',
    translation: V_SAMUDAYAK, highlight: ['taṇhā', 'kāmataṇhā', 'bhavataṇhā', 'vibhavataṇhā'], note: '⑤ 집성제 — 갈애(욕애·유애·무유애).' },

  { type: 'verse', pali: V_NIRODHA, pronKo: '이당 코 빠나 빅카웨 둑카니로당 아리야삿짱...',
    translation: V_NIRODHAK, highlight: ['asesavirāganirodho', 'paṭinissaggo', 'mutti'], note: '⑥ 멸성제 — 갈애의 남김 없는 소멸·놓음.' },

  { type: 'verse', pali: V_MAGGA, pronKo: '이당 코 빠나 빅카웨 둑카니로다가미니 빠띠빠다 아리야삿짱...',
    translation: V_MAGGAK, highlight: ['dukkhanirodhagāminī', 'ariyo aṭṭhaṅgiko maggo'], note: '⑦ 도성제 — 팔정도.' },

  { type: 'verse', pali: V_INSIGHT, pronKo: '이당 둑캉 아리야삿짠띠 메 빅카웨 ... 짝쿵 우다빠디 냐낭 우다빠디...',
    translation: V_INSIGHTK, highlight: ['cakkhuṁ udapādi', 'ñāṇaṁ udapādi', 'pariññeyyaṁ', 'pariññātaṁ'],
    note: '⑧ 3회전 12행상 — 사성제 각각 (이것이다 / ~해야 한다 / ~했다) × 4 = 12 통찰.' },

  { type: 'verse', pali: V_PROCLAIM, pronKo: '야와끼완짜 메 빅카웨 이메수 짜뚜수 아리야삿쩨수...',
    translation: V_PROCLAIMK, highlight: ['tiparivaṭṭaṁ', 'dvādasākāraṁ', 'akuppā me vimutti', 'natthidāni punabbhavo'],
    note: '⑨ 정각 천명 — "흔들리지 않는 해탈, 마지막 생, 더 이상의 태어남 없음."' },

  { type: 'verse', pali: V_KONDANNA, pronKo: '이마스민짜 빠나 웨이야까라나스밍 반냐마네...',
    translation: V_KONDANNAK, highlight: ['dhammacakkhuṁ', 'samudayadhammaṁ', 'nirodhadhammaṁ'],
    note: '⑩ 꼰단냐의 법안 — "일어남의 법은 모두 소멸의 법" = 예류과 증득.' },

  { type: 'verse', pali: V_DEVAS, pronKo: '빠왓띠떼 짜 빠나 바가와따 담마짝께 붐마 데와 삿다마눗사웨숭...',
    translation: V_DEVASK, highlight: ['dhammacakkaṁ pavattitaṁ', 'appaṭivattiyaṁ'],
    note: '⑪ 천신들의 환호 — 지신·사천왕·도리·야마·도솔·화락·타화·범천까지 차례로 퍼짐.' },

  { type: 'verse', pali: V_UDANA, pronKo: '아타 코 바가와 이망 우다낭 우다네시 — 안냐시 와따 보 꼰단뇨...',
    translation: V_UDANAK, highlight: ['Aññāsi', 'Aññāsikoṇḍañño'],
    note: '⑫ 우다나 — "꼰단냐는 알았구나!" → "안냐시꼰단냐(완전히 안 자)" 별명.' },

  { type: 'quiz', question: '"majjhimā paṭipadā(중도)"란?',
    options: ['쾌락 추구', '고행', '양극단을 떠난 길', '신앙'], answer: 2 },

  { type: 'quiz', question: '사성제의 순서는?',
    options: ['고·집·멸·도', '도·집·멸·고', '계·정·혜·해탈', '신·구·의·식'], answer: 0 },

  { type: 'quiz', question: '"3회전 12행상"의 12는 어떻게 나오나요?',
    options: ['사성제 × 3차원(이것·해야 함·했음)', '팔정도 + 사성제', '오온 × 3', '12연기'], answer: 0 },

  { type: 'quiz', question: '꼰단냐가 얻은 "dhammacakkhu(법의 눈)"는?',
    options: ['예류과', '아라한과', '신통', '계율'], answer: 0 },

  { type: 'writing', instruction: '"갈애"를 빠알리어로 써보세요', meaning: '갈애(집제의 핵심)', pronKo: '딴하', answer: 'taṇhā' },

  { type: 'speak', pali: V_INTRO, pronKo: '에깡 사마양 바가와 바라나시양 위하라띠 이시빠따네 미가다예.' },
  { type: 'speak', pali: V_PATH, pronKo: '아야메와 아리요 앗탕기꼬 막고 ... 삼마사마디.' },
]
