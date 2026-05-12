// 8과: 자애경(Metta Sutta) — 자애의 마음 수행
// 출처: DOCS/제8과. 자애경.txt
import type { StepType } from './lesson-data-sn56-11'

const V1 = 'karaṇīyamatthakusalena, yanta santaṁ padaṁ abhisamecca.\nsakko ujū ca suhujū ca, sūvaco cassa mudu anatimānī.'
const V1K = '선함에 능한 자, 적정의 경지에 이른 자가 행해야 할 바 —\n유능하고, 정직하며, 매우 정직하고, 유연하며 부드럽고, 교만하지 않다.'

const V2 = 'santussako ca subharo ca, appakicco ca sallahukavutti.\nsantindriyo ca nipako ca, appagabbho kulesvananugiddho.'
const V2K = '만족할 줄 알고 부양하기 쉽고, 일이 적고, 삶이 가볍다.\n감각이 고요하고, 지혜로우며, 거칠지 않고, 가문에 집착하지 않는다.'

const V3 = 'na ca khuddamācare kiñci, yena viññū pare upavadeyyuṁ.\nsukhino va khemino hontu, sabbasattā bhavantu sukhitattā.'
const V3K = '지혜로운 이가 비난할 만한 사소한 행위도 하지 않으니 —\n행복하고 안온하기를! 모든 존재여, 마음으로 행복하기를!'

const V4 = 'ye keci pāṇabhūtatthi, tasā vā thāvarā vanavasesā.\ndīghā vā ye va mahantā, majjhimā rassakā aṇukathūlā.'
const V4K = '어떤 살아 있는 존재든 — 떨거나 머무는 것이든, 남김없이.\n긴 것이든 큰 것이든, 중간이든 작은 것이든, 미세한 것이든 거친 것이든.'

const V5 = 'diṭṭhā vā ye va adiṭṭhā, ye va dūre vasanti avidūre.\nbhūtā va sambhavesī va, sabbasattā bhavantu sukhitattā.'
const V5K = '보이는 것이든 보이지 않는 것이든, 멀리 사는 것이든 가까이 사는 것이든.\n이미 태어난 것이든 태어나려는 것이든, 모든 존재여, 마음으로 행복하기를!'

const V6 = 'na paro paraṁ nikubbetha, nātimaññetha katthaci na kañci.\nbyārosanā paṭighasaññā, nāññamaññassa dukkhamiccheyya.'
const V6K = '서로 속이지 말고, 어디서나 누구도 멸시하지 말라.\n분노로든 적의로든, 서로 고통을 바라지 말라.'

const V7 = 'mātā yathā niyaṁ puttamāyusā ekaputtamanurakkhe.\nevampi sabbabhūtesu, mānasaṁ bhāvaye aparimāṇaṁ.'
const V7K = '어머니가 외아들을 목숨 바쳐 지키듯이,\n그처럼 모든 존재에 대해 한량없는 마음을 닦으라.'

const V8 = 'mettañca sabbalokasmi, mānasaṁ bhāvaye aparimāṇaṁ.\nuddhaṁ adho ca tiriyañca, asambādhaṁ averamasapattaṁ.'
const V8K = '온 세상에 자애의 마음을 한량없이 닦으라 —\n위로, 아래로, 사방으로, 막힘 없이, 원한 없이, 적의 없이.'

const V9 = 'tiṭṭhaṁ caraṁ nisinno va, sayāno yāvatāssa vitamiddho.\netaṁ satiṁ adhiṭṭheyya, brahmametaṁ vihāramidhamāhu.'
const V9K = '서거나, 걷거나, 앉거나, 잠들지 않고 누워 있을 때,\n이 마음챙김을 굳건히 하라 — 이것을 여기서 범주(梵住)라 한다.'

const V10 = 'diṭṭhiñca anupaggamma, sīlavā dassanena sampanno.\nkāmesu vinaya gedhaṁ, na hi jātuggabbhaseyya punaretīti.'
const V10K = '그릇된 견해에 빠지지 않고, 계를 갖추고 통찰을 갖추어,\n감각적 욕망에 대한 탐을 다스리니, 결코 다시 모태에 들지 않는다.'

const V_END = 'mettasuttaṁ niṭṭhitaṁ.'

export const LESSON_METTA: StepType[] = [
  { type: 'intro', icon: '💛', title: '자애경', subtitle: 'Metta Sutta — 자애의 마음 수행',
    description: '숲속 수행자들이 나무 정령의 방해를 받자\n붓다께서 자애(慈愛, Mettā)를 닦는 법을 설하신 경.\n자애명상(자비관)의 가장 중요한 경전 — 10게송.' },

  { type: 'teach', icon: '💛', word: 'mettā', pronKo: '멧따', meaning: '자애, 자비',
    grammar: '여성명사', buddhism: '존재들의 행복을 바라는 마음. 사무량심(慈悲喜捨)의 첫째.', verseLine: V8, verseLineKo: V8K, audio: true },

  { type: 'teach', icon: '🌍', word: 'sabbasattā', pronKo: '삽바삿따', meaning: '모든 존재들',
    grammar: '형용사+명사 (복수 주격)', baseForm: 'sabba(모든) + sattā(존재들)',
    verseLine: V3, verseLineKo: V3K, audio: true },

  { type: 'teach', icon: '🙏', word: 'bhavantu', pronKo: '바완뚜', meaning: '되기를 (기원)',
    grammar: '동사 (원망형 3인칭 복수)', baseForm: '√bhū → bhavati',
    formNote: '원망형 어미 -antu = "~하기를!"',
    verseLine: V3, verseLineKo: V3K, audio: true },

  { type: 'teach', icon: '♾️', word: 'aparimāṇaṁ', pronKo: '아빠리마낭', meaning: '헤아릴 수 없는, 무량(無量)',
    grammar: '형용사 (중성 대격)', baseForm: 'a(부정) + parimāṇa(한정)',
    buddhism: '사무량심의 "무량(無量)" — 한계 없이 모든 존재에 미침.', verseLine: V7, verseLineKo: V7K, audio: true },

  { type: 'teach', icon: '🪷', word: 'brahmavihāra', pronKo: '브라흐마위하라', meaning: '범주(梵住)',
    grammar: '복합어', baseForm: 'brahma(범천) + vihāra(머묾)',
    buddhism: '자(慈)·비(悲)·희(喜)·사(捨) 사무량심의 통칭. 이 경의 핵심 수행.', verseLine: V9, verseLineKo: V9K, audio: true },

  { type: 'teach-grammar', title: '원망형 -antu / -eyya',
    example: 'hontu, bhavantu, bhāvaye, adhiṭṭheyya',
    exampleKo: '되기를! 닦으라! 굳건히 하라!',
    explanation: '자애경은 원망형(Optative)을 많이 씁니다.\n• -antu : 3인칭 복수 "~하기를!"\n• -eyya : 권유·기원 "~해야 한다 / ~하기를"\n자애명상에서 이 문장을 마음속으로 반복합니다.' },

  { type: 'verse', pali: V1, pronKo: '까라니야맛타꾸살레나 얀따 산땅 빠당 아비사멧짜...',
    translation: V1K, highlight: ['karaṇīyamatthakusalena', 'santaṁ padaṁ', 'ujū', 'mudu'],
    note: '게송 1 — 적정에 이른 수행자의 자질 (자애 수행의 전제).' },

  { type: 'verse', pali: V2, pronKo: '산뚯사꼬 짜 수바로 짜 압빠낏쪼 짜...',
    translation: V2K, highlight: ['santussako', 'subharo', 'santindriyo', 'appagabbho'],
    note: '게송 2 — 만족·간소·고요·겸손한 삶의 태도.' },

  { type: 'verse', pali: V3, pronKo: '나 짜 쿳다마짜레 낀찌... 사베 삿따 바완뚜 수키땃따.',
    translation: V3K, highlight: ['sukhino', 'khemino', 'sabbasattā', 'bhavantu', 'sukhitattā'],
    note: '게송 3 — 핵심 후렴: "모든 존재여, 마음으로 행복하기를!"' },

  { type: 'verse', pali: V4, pronKo: '예 께찌 빠나부땃티 따사 와 타와라 와나와세사...',
    translation: V4K, highlight: ['pāṇabhūtatthi', 'tasā', 'thāvarā', 'dīghā', 'mahantā', 'majjhimā', 'rassakā', 'aṇukathūlā'],
    note: '게송 4 — 자애의 대상 분류 ① 떨거나/머무름, 크기.' },

  { type: 'verse', pali: V5, pronKo: '딧타 와 예 와 아딧타 예 와 두레 와산띠 아위두레...',
    translation: V5K, highlight: ['diṭṭhā', 'adiṭṭhā', 'dūre', 'avidūre', 'bhūtā', 'sambhavesī'],
    note: '게송 5 — 자애의 대상 분류 ② 보임/안 보임, 멀고 가까움, 이미 태어남/태어나려 함.' },

  { type: 'verse', pali: V6, pronKo: '나 빠로 빠랑 니꿉베타 나띠만녜타 깟타찌 나 깐찌...',
    translation: V6K, highlight: ['na paro paraṁ', 'nātimaññetha', 'byārosanā', 'paṭighasaññā'],
    note: '게송 6 — 서로 속이지·멸시하지·해치지 말라.' },

  { type: 'verse', pali: V7, pronKo: '마따 야타 니양 뿟따마유사 에까뿟따마누락케...',
    translation: V7K, highlight: ['mātā', 'ekaputtamanurakkhe', 'aparimāṇaṁ'],
    note: '게송 7 — 자애의 강도 비유: 어머니가 외아들을 보호하듯이.' },

  { type: 'verse', pali: V8, pronKo: '멧딴짜 삽발로까스미 마나상 바와예 아빠리마낭...',
    translation: V8K, highlight: ['Mettañca', 'sabbalokasmi', 'aparimāṇaṁ', 'asambādhaṁ', 'averaṁ', 'asapattaṁ'],
    note: '게송 8 — 온 세상, 위·아래·사방으로 한량없는 자애.' },

  { type: 'verse', pali: V9, pronKo: '띳탕 짜랑 니신노 와 사야노 야와땃사 위따밋도...',
    translation: V9K, highlight: ['tiṭṭhaṁ', 'caraṁ', 'nisinno', 'sayāno', 'satiṁ', 'brahmavihāra'],
    note: '게송 9 — 행주좌와 모든 자세에서 자애의 마음챙김을 굳건히 함 = 범주(梵住).' },

  { type: 'verse', pali: V10, pronKo: '딧틴짜 아누빡감마 실라와 닷사네나 삼빤노...',
    translation: V10K, highlight: ['diṭṭhiṁ', 'sīlavā', 'dassanena', 'kāmesu', 'punaretīti'],
    note: '게송 10 — 결론: 자애 수행은 견·계·통찰을 갖추게 하여 윤회를 끊음.' },

  { type: 'verse', pali: V_END, pronKo: '멧따숫땅 닛티땅.', translation: '자애경이 끝난다.',
    highlight: ['mettasuttaṁ'], note: '경의 마침.' },

  { type: 'quiz', question: '"mettā"의 뜻은?',
    options: ['계율', '자애, 자비', '지혜', '삼매'], answer: 1 },

  { type: 'quiz', question: '"sabbasattā bhavantu sukhitattā"의 뜻은?',
    options: ['행복한 마음이 되기를', '행복을 닦아라', '행복을 알아야 한다', '행복이 있다'], answer: 0 },

  { type: 'quiz', question: '게송 7의 어머니 비유는 무엇을 가르치나요?',
    options: ['자애의 강도', '계율 준수', '지혜의 깊이', '집중의 단계'], answer: 0 },

  { type: 'quiz', question: '"brahmavihāra(범주)"는 사무량심을 가리킵니다. 자애경의 핵심은?',
    options: ['자(慈, mettā)', '비(悲, karuṇā)', '희(喜, muditā)', '사(捨, upekkhā)'], answer: 0 },

  { type: 'speak', pali: V3, pronKo: '... 사베 삿따 바완뚜 수키땃따.' },
  { type: 'speak', pali: V8, pronKo: '멧딴짜 삽발로까스미 마나상 바와예 아빠리마낭...' },

  { type: 'arrange', instruction: '빠알리 문장을 순서대로 배열하세요.',
    translation: '모든 존재들이여, 행복한 마음이 되기를!',
    blocks: ['sattā', 'sabba', 'sukhitattā.', 'bhavantu'], correctOrder: [1, 0, 3, 2] },
]
