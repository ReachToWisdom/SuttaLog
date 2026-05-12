// 2과: 무아경(SN 22.59) 학습 데이터
import type { StepType } from './lesson-data-sn56-11'

const V1 = 'Ekaṃ samayaṃ bhagavā bārāṇasiyaṃ viharati isipatane migadāye.'
const V1K = '한 때 세존께서 바라나시의 녹야원, 이시빠따나에 머무셨다.'
const V2 = '"Rūpaṃ, bhikkhave, anattā."'
const V2K = '"비구들이여, 물질(색)은 무아이다."'
const V3 = 'Rūpañca hidaṃ, bhikkhave, attā abhavissa, nayidaṃ rūpaṃ ābādhāya saṃvatteyya.'
const V3K = '비구들이여, 만약 물질이 자아라면, 물질이 병고로 이끌지 않을 것이다.'
const V4 = '"Vedanā anattā. Saññā anattā. Saṅkhārā anattā. Viññāṇaṃ anattā."'
const V4K = '"느낌도 무아, 인식도 무아, 의지작용도 무아, 의식도 무아이다."'

export const LESSON_SN22_59: StepType[] = [
  { type: 'intro', icon: '🔍', title: '무아경', subtitle: 'Anattalakkhaṇa Sutta (SN 22.59)',
    description: '붓다의 두 번째 설법.\n오온(五蘊)에 자아가 없음을 설하여\n다섯 비구가 아라한이 된 경전.\n\n전법륜경에서 배운 단어가 다시 나옵니다.' },

  // ===== 1문장: 서두 (1과 복습) =====
  { type: 'verse', pali: V1, pronKo: '에깡 사마양 바가와~ 바~라~나시양 위하라띠 이시빠따네 미가다~예.',
    translation: V1K, highlight: ['ekaṃ','samayaṃ','bhagavā','viharati'],
    note: '💡 1과에서 배운 정형구! 같은 장소, 같은 서두입니다.' },

  // ===== 2문장: 핵심 — 색은 무아 =====
  { type: 'teach', icon: '🎨', word: 'rūpaṃ', pronKo: '루~빵', meaning: '물질, 색(色)',
    grammar: '중성명사, 주격 단수', baseForm: 'rūpa (물질, 형태)',
    formNote: 'rūpa → rūpaṃ: 중성 -a 어간 주격 -ṃ\n1과에서 배운 dukkhaṃ과 같은 패턴!',
    buddhism: '색(色). 오온(五蘊)의 첫째. 물질적 형태, 몸을 포함한 모든 물질.', verseLine: V2, verseLineKo: V2K, audio: true },

  { type: 'teach', icon: '🚫', word: 'anattā', pronKo: '아낫따~', meaning: '무아, 자아가 아닌',
    grammar: '형용사, 주격', baseForm: 'an(아닌) + attā(자아)',
    formNote: 'an-(부정 접두사) + attā(자아) = 자아가 아닌\n💡 na(~않다)와 같은 부정이지만 합성어 형태',
    buddhism: '무아(無我). 삼법인의 셋째. "어디에도 영원한 나는 없다". 불교의 가장 독특한 교리.',
    verseLine: V2, verseLineKo: V2K, audio: true },

  { type: 'teach', icon: '👤', word: 'attā', pronKo: '앗따~', meaning: '자아, 나',
    grammar: '남성명사, 주격', baseForm: 'attā (자아)',
    formNote: '산스크리트 ātman(아뜨만)에 해당.\n힌두교에서는 영원한 실체, 붓다는 이를 부정.',
    buddhism: '아(我). 영원한 자아. 우빠니샤드에서 말하는 "참나". 붓다는 이런 실체적 자아를 부정함.',
    verseLine: V3, verseLineKo: V3K, audio: true },

  { type: 'quiz', question: '"rūpaṃ anattā"의 뜻은?', options: ['물질은 무아이다', '물질은 괴로움이다', '물질은 무상하다', '물질은 행복이다'], answer: 0 },

  { type: 'verse', pali: V2, pronKo: '"루~빵, 빅카웨, 아낫따~."',
    translation: V2K, highlight: ['rūpaṃ','anattā'],
    note: '☸️ 불교의 핵심! "물질은 자아가 아니다"' },

  // ===== 3문장: 논증 =====
  { type: 'teach', icon: '🤒', word: 'ābādhāya', pronKo: '아~바~다~야', meaning: '병고를 위해, 고통으로',
    grammar: '남성명사, 여격(4격)', baseForm: 'ābādha (병고, 고통)',
    formNote: 'ābādha → ābādhāya: -a 어간 여격 -āya = "~을 위해"',
    buddhism: '만약 몸이 "나"라면, 내가 원하는 대로 통제할 수 있어야 함. 그러나 병들고 늙는 것을 막을 수 없음 → 무아의 증거.',
    verseLine: V3, verseLineKo: V3K, audio: true },

  { type: 'quiz', question: '무아(anattā)의 논증: "만약 물질이 자아라면..."', options: ['병들지 않을 것이다 (통제 가능)', '영원할 것이다', '행복할 것이다', '보이지 않을 것이다'], answer: 0, hint: '자아라면 통제 가능해야' },

  // ===== 4문장: 오온 전체 =====
  { type: 'teach', icon: '💭', word: 'vedanā', pronKo: '웨다나~', meaning: '느낌, 수(受)',
    grammar: '여성명사, 주격', baseForm: 'vedanā (느낌)',
    formNote: '√vid(알다)에서 유래. "경험하는 것"',
    buddhism: '수(受). 오온 둘째. 쾌·불쾌·중립의 느낌. 감정이 아닌 기본 감수작용.', verseLine: V4, verseLineKo: V4K, audio: true },

  { type: 'teach', icon: '🏷️', word: 'saññā', pronKo: '산냐~', meaning: '인식, 상(想)',
    grammar: '여성명사, 주격', baseForm: 'saññā (인식)',
    formNote: 'saṃ(함께) + √ñā(알다) = 구별하여 앎',
    buddhism: '상(想). 오온 셋째. 대상을 인지하고 구별하는 작용. "이것은 빨강이다" 같은 인식.', verseLine: V4, verseLineKo: V4K, audio: true },

  { type: 'teach', icon: '⚡', word: 'saṅkhārā', pronKo: '상카~라~', meaning: '의지작용, 행(行)',
    grammar: '남성명사, 주격 복수', baseForm: 'saṅkhāra (형성, 의지)',
    formNote: 'saṃ(함께) + √kar(만들다) = 함께 만드는 것\n복수형 -ā (주격)',
    buddhism: '행(行). 오온 넷째. 의도적 정신활동. 업(kamma)을 짓는 의지작용.', verseLine: V4, verseLineKo: V4K, audio: true },

  { type: 'teach', icon: '👁️', word: 'viññāṇaṃ', pronKo: '윈냐~낭', meaning: '의식, 식(識)',
    grammar: '중성명사, 주격 단수', baseForm: 'viññāṇa (의식)',
    formNote: 'vi(분별) + √ñā(알다) + ṇa = 분별하여 아는 것\n중성 주격 -ṃ',
    buddhism: '식(識). 오온 다섯째. 대상을 아는 기본 인식작용. 눈의식, 귀의식 등 6가지.', verseLine: V4, verseLineKo: V4K, audio: true },

  { type: 'verse', pali: V4, pronKo: '"웨다나~ 아낫따~. 산냐~ 아낫따~. 상카~라~ 아낫따~. 윈냐~낭 아낫따~."',
    translation: V4K, highlight: ['vedanā','saññā','saṅkhārā','viññāṇaṃ','anattā'],
    note: '☸️ 오온(五蘊) 모두 무아! 색(물질)·수(느낌)·상(인식)·행(의지)·식(의식)' },

  { type: 'quiz', question: '오온(五蘊)의 순서는?', options: ['색·수·상·행·식', '색·행·수·식·상', '식·행·상·수·색', '수·색·상·식·행'], answer: 0 },
  { type: 'quiz', question: '"saṅkhārā"의 뜻은?', options: ['느낌', '인식', '의지작용(행)', '의식'], answer: 2 },
  { type: 'quiz', question: 'an-attā에서 an-은?', options: ['크다', '작다', '부정(~아닌)', '함께'], answer: 2, hint: 'na(~않다)의 합성어 형태' },

  { type: 'writing', instruction: '"무아"를 빠알리어로 써보세요', meaning: '무아 (자아가 아닌)', pronKo: '아낫따~', answer: 'anattā', hint: 'an+attā' },

  { type: 'speak', pali: 'Rūpaṃ anattā. Vedanā anattā. Saññā anattā. Saṅkhārā anattā. Viññāṇaṃ anattā.',
    pronKo: '루~빵 아낫따~. 웨다나~ 아낫따~. 산냐~ 아낫따~. 상카~라~ 아낫따~. 윈냐~낭 아낫따~.' },

  // 종합
  { type: 'quiz', question: '이 경전의 핵심 가르침은?', options: ['오온 어디에도 자아는 없다', '고행이 해탈의 길이다', '모든 것은 신이 만들었다', '자아를 강화해야 한다'], answer: 0 },
]
