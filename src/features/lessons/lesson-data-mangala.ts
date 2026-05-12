// 6과: 축복경(Maṅgala Sutta) — 최상의 축복
// 출처: DOCS/제6과. 축복경.txt
import type { StepType } from './lesson-data-sn56-11'

const V_INTRO = 'Evaṁ me sutaṁ — ekaṁ samayaṁ bhagavā sāvatthiyaṁ viharati jetavane anāthapiṇḍikassa ārāme. Atha kho aññatarā devatā abhikkantāya rattiyā abhikkantavaṇṇā kevalakappaṁ jetavanaṁ obhāsetvā yena bhagavā tenupasaṅkami; upasaṅkamitvā bhagavantaṁ abhivādetvā ekamantaṁ aṭṭhāsi. Ekamantaṁ ṭhitā kho sā devatā bhagavantaṁ gāthāya ajjhabhāsi —'
const V_INTROK = '이와 같이 나는 들었다. 어느 때 세존께서 사왓티의 제따와나, 아나타삔디까 동산에 머무셨다. 그때 어떤 천신이 깊은 밤이 지난 시각, 빼어난 광채로 제따와나를 두루 비추고 세존께 다가갔다. 다가가 세존께 예경하고 한쪽에 섰다. 한쪽에 선 그 천신이 세존께 게송으로 여쭈었다 —'

const Q = '"Bahū devā manussā ca, maṅgalāni acintayuṁ.\nĀkaṅkhamānā sotthānaṁ, brūhi maṅgalamuttamaṁ."'
const QK = '"많은 천신과 인간들이 축복을 사유하였습니다.\n안녕을 바라는 그들에게 최상의 축복을 일러주소서."'

const V1 = '"Asevanā ca bālānaṁ, paṇḍitānañca sevanā.\nPūjā ca pūjaneyyānaṁ, etaṁ maṅgalamuttamaṁ."'
const V2 = '"Patirūpadesavāso ca, pubbe ca katapuññatā.\nAttasammāpaṇidhi ca, etaṁ maṅgalamuttamaṁ."'
const V3 = '"Bāhusaccañca sippañca, vinayo ca susikkhito.\nSubhāsitā ca yā vācā, etaṁ maṅgalamuttamaṁ."'
const V4 = '"Mātāpitu upaṭṭhānaṁ, puttadārassa saṅgaho.\nAnākulā ca kammantā, etaṁ maṅgalamuttamaṁ."'
const V5 = '"Dānañca dhammacariyā ca, ñātakānañca saṅgaho.\nAnavajjāni kammāni, etaṁ maṅgalamuttamaṁ."'
const V6 = '"Āratī viratī pāpā, majjapānā ca saṁyamo.\nAppamādo ca dhammesu, etaṁ maṅgalamuttamaṁ."'
const V7 = '"Gāravo ca nivāto ca, santuṭṭhi ca kataññutā.\nKālena dhammassavanaṁ, etaṁ maṅgalamuttamaṁ."'
const V8 = '"Khantī ca sovacassatā, samaṇānañca dassanaṁ.\nKālena dhammasākacchā, etaṁ maṅgalamuttamaṁ."'
const V9 = '"Tapo ca brahmacariyañca, ariyasaccāna dassanaṁ.\nNibbānasacchikiriyā ca, etaṁ maṅgalamuttamaṁ."'
const V10 = '"Phuṭṭhassa lokadhammehi, cittaṁ yassa na kampati.\nAsokaṁ virajaṁ khemaṁ, etaṁ maṅgalamuttamaṁ."'
const V11 = '"Etādisāni katvāna, sabbatthamaparājitā.\nSabbattha sotthiṁ gacchanti, taṁ tesaṁ maṅgalamuttaman"ti.'

const V1K = '"어리석은 자를 가까이하지 않고 지혜로운 자를 가까이함,\n공양받을 만한 분께 공양함 — 이것이 최상의 축복."'
const V2K = '"적합한 곳에 머묾, 전생에 쌓은 공덕,\n자신을 바르게 다잡음 — 이것이 최상의 축복."'
const V3K = '"많이 배움, 기술, 잘 닦인 계율,\n잘 말해진 말 — 이것이 최상의 축복."'
const V4K = '"부모를 봉양함, 처자식을 돌봄,\n혼란 없는 일 — 이것이 최상의 축복."'
const V5K = '"보시와 법답게 살아감, 친족을 돌봄,\n허물없는 행위 — 이것이 최상의 축복."'
const V6K = '"악을 멈추고 떠남, 술 마심을 절제함,\n법에 방일하지 않음 — 이것이 최상의 축복."'
const V7K = '"공경과 겸손, 만족과 은혜를 앎,\n때맞춰 법을 들음 — 이것이 최상의 축복."'
const V8K = '"인욕과 부드러운 말, 사문을 친견함,\n때맞춰 법담을 나눔 — 이것이 최상의 축복."'
const V9K = '"고행과 청정범행, 성스러운 진리의 봄,\n열반의 실현 — 이것이 최상의 축복."'
const V10K = '"세간법에 닿아도 마음이 흔들리지 않음,\n슬픔 없고 티 없고 안온함 — 이것이 최상의 축복."'
const V11K = '"이같이 행하는 이들은 어디서나 패하지 않고,\n어디서나 안녕에 이른다 — 그것이 그들의 최상의 축복이다."'

const V_END = 'Maṅgalasuttaṁ niṭṭhitaṁ.'

export const LESSON_MANGALA: StepType[] = [
  { type: 'intro', icon: '🌸', title: '축복경', subtitle: 'Maṅgala Sutta — 최상의 축복',
    description: '천신이 "최상의 축복이 무엇입니까?"라고 묻자\n붓다께서 11개 게송, 총 38가지 축복을 설하신 경.\n각 게송은 "etaṁ maṅgalamuttamaṁ(이것이 최상의 축복)"으로 끝납니다.' },

  { type: 'verse', pali: V_INTRO, pronKo: '에왕 메 수땅 ... 데와따 바가완땅 가타야 앗자바시 —',
    translation: V_INTROK, highlight: ['Evaṁ me sutaṁ', 'jetavane', 'devatā'],
    note: '서두 — 사왓티 제따와나에서 천신이 세존께 다가옴.' },

  { type: 'teach', icon: '🌸', word: 'maṅgalaṁ', pronKo: '망갈랑', meaning: '축복, 길상(吉祥)',
    grammar: '중성명사', baseForm: 'maṅgala',
    buddhism: '재가·출가 모두에게 최상의 안녕을 가져오는 행위.', verseLine: V1, verseLineKo: V1K, audio: true },

  { type: 'teach', icon: '🏆', word: 'uttamaṁ', pronKo: '웃따망', meaning: '최상의',
    grammar: '형용사 (중성)', baseForm: 'uttama',
    verseLine: V1, verseLineKo: V1K, audio: true },

  { type: 'teach', icon: '👉', word: 'etaṁ', pronKo: '에땅', meaning: '이것이',
    grammar: '지시대명사 (중성 주격)', baseForm: 'eta',
    formNote: '"etaṁ maṅgalamuttamaṁ" = "이것이 최상의 축복이다" — 모든 게송 후렴.',
    verseLine: V1, verseLineKo: V1K, audio: true },

  { type: 'teach-grammar', title: '축복경 게송 구조',
    example: '[축복 1], [축복 2];\n[축복 3] — etaṁ maṅgalamuttamaṁ.',
    exampleKo: '[축복항목들] — 이것이 최상의 축복이다',
    explanation: '각 게송이 2-3가지 축복을 나열한 뒤 후렴구로 마무리.\n총 11게송 × 평균 3-4 항목 ≈ 38가지 축복.' },

  { type: 'verse', pali: Q, pronKo: '바후 데와 마눗사 짜...', translation: QK,
    highlight: ['maṅgalaṁ', 'maṅgalamuttamaṁ'], note: '천신의 질문 — "최상의 축복을 일러 주소서."' },

  { type: 'verse', pali: V1, pronKo: '아세와나 짜 발라낭, 빤디따난짜 세와나...', translation: V1K,
    highlight: ['Asevanā', 'paṇḍitānañca', 'Pūjā'], note: '게송 1 — 현자 친근, 공양.' },

  { type: 'verse', pali: V2, pronKo: '빠띠루빠데사와소...', translation: V2K,
    highlight: ['Patirūpadesavāso', 'katapuññatā', 'Attasammāpaṇidhi'], note: '게송 2 — 적합한 거처, 전생 공덕, 자기 다잡음.' },

  { type: 'verse', pali: V3, pronKo: '바후삿짠짜 십빤짜...', translation: V3K,
    highlight: ['Bāhusaccañca', 'sippañca', 'vinayo', 'subhāsitā'], note: '게송 3 — 다문·기술·계율·선언.' },

  { type: 'verse', pali: V4, pronKo: '마따삐뚜 우빳타낭...', translation: V4K,
    highlight: ['Mātāpitu upaṭṭhānaṁ', 'puttadārassa', 'kammantā'], note: '게송 4 — 부모 봉양, 가족 돌봄, 정업.' },

  { type: 'verse', pali: V5, pronKo: '다난짜 담마짜리야 짜...', translation: V5K,
    highlight: ['Dānañca', 'dhammacariyā', 'ñātakānañca', 'anavajjāni'], note: '게송 5 — 보시·법답게 삶·친족 돌봄·허물없는 행위.' },

  { type: 'verse', pali: V6, pronKo: '아라띠 위라띠 빠빠...', translation: V6K,
    highlight: ['Āratī', 'viratī pāpā', 'majjapānā', 'Appamādo'], note: '게송 6 — 악을 멈춤, 음주 절제, 법에 방일치 않음.' },

  { type: 'verse', pali: V7, pronKo: '가라오 짜 니와또 짜...', translation: V7K,
    highlight: ['Gāravo', 'nivāto', 'santuṭṭhi', 'kataññutā', 'dhammassavanaṁ'], note: '게송 7 — 공경·겸손·만족·은혜·법문 청취.' },

  { type: 'verse', pali: V8, pronKo: '칸띠 짜 소와짯사따...', translation: V8K,
    highlight: ['Khantī', 'sovacassatā', 'samaṇānañca dassanaṁ', 'dhammasākacchā'], note: '게송 8 — 인욕·유연한 말·사문 친견·법담.' },

  { type: 'verse', pali: V9, pronKo: '따뽀 짜 브라흐마짜리얀짜...', translation: V9K,
    highlight: ['Tapo', 'brahmacariyañca', 'ariyasaccāna', 'Nibbānasacchikiriyā'], note: '게송 9 — 고행·청정범행·성제 친견·열반 실현.' },

  { type: 'verse', pali: V10, pronKo: '풋탓사 로까담메히...', translation: V10K,
    highlight: ['lokadhammehi', 'na kampati', 'Asokaṁ', 'virajaṁ', 'khemaṁ'], note: '게송 10 — 팔세풍에도 흔들리지 않는 마음.' },

  { type: 'verse', pali: V11, pronKo: '에따디사니 까뜨와나...', translation: V11K,
    highlight: ['sabbatthamaparājitā', 'sotthiṁ', 'maṅgalamuttamaṁ'], note: '게송 11 — 결론. 이같이 행하는 이는 어디서나 안녕에 이름.' },

  { type: 'verse', pali: V_END, pronKo: '망갈라숫땅 닛티땅.', translation: '축복경이 끝난다.',
    highlight: ['Maṅgalasuttaṁ'], note: '경의 마침 표현.' },

  { type: 'quiz', question: '"maṅgalaṁ"의 뜻은?',
    options: ['고통', '축복, 길상', '계율', '지혜'], answer: 1 },

  { type: 'quiz', question: '"etaṁ maṅgalamuttamaṁ"의 뜻은?',
    options: ['이것이 최상의 축복이다', '이것이 법이다', '이것이 계율이다', '이것이 귀의처이다'], answer: 0 },

  { type: 'quiz', question: '게송 4의 핵심 가르침은?',
    options: ['부모 봉양·가족 돌봄', '많이 배움', '술 절제', '인욕'], answer: 0 },

  { type: 'quiz', question: '게송 10의 핵심은?',
    options: ['세간법에 흔들리지 않는 마음', '보시', '계율', '명상'], answer: 0 },

  { type: 'speak', pali: V1, pronKo: '아세와나 짜 발라낭...' },
  { type: 'speak', pali: V11, pronKo: '에따디사니 까뜨와나...' },

  { type: 'arrange', instruction: '빠알리 후렴구를 순서대로 배열하세요.',
    translation: '이것이 최상의 축복이다.',
    blocks: ['maṅgalamuttamaṁ.', 'etaṁ'], correctOrder: [1, 0] },
]
