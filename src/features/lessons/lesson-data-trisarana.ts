// 2과: 삼귀의(tisaraṇa) — 붓다·담마·상가에 귀의
// 출처: DOCS/제2과. 삼귀의.txt
import type { StepType } from './lesson-data-sn56-11'

const V1A = 'Buddhaṁ saraṇaṁ gacchāmi.'
const V1B = 'Dhammaṁ saraṇaṁ gacchāmi.'
const V1C = 'Saṁghaṁ saraṇaṁ gacchāmi.'
const V1AKo = '붓당 사라낭 갓차미.'
const V1BKo = '담망 사라낭 갓차미.'
const V1CKo = '상강 사라낭 갓차미.'
const V1AK = '저는 붓다께 귀의합니다.'
const V1BK = '저는 담마에 귀의합니다.'
const V1CK = '저는 상가에 귀의합니다.'

const V_CYCLE1 = V1A + '\n' + V1B + '\n' + V1C
const V_CYCLE2 = 'Dutiyampi ' + V1A + '\nDutiyampi ' + V1B + '\nDutiyampi ' + V1C
const V_CYCLE3 = 'Tatiyampi ' + V1A + '\nTatiyampi ' + V1B + '\nTatiyampi ' + V1C

const V_CYCLE1K = V1AK + '\n' + V1BK + '\n' + V1CK
const V_CYCLE2K = '두 번째로도 ' + V1AK + '\n두 번째로도 ' + V1BK + '\n두 번째로도 ' + V1CK
const V_CYCLE3K = '세 번째로도 ' + V1AK + '\n세 번째로도 ' + V1BK + '\n세 번째로도 ' + V1CK

export const LESSON_TRISARANA: StepType[] = [
  { type: 'intro', icon: '🪷', title: '삼귀의', subtitle: 'tisaraṇa — 붓다·담마·상가에 귀의',
    description: '불교 수행의 기초가 되는 세 가지 귀의(三歸依).\n붓다(스승)·담마(가르침)·상가(공동체)에 귀의하며 수행의 기반을 세웁니다.\n전통적으로 세 번 반복하여 독송합니다.' },

  { type: 'teach', icon: '☸️', word: 'Buddhaṁ', pronKo: '붓당', meaning: '붓다를, 깨달은 분께',
    grammar: '명사 (남성 단수 대격)', baseForm: 'Buddha',
    formNote: 'Buddha → Buddhaṁ: -a 어간 남성 대격 -ṁ',
    buddhism: '불(佛). 깨달음을 이루신 스승. 삼보의 첫째.', verseLine: V1A, verseLineKo: V1AK, audio: true },

  { type: 'teach', icon: '📜', word: 'Dhammaṁ', pronKo: '담망', meaning: '담마를, 가르침에',
    grammar: '명사 (남성 단수 대격)', baseForm: 'Dhamma',
    formNote: 'Dhamma → Dhammaṁ: -a 어간 남성 대격 -ṁ',
    buddhism: '법(法). 붓다께서 설하신 진리·가르침. 삼보의 둘째.', verseLine: V1B, verseLineKo: V1BK, audio: true },

  { type: 'teach', icon: '👥', word: 'Saṁghaṁ', pronKo: '상강', meaning: '상가를, 승가에',
    grammar: '명사 (남성 단수 대격)', baseForm: 'Saṁgha',
    formNote: 'Saṁgha → Saṁghaṁ: -a 어간 남성 대격 -ṁ',
    buddhism: '승(僧). 수행 공동체. 특히 성인 제자의 모임. 삼보의 셋째.', verseLine: V1C, verseLineKo: V1CK, audio: true },

  { type: 'teach', icon: '🏠', word: 'saraṇaṁ', pronKo: '사라낭', meaning: '귀의처, 피난처',
    grammar: '명사 (중성 단수 대격)', baseForm: 'saraṇa',
    formNote: '-a 어간 중성 대격 -ṁ', verseLine: V1A, verseLineKo: V1AK, audio: true },

  { type: 'teach', icon: '🚶', word: 'gacchāmi', pronKo: '갓차미', meaning: '저는 갑니다',
    grammar: '동사 (현재 1인칭 단수)', baseForm: '√gam (가다)',
    formNote: '√gam → gacchati(3인칭) → gacchāmi(1인칭)\n-āmi = 1인칭 단수 어미', verseLine: V1A, verseLineKo: V1AK, audio: true },

  { type: 'teach', icon: '2️⃣', word: 'Dutiyampi', pronKo: '두띠얌삐', meaning: '두 번째로도',
    grammar: '부사', baseForm: 'dutiya(둘째) + pi(~도)',
    formNote: '둘째 사이클을 시작하는 정형 부사.',
    verseLine: 'Dutiyampi Buddhaṁ saraṇaṁ gacchāmi.', verseLineKo: '두 번째로도 저는 붓다께 귀의합니다.', audio: true },

  { type: 'teach', icon: '3️⃣', word: 'Tatiyampi', pronKo: '따띠얌삐', meaning: '세 번째로도',
    grammar: '부사', baseForm: 'tatiya(셋째) + pi(~도)',
    formNote: '셋째 사이클을 시작하는 정형 부사.',
    verseLine: 'Tatiyampi Buddhaṁ saraṇaṁ gacchāmi.', verseLineKo: '세 번째로도 저는 붓다께 귀의합니다.', audio: true },

  { type: 'teach-grammar', title: '귀의문 구조',
    example: '[대상-대격] + saraṇaṁ + gacchāmi',
    exampleKo: '[붓다께/담마에/상가에] 귀의처로 갑니다',
    explanation: '귀의 대상(대격) + saraṇaṁ(귀의처) + gacchāmi(갑니다).\n붓다·담마·상가 한 번씩 → Dutiyampi(둘째로도) 한 번씩 → Tatiyampi(셋째로도) 한 번씩.\n총 3사이클, 9문장.' },

  { type: 'verse', pali: V_CYCLE1, pronKo: V1AKo + ' / ' + V1BKo + ' / ' + V1CKo,
    translation: V_CYCLE1K, highlight: ['Buddhaṁ', 'Dhammaṁ', 'Saṁghaṁ', 'saraṇaṁ', 'gacchāmi'],
    note: '첫째 사이클 — 붓다·담마·상가에 차례로 귀의합니다.' },

  { type: 'verse', pali: V_CYCLE2, pronKo: '두띠얌삐 ' + V1AKo + ' / 두띠얌삐 ' + V1BKo + ' / 두띠얌삐 ' + V1CKo,
    translation: V_CYCLE2K, highlight: ['Dutiyampi'],
    note: '둘째 사이클 — Dutiyampi가 앞에 붙습니다.' },

  { type: 'verse', pali: V_CYCLE3, pronKo: '따띠얌삐 ' + V1AKo + ' / 따띠얌삐 ' + V1BKo + ' / 따띠얌삐 ' + V1CKo,
    translation: V_CYCLE3K, highlight: ['Tatiyampi'],
    note: '셋째 사이클 — Tatiyampi가 앞에 붙습니다.' },

  { type: 'quiz', question: '"saraṇaṁ"의 뜻은?',
    options: ['경배', '귀의처, 피난처', '상가', '법'], answer: 1 },

  { type: 'quiz', question: '두 번째 귀의문은 어떻게 시작하나요?',
    options: ['Tatiyampi', 'Dutiyampi', 'Ekampi', 'Catutthapi'], answer: 1 },

  { type: 'quiz', question: '"gacchāmi"는 어떤 인칭/시제인가요?',
    options: ['과거 3인칭', '현재 3인칭', '현재 1인칭', '미래 1인칭'], answer: 2 },

  { type: 'writing', instruction: '"귀의처"를 빠알리어로 써보세요',
    meaning: '귀의처, 피난처', pronKo: '사라낭', answer: 'saraṇaṁ', hint: 's로 시작, -ṁ으로 끝' },

  { type: 'speak', pali: V1A, pronKo: V1AKo },
  { type: 'speak', pali: V1B, pronKo: V1BKo },
  { type: 'speak', pali: V1C, pronKo: V1CKo },

  { type: 'arrange', instruction: '빠알리 문장을 순서대로 배열하세요.',
    translation: V1AK, blocks: ['saraṇaṁ', 'Buddhaṁ', 'gacchāmi.'], correctOrder: [1, 0, 2] },
]
