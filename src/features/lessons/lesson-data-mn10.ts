// 4과: 사념처경(MN 10) 학습 데이터
import type { StepType } from './lesson-data-sn56-11'

const V1 = 'Ekaṃ samayaṃ bhagavā kurūsu viharati kammāsadhammaṃ nāma kurūnaṃ nigamo.'
const V1K = '한 때 세존께서 꾸루 나라의 깜마사담마라는 꾸루 사람들의 마을에 머무셨다.'
const V2 = '"Ekāyano ayaṃ, bhikkhave, maggo sattānaṃ visuddhiyā, sokaparidevānaṃ samatikkamāya, dukkhadomanassānaṃ atthaṅgamāya, ñāyassa adhigamāya, nibbānassa sacchikiriyāya, yadidaṃ cattāro satipaṭṭhānā."'
const V2K = '"비구들이여, 중생의 청정을 위해, 슬픔과 비탄을 넘기 위해, 고통과 불쾌를 사라지게 하기 위해, 바른 방법을 얻기 위해, 열반을 실현하기 위해, 이 하나의 길이 있으니 — 네 가지 마음챙김의 확립이다."'
const V3 = 'Idha, bhikkhave, bhikkhu kāye kāyānupassī viharati ātāpī sampajāno satimā, vineyya loke abhijjhādomanassaṃ.'
const V3K = '여기서 비구는 몸에서 몸을 관찰하며 머문다—열심히, 분명히 알아차리며, 마음챙기며, 세상에 대한 탐욕과 불쾌를 제거하면서.'

export const LESSON_MN10: StepType[] = [
  { type: 'intro', icon: '🧘', title: '사념처경', subtitle: 'Satipaṭṭhāna Sutta (MN 10)',
    description: '마음챙김 수행의 완전한 안내서.\n\n사성제 → 팔정도 → 무아를 거쳐\n이제 실제 수행법을 배웁니다.\n\n🎯 이것이 우리 학습의 최종 목표입니다.' },

  // ===== 1문장: 서두 =====
  { type: 'teach', icon: '📍', word: 'kurūsu', pronKo: '꾸루~수', meaning: '꾸루 나라에서',
    grammar: '남성명사, 처격 복수', baseForm: 'Kuru (꾸루 나라)',
    formNote: 'Kuru → kurūsu: -u 어간 처격 복수 -ūsu\n💡 1과의 bārāṇasiyaṃ(-ī 어간 처격)과 비교!',
    buddhism: '꾸루. 고대 인도 북부 왕국. 마하바라따의 무대이기도 함.', verseLine: V1, verseLineKo: V1K, audio: true },

  { type: 'teach', icon: '🏘️', word: 'nigamo', pronKo: '니가모', meaning: '마을',
    grammar: '남성명사, 주격 단수', baseForm: 'nigama (마을, 시장 마을)',
    formNote: 'nigama → nigamo: -a 어간 남성 주격 -o\n1과에서 배운 maggo와 같은 패턴.',
    verseLine: V1, verseLineKo: V1K, audio: true },

  { type: 'verse', pali: V1, pronKo: '에깡 사마양 바가와~ 꾸루~수 위하라띠 깜마~사담망 나~마 꾸루~낭 니가모.',
    translation: V1K, highlight: ['kurūsu','viharati','nigamo'],
    note: '💡 서두 정형구가 조금 다릅니다! 장소가 바라나시가 아닌 꾸루 나라.' },

  // ===== 2문장: 핵심 — 사념처 선언 =====
  { type: 'teach', icon: '🛤️', word: 'ekāyano', pronKo: '에까~야노', meaning: '하나의 길, 유일한 길',
    grammar: '형용사, 주격 남성 단수', baseForm: 'ekāyana (하나로 가는)',
    formNote: 'eka(하나) + ayana(가는 길) = 하나로 수렴하는 길\n"ekāyano maggo" = 이 하나의 길',
    buddhism: '일승도(一乘道). 모든 수행이 하나로 모이는 길. 사념처의 독보적 위치를 강조.',
    verseLine: V2, verseLineKo: V2K, audio: true },

  { type: 'teach', icon: '✨', word: 'visuddhiyā', pronKo: '위숫디야~', meaning: '청정을 위해',
    grammar: '여성명사, 여격 단수', baseForm: 'visuddhi (청정)',
    formNote: 'visuddhi → visuddhiyā: -i 어간 여격 -iyā = "~을 위해"\nvi(완전히) + √sudh(깨끗하다)',
    buddhism: '청정(清淨). 마음의 정화. Visuddhimagga(청정도론)의 제목이기도.',
    verseLine: V2, verseLineKo: V2K, audio: true },

  { type: 'teach', icon: '🕊️', word: 'nibbānassa', pronKo: '닙바~낫사', meaning: '열반의',
    grammar: '중성명사, 속격 단수', baseForm: 'nibbāna (열반)',
    formNote: 'nibbāna → nibbānassa: -a 어간 속격 -assa = "~의"\nni(나가는) + √vā(부는) = 불이 꺼짐',
    buddhism: '열반(涅槃). 갈애의 완전한 소멸. 궁극적 해탈. 모든 수행의 목표.',
    verseLine: V2, verseLineKo: V2K, audio: true },

  { type: 'teach', icon: '🧘', word: 'satipaṭṭhānā', pronKo: '사띠빳타~나~', meaning: '마음챙김의 확립',
    grammar: '남성명사, 주격 복수', baseForm: 'satipaṭṭhāna',
    formNote: 'sati(마음챙김) + upaṭṭhāna(확립, 가까이 세움)\ncattāro(넷) + satipaṭṭhānā = 네 가지 마음챙김의 확립',
    buddhism: '사념처(四念處). 몸·느낌·마음·법 네 가지를 관찰하는 수행법.\n☸️ 팔정도의 sammāsati(정념)의 구체적 실천법!',
    verseLine: V2, verseLineKo: V2K, audio: true },

  { type: 'verse', pali: V2, pronKo: '"에까~야노 아양, 빅카웨, 막고..야디당 짯따~로 사띠빳타~나~."',
    translation: V2K, highlight: ['ekāyano','maggo','visuddhiyā','nibbānassa','satipaṭṭhānā'],
    note: '☸️ 사념처경의 핵심 선언! "열반을 위한 유일한 길 = 사념처"' },

  { type: 'quiz', question: '"ekāyano maggo"의 뜻은?', options: ['여러 길', '하나의 길 (유일한 길)', '어려운 길', '긴 길'], answer: 1 },
  { type: 'quiz', question: '사념처(cattāro satipaṭṭhānā)의 네 가지는?', options: ['몸·느낌·마음·법', '고·집·멸·도', '계·정·혜·해탈', '색·수·상·행'], answer: 0 },

  // ===== 3문장: 신념처(몸 관찰) =====
  { type: 'teach', icon: '🏋️', word: 'kāye', pronKo: '까~예', meaning: '몸에서',
    grammar: '남성명사, 처격 단수', baseForm: 'kāya (몸)',
    formNote: 'kāya → kāye: -a 어간 처격 -e\n"kāye kāyānupassī" = 몸에서 몸을 관찰하는',
    buddhism: '신(身). 물질적 몸. 사념처의 첫 번째 관찰 대상.', verseLine: V3, verseLineKo: V3K, audio: true },

  { type: 'teach', icon: '👁️', word: 'kāyānupassī', pronKo: '까~야~누빳시~', meaning: '몸을 관찰하는 자',
    grammar: '형용사, 주격 남성 단수', baseForm: 'kāya(몸) + anupassī(관찰하는)',
    formNote: 'kāya(몸) + anu(따라) + √pas(보다) + ī(하는 자)\n"kāye kāyānupassī" = 몸에서 몸을 따라 관찰하며',
    buddhism: '신수관(身隨觀). 몸의 현상을 있는 그대로 관찰. 호흡, 자세, 동작 등.', verseLine: V3, verseLineKo: V3K, audio: true },

  { type: 'teach', icon: '🔥', word: 'ātāpī', pronKo: '아~따~삐~', meaning: '열심히, 정진하는',
    grammar: '형용사, 주격 남성 단수', baseForm: 'ātāpin (열심인)',
    formNote: 'ā + √tap(열, 노력) + in = 열의 있는',
    buddhism: '정진(精進). 게으르지 않고 열심히 수행하는 태도.', verseLine: V3, verseLineKo: V3K, audio: true },

  { type: 'teach', icon: '🧠', word: 'sampajāno', pronKo: '삼빠자~노', meaning: '분명히 알아차리는',
    grammar: '형용사, 주격 남성 단수', baseForm: 'sampajāna (분명히 아는)',
    formNote: 'saṃ(완전히) + pa(앞으로) + √ñā(알다) = 완전히 분명히 아는',
    buddhism: '정지(正知). 상황의 맥락을 이해하며 아는 것. 단순 알아차림 이상의 지혜.', verseLine: V3, verseLineKo: V3K, audio: true },

  { type: 'teach', icon: '💎', word: 'satimā', pronKo: '사띠마~', meaning: '마음챙기는',
    grammar: '형용사, 주격 남성 단수', baseForm: 'sati(마음챙김) + -mā(가진)',
    formNote: 'sati(알아차림) + -mant(소유) → satimā(주격)\n"마음챙김을 갖춘 자"',
    buddhism: '유념(有念). 마음챙김을 유지하는 상태. sati = 1과 sammāsati의 sati!', verseLine: V3, verseLineKo: V3K, audio: true },

  { type: 'verse', pali: V3, pronKo: '이다, 빅카웨, 빅쿠 까~예 까~야~누빳시~ 위하라띠 아~따~삐~ 삼빠자~노 사띠마~...',
    translation: V3K, highlight: ['kāye','kāyānupassī','viharati','ātāpī','sampajāno','satimā'],
    note: '🧘 사념처 수행의 공식: "~에서 ~을 관찰하며 머문다—열심히, 분명히 알며, 마음챙기며"' },

  { type: 'quiz', question: '"kāye kāyānupassī viharati"의 뜻은?', options: ['몸을 먹는다', '몸에서 몸을 관찰하며 머문다', '몸을 움직인다', '몸을 씻는다'], answer: 1 },
  { type: 'quiz', question: '사념처 수행의 3가지 태도는?', options: ['ātāpī·sampajāno·satimā (열심·분명히 앎·마음챙김)', '계·정·혜', '신·구·의', '문·사·수'], answer: 0 },
  { type: 'quiz', question: '"satimā"의 sati는 팔정도의 어떤 항목과 같은 단어?', options: ['sammādiṭṭhi', 'sammāvācā', 'sammāsati', 'sammāsamādhi'], answer: 2, hint: '정념(正念)!' },

  { type: 'writing', instruction: '"마음챙김의 확립"을 빠알리어로 써보세요', meaning: '마음챙김의 확립 (사념처)', pronKo: '사띠빳타~나', answer: 'satipaṭṭhāna', hint: 'sati + paṭṭhāna' },

  { type: 'speak', pali: 'kāye kāyānupassī viharati ātāpī sampajāno satimā',
    pronKo: '까~예 까~야~누빳시~ 위하라띠 아~따~삐~ 삼빠자~노 사띠마~' },

  // 종합
  { type: 'quiz', question: '사념처경의 핵심 가르침은?', options: ['몸·느낌·마음·법을 관찰하며 마음챙김하라', '고행으로 해탈하라', '신을 믿으라', '모든 것을 포기하라'], answer: 0 },
  { type: 'quiz', question: '1과~4과를 통해 배운 순서는?', options: ['사성제→무아→팔정도→사념처', '사념처→팔정도→무아→사성제', '팔정도→사성제→사념처→무아', '무아→사념처→사성제→팔정도'], answer: 0 },
]
