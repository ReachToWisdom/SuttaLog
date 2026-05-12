// 3과: 팔정도 분별경(SN 45.8) 학습 데이터
import type { StepType } from './lesson-data-sn56-11'

const V1 = '"Ariyaṃ vo, bhikkhave, aṭṭhaṅgikaṃ maggaṃ desessāmi vibhajissāmi."'
const V1K = '"비구들이여, 나는 그대들에게 성스러운 팔정도를 설하고 분석하겠다."'
const V2 = '"Katamo ca, bhikkhave, ariyo aṭṭhaṅgiko maggo?"'
const V2K = '"비구들이여, 성스러운 팔정도란 무엇인가?"'
const V3 = 'Yaṃ kho, bhikkhave, dukkhe ñāṇaṃ, dukkhasamudaye ñāṇaṃ, dukkhanirodhe ñāṇaṃ, dukkhanirodhagāminiyā paṭipadāya ñāṇaṃ—ayaṃ vuccati sammādiṭṭhi.'
const V3K = '비구들이여, 괴로움에 대한 앎, 괴로움의 원인에 대한 앎, 괴로움의 소멸에 대한 앎, 괴로움의 소멸로 이끄는 길에 대한 앎—이것이 바른 견해이다.'
const V4 = 'Yo kho, bhikkhave, nekkhammasaṅkappo, abyāpādasaṅkappo, avihiṃsāsaṅkappo—ayaṃ vuccati sammāsaṅkappo.'
const V4K = '비구들이여, 출리의 사유, 선의의 사유, 불해의 사유—이것이 바른 사유이다.'

export const LESSON_SN45_8: StepType[] = [
  { type: 'intro', icon: '☸️', title: '팔정도 분별경', subtitle: 'Vibhaṅga Sutta (SN 45.8)',
    description: '팔정도 각 항목의 정의를 상세히 설명하는 경전.\n\n1과에서 배운 팔정도를\n하나하나 분석합니다.' },

  // ===== 1문장: 설법 선언 =====
  { type: 'teach', icon: '📢', word: 'desessāmi', pronKo: '데셋사~미', meaning: '나는 설하겠다',
    grammar: '동사, 미래 1인칭 단수', baseForm: '√dis (설하다, 가르치다)',
    formNote: '√dis → deseti(현재) → desessāmi(미래)\n-ssāmi = 미래 1인칭 어미 "나는 ~할 것이다"\n💡 1과의 āmantesi(과거)와 비교: 과거/현재/미래',
    verseLine: V1, verseLineKo: V1K, audio: true },

  { type: 'teach', icon: '🔬', word: 'vibhajissāmi', pronKo: '위바지싸~미', meaning: '나는 분석하겠다',
    grammar: '동사, 미래 1인칭 단수', baseForm: 'vi(분리) + √bhaj(나누다)',
    formNote: 'vibhajati(현재) → vibhajissāmi(미래)\n-issāmi = 미래 어미. 같은 문장에 미래형 2개!',
    buddhism: '분별(分別). 경전 제목 vibhaṅga도 같은 어근.', verseLine: V1, verseLineKo: V1K, audio: true },

  { type: 'teach-grammar', title: '미래시제 -ssāmi / -issāmi',
    example: 'deseti → desessāmi\nvibhajati → vibhajissāmi',
    exampleKo: '설하다 → 설하겠다\n분석하다 → 분석하겠다',
    explanation: '미래 1인칭 단수 어미:\n• -ssāmi (모음 뒤)\n• -issāmi (자음 뒤)\n\n1과 비교:\n• āmantesi = 과거 "말씀하셨다"\n• desessāmi = 미래 "설하겠다"' },

  { type: 'verse', pali: V1, pronKo: '"아리양 워, 빅카웨, 앗탕기깡 맥강 데셋사~미 위바지싸~미."',
    translation: V1K, highlight: ['ariyaṃ','aṭṭhaṅgikaṃ','maggaṃ','desessāmi','vibhajissāmi'],
    note: '📐 미래시제! 붓다가 "나는 ~하겠다"라고 선언합니다.' },

  { type: 'quiz', question: '"desessāmi"의 시제는?', options: ['과거', '현재', '미래', '명령'], answer: 2 },

  // ===== 2문장: 질문 정형구 =====
  { type: 'teach', icon: '❓', word: 'katamo', pronKo: '까따모', meaning: '어떤 것인가?',
    grammar: '의문 대명사, 남성 주격 단수', baseForm: 'katama (어떤)',
    formNote: 'katamo(남성) / katamā(여성) / katamaṃ(중성)\n성(性)에 따라 변화. 경전에서 매우 자주 나옴.',
    verseLine: V2, verseLineKo: V2K, audio: true },

  { type: 'verse', pali: V2, pronKo: '"까따모 짜, 빅카웨, 아리요 앗탕기꼬 막고?"',
    translation: V2K, highlight: ['katamo','ariyo','aṭṭhaṅgiko','maggo'],
    note: '💡 1과에서 배운 ariyo aṭṭhaṅgiko maggo(팔정도)가 다시 나옵니다!' },

  // ===== 3문장: 정견의 정의 =====
  { type: 'teach', icon: '🧠', word: 'ñāṇaṃ', pronKo: '냐~낭', meaning: '앎, 지혜',
    grammar: '중성명사, 주격 단수', baseForm: 'ñāṇa (앎)',
    formNote: '√ñā(알다) + ṇa = 앎\n💡 paññā(지혜)도 같은 어근!',
    buddhism: '지(智). 직접적이고 통찰적인 앎. 단순 지식이 아닌 체득적 지혜.',
    verseLine: V3, verseLineKo: V3K, audio: true },

  { type: 'teach', icon: '🔥', word: 'dukkhasamudaye', pronKo: '둑카사무다예', meaning: '괴로움의 원인에',
    grammar: '남성명사, 처격 단수', baseForm: 'dukkhasamudaya',
    formNote: 'dukkha(괴로움) + samudaya(원인, 일어남)\n합성어 + 처격 -e = "~에 대한"',
    buddhism: '집(集). 사성제 둘째. 괴로움의 원인 = 갈애(taṇhā).', verseLine: V3, verseLineKo: V3K, audio: true },

  { type: 'teach', icon: '🕊️', word: 'dukkhanirodhe', pronKo: '둑카니로데', meaning: '괴로움의 소멸에',
    grammar: '남성명사, 처격 단수', baseForm: 'dukkhanirodha',
    formNote: 'dukkha(괴로움) + nirodha(소멸)\n합성어 + 처격 -e',
    buddhism: '멸(滅). 사성제 셋째. 괴로움의 소멸 = 열반(nibbāna).', verseLine: V3, verseLineKo: V3K, audio: true },

  { type: 'teach', icon: '🏷️', word: 'vuccati', pronKo: '웃짜띠', meaning: '~라고 불린다',
    grammar: '동사, 수동 현재 3인칭', baseForm: '√vac (말하다)',
    formNote: '√vac(말하다)의 수동형.\n"ayaṃ vuccati sammādiṭṭhi" = "이것이 정견이라 불린다"',
    verseLine: V3, verseLineKo: V3K, audio: true },

  { type: 'verse', pali: V3, pronKo: '..둑케 냐~낭, 둑카사무다예 냐~낭, 둑카니로데 냐~낭..아양 웃짜띠 삼마~딧티.',
    translation: V3K, highlight: ['ñāṇaṃ','dukkhasamudaye','dukkhanirodhe','vuccati','sammādiṭṭhi'],
    note: '☸️ 정견(正見) = 사성제(고·집·멸·도)에 대한 앎!' },

  { type: 'quiz', question: '정견(sammādiṭṭhi)이란?', options: ['사성제에 대한 앎', '좋은 행동', '깊은 명상', '많은 독경'], answer: 0 },

  // ===== 4문장: 정사유의 정의 =====
  { type: 'teach', icon: '🕊️', word: 'nekkhammasaṅkappo', pronKo: '넥캄마상깝뽀', meaning: '출리의 사유',
    grammar: '남성명사, 주격 단수', baseForm: 'nekkhamma(출리) + saṅkappa(사유)',
    formNote: '합성어: nekkhamma(감각적 쾌락에서 벗어남) + saṅkappa(의도, 사유)',
    buddhism: '출리(出離). 감각적 쾌락에 대한 집착에서 벗어나는 것.', verseLine: V4, verseLineKo: V4K, audio: true },

  { type: 'teach', icon: '💚', word: 'abyāpādasaṅkappo', pronKo: '아뱌~빠~다상깝뽀', meaning: '선의의 사유',
    grammar: '남성명사, 주격', baseForm: 'a(부정) + byāpāda(악의) + saṅkappa',
    formNote: 'a-(부정) + byāpāda(악의) = 악의 없음, 선의\n2과에서 배운 an-attā처럼 부정 접두사!',
    buddhism: '무진(無瞋). 악의 없음, 자애. 모든 존재에 대한 선의.', verseLine: V4, verseLineKo: V4K, audio: true },

  { type: 'teach', icon: '🤲', word: 'avihiṃsāsaṅkappo', pronKo: '아위힝사~상깝뽀', meaning: '불해의 사유',
    grammar: '남성명사, 주격', baseForm: 'a + vihiṃsā(해침) + saṅkappa',
    formNote: 'a-(부정) + vihiṃsā(해침, 폭력) = 해치지 않음\n간디의 "아힘사(ahiṃsā)" 원칙과 같은 어근!',
    buddhism: '불해(不害). 비폭력. 연민. 모든 생명을 해치지 않는 것.', verseLine: V4, verseLineKo: V4K, audio: true },

  { type: 'verse', pali: V4, pronKo: '..넥캄마상깝뽀, 아뱌~빠~다상깝뽀, 아위힝사~상깝뽀—아양 웃짜띠 삼마~상깝뽀.',
    translation: V4K, highlight: ['nekkhammasaṅkappo','abyāpādasaṅkappo','avihiṃsāsaṅkappo','sammāsaṅkappo'],
    note: '☸️ 정사유(正思惟) = 출리·선의·불해의 세 가지 올바른 의도' },

  { type: 'quiz', question: '정사유(sammāsaṅkappo)의 세 요소는?', options: ['출리·선의·불해', '계·정·혜', '고·집·멸', '신·구·의'], answer: 0 },
  { type: 'quiz', question: '"a-byāpāda"에서 a-는?', options: ['크다', '부정(~없는)', '함께', '완전히'], answer: 1, hint: '2과 an-attā와 같은 패턴' },

  { type: 'writing', instruction: '"앎, 지혜"를 빠알리어로 써보세요', meaning: '앎, 지혜', pronKo: '냐~낭', answer: 'ñāṇaṃ', hint: 'ñ로 시작' },

  { type: 'speak', pali: 'sammādiṭṭhi sammāsaṅkappo sammāvācā sammākammanto',
    pronKo: '삼마~딧티 삼마~상깝뽀 삼마~와~짜~ 삼마~깜만또' },

  { type: 'quiz', question: '이 경전에서 새로 배운 시제는?', options: ['과거', '현재', '미래', '명령'], answer: 2, hint: 'desessāmi = 나는 ~하겠다' },
]
