// 3과: 오계(pañcasīla) — 다섯 가지 수행 규칙
// 출처: DOCS/제3과. 오계.txt
import type { StepType } from './lesson-data-sn56-11'

const V1 = 'Pāṇātipātā veramaṇīsikkhāpadaṁ samādiyāmi.'
const V2 = 'Adinnādānā veramaṇīsikkhāpadaṁ samādiyāmi.'
const V3 = 'Kāmesu micchācārā veramaṇīsikkhāpadaṁ samādiyāmi.'
const V4 = 'Musāvādā veramaṇīsikkhāpadaṁ samādiyāmi.'
const V5 = 'Surāmerayamajjapamādaṭṭhānā veramaṇīsikkhāpadaṁ samādiyāmi.'

const V1Ko = '빠나띠빠따 웨라마니식카빠당 사마디야미.'
const V2Ko = '아딘나다나 웨라마니식카빠당 사마디야미.'
const V3Ko = '까메수 밋차짜라 웨라마니식카빠당 사마디야미.'
const V4Ko = '무사와다 웨라마니식카빠당 사마디야미.'
const V5Ko = '수라메라야맛자빠마닷타나 웨라마니식카빠당 사마디야미.'

const V1K = '살아있는 생명을 죽이는 것으로부터 삼가는 학습계율을 받들겠습니다.'
const V2K = '주지 않은 것을 취하는 것으로부터 삼가는 학습계율을 받들겠습니다.'
const V3K = '감각적 쾌락에서 삿된 행위를 하는 것으로부터 삼가는 학습계율을 받들겠습니다.'
const V4K = '거짓말로부터 삼가는 학습계율을 받들겠습니다.'
const V5K = '방일의 원인이 되는 술과 곡주·과실주로부터 삼가는 학습계율을 받들겠습니다.'

const V_FULL = V1 + '\n' + V2 + '\n' + V3 + '\n' + V4 + '\n' + V5
const V_FULLK = V1K + '\n' + V2K + '\n' + V3K + '\n' + V4K + '\n' + V5K

export const LESSON_PANCASILA: StepType[] = [
  { type: 'intro', icon: '📿', title: '오계', subtitle: 'pañcasīla — 다섯 가지 수행 규칙',
    description: '재가 불자의 기본 수행 규칙 다섯 가지.\n불살생·불투도·불사음·불망어·불음주.\n계(Sīla)는 삼학(계·정·혜)의 기초입니다.' },

  { type: 'teach', icon: '🚫', word: 'veramaṇī', pronKo: '웨라마니', meaning: '삼가는 것, 절제',
    grammar: '명사 (여성 단수)', baseForm: 'veramaṇī (삼감)',
    formNote: 'vi(분리) + √ram(머무름) → "멀어져 머묾"',
    buddhism: '계의 핵심 의미. 행위로부터 거리를 두는 것.', verseLine: V1, verseLineKo: V1K, audio: true },

  { type: 'teach', icon: '📜', word: 'sikkhāpadaṁ', pronKo: '식카빠당', meaning: '학습계율',
    grammar: '명사 (중성 단수 대격)', baseForm: 'sikkhāpada',
    formNote: 'sikkhā(배움) + pada(단계, 항목) = 배움의 항목 = 계',
    buddhism: '계율의 한 조항. 단순 금지가 아니라 "수행할 항목".', verseLine: V1, verseLineKo: V1K, audio: true },

  { type: 'teach', icon: '🤲', word: 'samādiyāmi', pronKo: '사마디야미', meaning: '받들겠습니다, 수지합니다',
    grammar: '동사 (현재 1인칭 단수)', baseForm: 'saṁ(완전히) + √dā(주다, 받다)',
    formNote: '"스스로 받아 지킨다"는 능동적 결의 표현.', verseLine: V1, verseLineKo: V1K, audio: true },

  { type: 'teach', icon: '🐾', word: 'Pāṇātipātā', pronKo: '빠나띠빠따', meaning: '살생으로부터',
    grammar: '복합어 (탈격)', baseForm: 'pāṇa(생명) + atipāta(살해)',
    formNote: '탈격 -ā = "~으로부터"\npāṇa(목숨) + ati(넘어) + pāta(떨어뜨림) = 생명을 끊음',
    buddhism: '불살생(不殺生). 살아있는 모든 존재를 죽이지 않음.', verseLine: V1, verseLineKo: V1K, audio: true },

  { type: 'teach', icon: '🤚', word: 'Adinnādānā', pronKo: '아딘나다나', meaning: '주지 않은 것을 취함으로부터',
    grammar: '복합어 (탈격)', baseForm: 'a(부정) + dinna(주어진) + ādāna(취함)',
    formNote: 'a-dinna(주어지지 않은) + ādāna(가져감) = 도둑질',
    buddhism: '불투도(不偸盜). 도둑질하지 않음.', verseLine: V2, verseLineKo: V2K, audio: true },

  { type: 'teach', icon: '⚖️', word: 'micchācārā', pronKo: '밋차짜라', meaning: '삿된 행위로부터',
    grammar: '명사 (탈격)', baseForm: 'micchā(잘못된) + cāra(행위)',
    formNote: '"Kāmesu micchācārā" = 감각적 쾌락(욕망)에서의 잘못된 행위로부터',
    buddhism: '불사음(不邪淫). 부정한 성행위를 하지 않음.', verseLine: V3, verseLineKo: V3K, audio: true },

  { type: 'teach', icon: '🗣️', word: 'Musāvādā', pronKo: '무사와다', meaning: '거짓말로부터',
    grammar: '명사 (탈격)', baseForm: 'musā(거짓) + vāda(말)',
    formNote: '탈격 -ā\nmusā = 거짓 / vāda = 말, 진술',
    buddhism: '불망어(不妄語). 거짓말하지 않음.', verseLine: V4, verseLineKo: V4K, audio: true },

  { type: 'teach', icon: '🍷', word: 'Surāmerayamajjapamādaṭṭhānā', pronKo: '수라메라야맛자빠마닷타나', meaning: '방일을 일으키는 술로부터',
    grammar: '복합어 (탈격)', baseForm: 'surā(증류주)+meraya(발효주)+majja(취하게 함)+pamādaṭṭhāna(방일처)',
    formNote: '술·곡주·과실주 등 모든 취하게 하는 것이\n방일(pamāda, 게으름)의 토대(ṭhāna)가 됨.',
    buddhism: '불음주(不飮酒). 마음챙김을 흐리는 일체의 음료를 마시지 않음.', verseLine: V5, verseLineKo: V5K, audio: true },

  { type: 'teach-grammar', title: '오계의 구조',
    example: '[금지 행위-탈격] + veramaṇīsikkhāpadaṁ + samādiyāmi',
    exampleKo: '[~으로부터] 삼가는 학습계율을 받들겠습니다',
    explanation: '• 탈격(-ā) = "~으로부터"\n• veramaṇī = 삼가는 것\n• sikkhāpadaṁ = 학습계율\n• samādiyāmi = 받들겠습니다(1인칭)\n\n각 계마다 [금지 대상]만 바뀌고 나머지는 동일.' },

  { type: 'verse', pali: V1, pronKo: V1Ko, translation: V1K,
    highlight: ['Pāṇātipātā'], note: '제1계 — 불살생.' },
  { type: 'verse', pali: V2, pronKo: V2Ko, translation: V2K,
    highlight: ['Adinnādānā'], note: '제2계 — 불투도.' },
  { type: 'verse', pali: V3, pronKo: V3Ko, translation: V3K,
    highlight: ['Kāmesu', 'micchācārā'], note: '제3계 — 불사음.' },
  { type: 'verse', pali: V4, pronKo: V4Ko, translation: V4K,
    highlight: ['Musāvādā'], note: '제4계 — 불망어.' },
  { type: 'verse', pali: V5, pronKo: V5Ko, translation: V5K,
    highlight: ['Surāmerayamajjapamādaṭṭhānā'], note: '제5계 — 불음주.' },

  { type: 'verse', pali: V_FULL, pronKo: V1Ko + ' ...', translation: V_FULLK,
    highlight: ['veramaṇīsikkhāpadaṁ samādiyāmi'], note: '📿 오계 전체 독송.' },

  { type: 'quiz', question: '"sikkhāpadaṁ"의 뜻은?',
    options: ['귀의처', '학습계율', '법', '삼매'], answer: 1 },

  { type: 'quiz', question: '"veramaṇī"는 어떤 의미인가요?',
    options: ['닦음', '삼가는 것, 절제', '받들겠습니다', '마음'], answer: 1 },

  { type: 'quiz', question: '4번째 계는 무엇을 금지하나요?',
    options: ['살생', '음주', '거짓말', '도둑질'], answer: 2 },

  { type: 'quiz', question: '5번째 계가 금지하는 것은?',
    options: ['도둑질', '거짓말', '취하게 하는 음료', '삿된 행위'], answer: 2 },

  { type: 'writing', instruction: '"받들겠습니다"를 빠알리어로 써보세요',
    meaning: '받들겠습니다 (1인칭)', pronKo: '사마디야미', answer: 'samādiyāmi', hint: 's로 시작' },

  { type: 'speak', pali: V1, pronKo: V1Ko },
  { type: 'speak', pali: V4, pronKo: V4Ko },

  { type: 'arrange', instruction: '빠알리 문장을 순서대로 배열하세요.',
    translation: V4K, blocks: ['veramaṇīsikkhāpadaṁ', 'Musāvādā', 'samādiyāmi.'], correctOrder: [1, 0, 2] },
]
