// 10과: 보배경(Ratana Sutta) — 삼보의 공덕과 가피
// 출처: DOCS/제10과. 보배경.txt — 17게송
import type { StepType } from './lesson-data-sn56-11'

const V1 = 'yānīdha bhūtāni samāgatāni, bhummāni vā yāni va antalikkhe.\nsabbeva bhūtā sumanā bhavantu, athopi sakkacca suṇantu bhāsitaṁ.'
const V1K = '이 자리에 모인 존재들, 지상에 있든 허공에 있든 —\n모든 존재가 기쁜 마음이 되어 이 말씀을 공경히 들으라.'

const V2 = 'tasmā hi bhūtā nisāmetha sabbe, mettaṁ karotha mānusiyā pajāya.\ndivā ca ratto ca haranti ye baliṁ, tasmā hi ne rakkhatha appamattā.'
const V2K = '그러므로 모든 존재여, 들으라 — 인간의 후손들에게 자애를 베풀라.\n낮과 밤 공물을 가져다 바치는 그들을, 방일하지 말고 보호하라.'

const V3 = 'yaṁ kiñci vittaṁ idha vā huraṁ vā, saggesu vā yaṁ ratanaṁ paṇītaṁ.\nna no samaṁ atthi tathāgatena, idampi buddhe ratanaṁ paṇītaṁ.\netena saccena suvatthi hotu.'
const V3K = '이 세상이든 저 세상이든 어떤 보물, 천상의 뛰어난 보배도 —\n여래와 견줄 수 있는 것은 없다. 이것이 붓다 안의 뛰어난 보배.\n이 진실에 의해 행복이 있기를.'

const V4 = 'khayaṁ virāgaṁ amataṁ paṇītaṁ, yadajjhagā sakyamunī samāhito.\nna tena dhammena samatthi kiñci, idampi dhamme ratanaṁ paṇītaṁ.\netena saccena suvatthi hotu.'
const V4K = '삼매에 든 사꺄무니가 도달하신 — 소멸·이욕·불사의 뛰어난 경지.\n그 담마와 견줄 수 있는 것은 없다. 이것이 담마 안의 뛰어난 보배.\n이 진실에 의해 행복이 있기를.'

const V5 = 'yaṁ buddhaseṭṭho parivaṇṇayī suciṁ, samādhimānantarikaññamāhu.\nsamādhinā tena samo na vijjati, idampi dhamme ratanaṁ paṇītaṁ.\netena saccena suvatthi hotu.'
const V5K = '붓다 중의 으뜸이 찬탄하신 청정함 — "무간(無間)의 삼매"라 부르는 것.\n그 삼매와 견줄 수 있는 것은 없다. 이것이 담마 안의 뛰어난 보배.\n이 진실에 의해 행복이 있기를.'

const V6 = 'ye puggalā aṭṭha sataṁ pasatthā, cattāri etāni yugāni honti.\nte dakkhiṇeyyā sugatassa sāvakā, etesu dinnāni mahapphalāni.\nidampi saṅghe ratanaṁ paṇītaṁ, etena saccena suvatthi hotu.'
const V6K = '선인들이 찬탄하는 여덟 인물, 네 쌍 — 선서(善逝)의 제자들이며 보시받을 만한 분들.\n그들에게 베푼 보시는 큰 결실을 가져온다. 이것이 상가 안의 뛰어난 보배.\n이 진실에 의해 행복이 있기를.'

const V7 = 'ye suppayuttā manasā daḷhena, nikkāmino gotamasāsanamhi.\nte pattipattā amataṁ vigayha, laddhā mudhā nibbutiṁ bhuñjamānā.\nidampi saṅghe ratanaṁ paṇītaṁ, etena saccena suvatthi hotu.'
const V7K = '굳건한 마음으로 잘 정진하여, 고따마의 가르침에서 욕망을 떠난 이들 —\n얻을 것을 얻고 불사에 들어, 값없이 얻은 적정을 누린다. 이것이 상가 안의 뛰어난 보배.\n이 진실에 의해 행복이 있기를.'

const V8 = 'yathindakhīlo pathavissito siyā, catubbhi vātehi asampakampiyo.\ntathūpamaṁ sappurisaṁ vadāmi, yo ariyasaccāni avecca passati.\nidampi saṅghe ratanaṁ paṇītaṁ, etena saccena suvatthi hotu.'
const V8K = '땅에 박힌 인다라 기둥이 사방의 바람에도 흔들리지 않듯,\n그처럼 성스러운 진리를 꿰뚫어 본 선인을 나는 말한다. 이것이 상가 안의 뛰어난 보배.\n이 진실에 의해 행복이 있기를.'

const V9 = 'ye ariyasaccāni vibhāvayanti, gambhīrapaññena sudesitāni.\nkiñcāpi te honti bhusaṁ pamattā, na te bhavaṁ aṭṭhamamādiyanti.\nidampi saṅghe ratanaṁ paṇītaṁ, etena saccena suvatthi hotu.'
const V9K = '깊은 지혜로 잘 설해진 성스러운 진리를 환히 아는 이들 —\n비록 크게 방일하더라도 여덟 번째 존재를 받지 않는다. 이것이 상가 안의 뛰어난 보배.\n이 진실에 의해 행복이 있기를.'

const V10 = 'sahāvassa dassanasampadāya, tayassu dhammā jahitā bhavanti.\nsakkāyadiṭṭhi vicikicchitañca, sīlabbataṁ vāpi yadatthi kiñci.\ncatūhapāyehi ca vippamutto, chaccābhiṭhānāni bhabba kātuṁ.\nidampi saṅghe ratanaṁ paṇītaṁ, etena saccena suvatthi hotu.'
const V10K = '통찰을 갖춤과 동시에 세 가지 법이 버려진다 — 유신견, 의심, 계금취.\n또 사악도(四惡道)에서 벗어나고, 여섯 가지 중대한 죄를 범할 수 없다. 이것이 상가 안의 뛰어난 보배.\n이 진실에 의해 행복이 있기를.'

const V11 = 'kiñcāpi so kamma karoti pāpakaṁ, kāyena vācā uda cetasā vā.\nabhabba so tassa paṭicchadāya, abhabbatā diṭṭhapadassa vuttā.\nidampi saṅghe ratanaṁ paṇītaṁ, etena saccena suvatthi hotu.'
const V11K = '몸·말·뜻으로 어떤 악업을 짓는다 해도,\n그는 그것을 숨길 수 없다 — 도(道)를 본 자는 숨김이 없다고 설하셨다. 이것이 상가 안의 뛰어난 보배.\n이 진실에 의해 행복이 있기를.'

const V12 = 'vanappagumbe yatha phussitagge, gimhānamāse paṭhamasmiṁ gimhe.\ntathūpamaṁ dhammavaraṁ adesayi, nibbānagāmiṁ paramaṁ hitāya.\nidampi buddhe ratanaṁ paṇītaṁ, etena saccena suvatthi hotu.'
const V12K = '여름 첫째 달, 숲에서 가지 끝마다 꽃이 만개하듯,\n그처럼 열반으로 이끄는 최고의 이익을 위해 뛰어난 담마를 설하셨다. 이것이 붓다 안의 뛰어난 보배.\n이 진실에 의해 행복이 있기를.'

const V13 = 'varo varaññū varado varāharo, anuttaro dhammavaraṁ adesayi.\nidampi buddhe ratanaṁ paṇītaṁ, etena saccena suvatthi hotu.'
const V13K = '뛰어난 분, 뛰어남을 아는 분, 뛰어남을 주는 분, 뛰어남을 가져오는 분 —\n위없는 분이 뛰어난 담마를 설하셨다. 이것이 붓다 안의 뛰어난 보배. 이 진실에 의해 행복이 있기를.'

const V14 = 'khīṇaṁ purāṇaṁ nava natthi sambhavaṁ, virattacittāyatike bhavasmiṁ.\nte khīṇabījā avirūḷhichandā, nibbanti dhīrā yathāyaṁ padīpo.\nidampi saṅghe ratanaṁ paṇītaṁ, etena saccena suvatthi hotu.'
const V14K = '옛 업은 다하고 새 태어남은 없으며, 마음은 미래의 존재에서 멀어졌다.\n씨앗 다하고 욕구의 싹이 트지 않는 지자들은, 이 등불처럼 적멸한다. 이것이 상가 안의 뛰어난 보배.\n이 진실에 의해 행복이 있기를.'

const V15 = 'yānīdha bhūtāni samāgatāni, bhummāni vā yāni va antalikkhe.\ntathāgataṁ devamanussapūjitaṁ, buddhaṁ namassāma suvatthi hotu.'
const V15K = '이 자리에 모인 존재들, 지상에 있든 허공에 있든 —\n신과 인간이 예경하는 여래, 붓다께 우리는 경배한다. 행복이 있기를.'

const V16 = 'yānīdha bhūtāni samāgatāni, bhummāni vā yāni va antalikkhe.\ntathāgataṁ devamanussapūjitaṁ, dhammaṁ namassāma suvatthi hotu.'
const V16K = '이 자리에 모인 존재들, 지상에 있든 허공에 있든 —\n신과 인간이 예경하는 여래의 담마에 우리는 경배한다. 행복이 있기를.'

const V17 = 'yānīdha bhūtāni samāgatāni, bhummāni vā yāni va antalikkhe.\ntathāgataṁ devamanussapūjitaṁ, saṅghaṁ namassāma suvatthi hotūti.'
const V17K = '이 자리에 모인 존재들, 지상에 있든 허공에 있든 —\n신과 인간이 예경하는 여래의 상가에 우리는 경배한다. 행복이 있기를.'

const V_END = 'ratanasuttaṁ niṭṭhitaṁ.'

export const LESSON_RATANA: StepType[] = [
  { type: 'intro', icon: '💎', title: '보배경', subtitle: 'Ratana Sutta — 삼보의 공덕과 가피',
    description: '베살리의 기근·역병·악귀를 정화하시고자\n붓다께서 설하신 17게송의 진실 서원경.\n"etena saccena suvatthi hotu(이 진실에 의해 행복이 있기를)"의 후렴이 반복.' },

  { type: 'teach', icon: '💎', word: 'ratanaṁ', pronKo: '라따낭', meaning: '보배',
    grammar: '중성명사', buddhism: '삼보(三寶) — 붓다·담마·상가의 비유.', verseLine: V3, verseLineKo: V3K, audio: true },

  { type: 'teach', icon: '⭐', word: 'paṇītaṁ', pronKo: '빠니땅', meaning: '뛰어난, 수승한',
    grammar: '형용사 중성', verseLine: V3, verseLineKo: V3K, audio: true },

  { type: 'teach', icon: '🔮', word: 'etena saccena', pronKo: '에떼나 삿쩨나', meaning: '이 진실에 의해',
    grammar: '대명사+명사 (구격)', buddhism: '진실 서원(saccakiriyā). 진실을 외쳐 가피를 일으키는 정형구.', verseLine: V3, verseLineKo: V3K, audio: true },

  { type: 'teach', icon: '🙏', word: 'suvatthi hotu', pronKo: '수왓티 호뚜', meaning: '행복이 있기를',
    grammar: 'su(잘) + atthi(있음) + hotu(있기를)', buddhism: '경의 후렴구. 모든 보배 게송이 이로 끝남.', verseLine: V3, verseLineKo: V3K, audio: true },

  { type: 'teach-grammar', title: '진실 서원 구조',
    example: 'idampi [buddhe/dhamme/saṅghe] ratanaṁ paṇītaṁ,\netena saccena suvatthi hotu.',
    exampleKo: '이것이 [붓다/담마/상가] 안의 뛰어난 보배,\n이 진실에 의해 행복이 있기를.',
    explanation: '각 게송은 삼보 중 하나의 공덕을 칭찬한 뒤,\n그 진실에 의거해 행복을 기원하는 형식.\n총 12개 게송(3~14)이 이 후렴으로 끝남.' },

  { type: 'verse', pali: V1, pronKo: '야니다 부따니 사마가따니...', translation: V1K,
    highlight: ['bhūtāni', 'samāgatāni', 'sumanā', 'bhavantu'], note: '게송 1 — 모든 존재를 청하여 듣게 함.' },

  { type: 'verse', pali: V2, pronKo: '따스마 히 부따 니사메타...', translation: V2K,
    highlight: ['mettaṁ', 'rakkhatha', 'appamattā'], note: '게송 2 — 인간을 보호하고 자애를 베풀기를 청함.' },

  { type: 'verse', pali: V3, pronKo: '양 낀찌 윗땅 이다 와 후랑 와...', translation: V3K,
    highlight: ['ratanaṁ', 'tathāgatena', 'buddhe', 'suvatthi'], note: '게송 3 — 붓다의 보배 ①.' },

  { type: 'verse', pali: V4, pronKo: '카양 위라강 아마땅 빠니땅...', translation: V4K,
    highlight: ['khayaṁ', 'virāgaṁ', 'amataṁ', 'sakyamunī', 'dhamme'], note: '게송 4 — 담마의 보배 ① (소멸·이욕·불사).' },

  { type: 'verse', pali: V5, pronKo: '양 붓다셋토 빠리완냐이 수찡...', translation: V5K,
    highlight: ['samādhi', 'ānantarikaṁ', 'dhamme'], note: '게송 5 — 담마의 보배 ② (무간 삼매).' },

  { type: 'verse', pali: V6, pronKo: '예 뿍갈라 앗타 사땅 빠삿타...', translation: V6K,
    highlight: ['aṭṭha', 'cattāri yugāni', 'dakkhiṇeyyā', 'saṅghe'], note: '게송 6 — 상가의 보배 ① (사쌍팔배 = 4쌍 8분).' },

  { type: 'verse', pali: V7, pronKo: '예 숩빠윳따 마나사 달헤나...', translation: V7K,
    highlight: ['nikkāmino', 'amataṁ', 'nibbutiṁ', 'saṅghe'], note: '게송 7 — 상가의 보배 ② (욕망을 떠나 불사에 든 자).' },

  { type: 'verse', pali: V8, pronKo: '야틴다킬로 빠타윗시또 시야...', translation: V8K,
    highlight: ['indakhīlo', 'asampakampiyo', 'ariyasaccāni', 'saṅghe'], note: '게송 8 — 상가의 보배 ③ (성제를 본 자는 인다라 기둥처럼 굳건).' },

  { type: 'verse', pali: V9, pronKo: '예 아리야삿짜니 위바와얀띠...', translation: V9K,
    highlight: ['vibhāvayanti', 'gambhīrapaññena', 'aṭṭhamaṁ'], note: '게송 9 — 상가의 보배 ④ (예류자는 7생 안에 해탈, 8번째 생 없음).' },

  { type: 'verse', pali: V10, pronKo: '사하왓사 닷사나삼빠다야...', translation: V10K,
    highlight: ['sakkāyadiṭṭhi', 'vicikicchitaṁ', 'sīlabbataṁ', 'apāyehi'], note: '게송 10 — 예류자의 세 결박(유신견·의심·계금취) 끊김.' },

  { type: 'verse', pali: V11, pronKo: '낀짜삐 소 깜마 까로띠 빠빠깡...', translation: V11K,
    highlight: ['pāpakaṁ', 'paṭicchadāya', 'diṭṭhapadassa'], note: '게송 11 — 도를 본 자는 악행을 숨기지 못함.' },

  { type: 'verse', pali: V12, pronKo: '와납빠굼베 야타 풋시딱게...', translation: V12K,
    highlight: ['nibbānagāmiṁ', 'dhammavaraṁ', 'buddhe'], note: '게송 12 — 붓다의 보배 ② (꽃 핀 숲처럼 담마를 설하심).' },

  { type: 'verse', pali: V13, pronKo: '와로 와란뉴 와라도 와라하로...', translation: V13K,
    highlight: ['varo', 'varaññū', 'varado', 'varāharo', 'buddhe'], note: '게송 13 — 붓다의 보배 ③ (네 가지 뛰어남).' },

  { type: 'verse', pali: V14, pronKo: '키낭 뿌라낭 나와 낫티 삼바왕...', translation: V14K,
    highlight: ['khīṇaṁ', 'khīṇabījā', 'nibbanti', 'padīpo'], note: '게송 14 — 상가의 보배 ⑤ (등불 꺼지듯 적멸).' },

  { type: 'verse', pali: V15, pronKo: '야니다 부따니 사마가따니... 붓당 나맛사마 수왓티 호뚜.',
    translation: V15K, highlight: ['buddhaṁ namassāma', 'suvatthi hotu'], note: '게송 15 — 모든 존재가 붓다께 예경.' },

  { type: 'verse', pali: V16, pronKo: '... 담망 나맛사마 수왓티 호뚜.', translation: V16K,
    highlight: ['dhammaṁ namassāma'], note: '게송 16 — 담마께 예경.' },

  { type: 'verse', pali: V17, pronKo: '... 상강 나맛사마 수왓티 호뚜띠.', translation: V17K,
    highlight: ['saṅghaṁ namassāma'], note: '게송 17 — 상가께 예경.' },

  { type: 'verse', pali: V_END, pronKo: '라따나숫땅 닛티땅.', translation: '보배경이 끝난다.',
    note: '경의 마침.' },

  { type: 'quiz', question: '"ratanaṁ"의 뜻은?',
    options: ['가르침', '보배', '승가', '진실'], answer: 1 },

  { type: 'quiz', question: '후렴구 "etena saccena suvatthi hotu"의 뜻은?',
    options: ['이 진실에 의해 행복이 있기를', '이 법에 의해 고통이 사라지기를', '이 보배에 귀의합니다', '이 진실을 기억합니다'], answer: 0 },

  { type: 'quiz', question: '보배경이 설해진 배경은?',
    options: ['전법륜경 직후', '베살리의 기근·역병·악귀', '자애경과 함께', '아라한들의 모임'], answer: 1 },

  { type: 'quiz', question: '게송 10에서 예류자가 끊는 세 결박은?',
    options: ['유신견·의심·계금취', '탐·진·치', '아만·도거·무명', '욕망·악의·해'], answer: 0 },

  { type: 'speak', pali: 'etena saccena suvatthi hotu.', pronKo: '에떼나 삿쩨나 수왓티 호뚜.' },
  { type: 'speak', pali: V15, pronKo: '... 붓당 나맛사마 수왓티 호뚜.' },

  { type: 'arrange', instruction: '빠알리 후렴구를 순서대로 배열하세요.',
    translation: '이 진실에 의해 행복이 있기를.',
    blocks: ['saccena', 'etena', 'hotu.', 'suvatthi'], correctOrder: [1, 0, 3, 2] },
]
