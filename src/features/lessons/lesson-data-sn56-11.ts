// 전법륜경(SN 56.11) 학습 데이터 — 모든 문장, 모든 단어
// 타입은 ScriptureLearn.tsx에서 가져옴

const V1 = 'Ekaṃ samayaṃ bhagavā bārāṇasiyaṃ viharati isipatane migadāye.'
const V1K = '한 때 세존께서 바라나시의 녹야원, 이시빠따나에 머무셨다.'
const V2 = 'Tatra kho bhagavā pañcavaggiye bhikkhū āmantesi:'
const V2K = '거기서 세존께서 다섯 비구에게 말씀하셨다:'
const V3 = '"Dveme, bhikkhave, antā pabbajitena na sevitabbā."'
const V3K = '"비구들이여, 출가자가 따르지 말아야 할 두 극단이 있다."'
const V4 = 'Ete kho, bhikkhave, ubho ante anupagamma majjhimā paṭipadā tathāgatena abhisambuddhā'
const V4K = '이 양극단에 다가가지 않고, 여래가 깨달은 중도가 있으니'
const V5 = 'Ayameva ariyo aṭṭhaṅgiko maggo, seyyathidaṃ—sammādiṭṭhi sammāsaṅkappo sammāvācā sammākammanto sammāājīvo sammāvāyāmo sammāsati sammāsamādhi.'
const V5K = '그것은 바로 성스러운 팔정도이니—바른 견해, 바른 사유, 바른 말, 바른 행위, 바른 생계, 바른 정진, 바른 마음챙김, 바른 삼매이다.'
const V6 = 'Idaṃ kho pana, bhikkhave, dukkhaṃ ariyasaccaṃ—'
const V6K = '비구들이여, 이것이 괴로움의 성스러운 진리이다—'
const V7 = 'jātipi dukkhā, jarāpi dukkhā, byādhipi dukkho, maraṇampi dukkhaṃ'
const V7K = '태어남도 괴로움, 늙음도 괴로움, 병듦도 괴로움, 죽음도 괴로움이다'

export type StepType =
  | { type: 'intro'; title: string; subtitle: string; description: string; icon: string }
  | { type: 'teach'; word: string; pronKo: string; meaning: string; icon: string; buddhism?: string; audio?: boolean; verseLine?: string; verseLineKo?: string; grammar?: string; baseForm?: string; formNote?: string }
  | { type: 'teach-grammar'; title: string; example: string; exampleKo: string; explanation: string }
  | { type: 'verse'; pali: string; pronKo: string; translation: string; highlight?: string[]; note?: string }
  | { type: 'quiz'; question: string; options: string[]; answer: number; hint?: string }
  | { type: 'speak'; pali: string; pronKo: string }
  | { type: 'match-listen'; instruction: string; word: string; pronKo: string; options: string[]; answer: number }
  | { type: 'match-reverse'; instruction: string; meaning: string; options: string[]; answer: number }

export const LESSON_SN56_11: StepType[] = [
  // ===== 경전 소개 =====
  { type: 'intro', icon: '☸️', title: '전법륜경', subtitle: 'Dhammacakkappavattana Sutta (SN 56.11)',
    description: '붓다가 깨달음을 이룬 후\n다섯 수행자에게 처음으로 설한 가르침.\n\n첫 문장부터 한 단어씩 배워봅시다.' },

  // ===== 1문장 (7단어) =====
  { type: 'teach', icon: '1️⃣', word: 'ekaṃ', pronKo: '에깡', meaning: '하나의, 어떤',
    grammar: '수사, 대격', baseForm: 'eka (하나)', formNote: 'eka → ekaṃ: 대격 어미 -ṃ. "하나의(때를)"', verseLine: V1, verseLineKo: V1K, audio: true },
  { type: 'teach', icon: '⏰', word: 'samayaṃ', pronKo: '사마양', meaning: '때, 시기',
    grammar: '남성명사, 대격 단수', baseForm: 'samaya (때)', formNote: 'samaya → samayaṃ: -a 어간 대격 -ṃ. "ekaṃ samayaṃ" = 한 때에', verseLine: V1, verseLineKo: V1K, audio: true },
  { type: 'teach-grammar', title: '대격 어미 -ṃ', example: 'eka → ekaṃ\nsamaya → samayaṃ', exampleKo: '하나 → 하나의(를)\n때 → 때(를)',
    explanation: '남성/중성 -a 어간 대격에서 -ṃ이 붙음.\n대격 = 목적어 "~을/를" 또는 시간 표현.' },
  { type: 'teach', icon: '🙏', word: 'bhagavā', pronKo: '바가와~', meaning: '세존께서',
    grammar: '남성명사, 주격 단수', baseForm: 'bhagavant (복덕 있는 분)', formNote: 'bhagavant → bhagavā: 특수 어간(-ant) 주격형.\n주격 = "~이/가" (주어)',
    buddhism: '세존(世尊). 붓다의 존칭. "복덕을 갖추신 분".', verseLine: V1, verseLineKo: V1K, audio: true },
  { type: 'quiz', question: '"ekaṃ samayaṃ bhagavā"의 뜻은?', options: ['한 때 세존께서', '모든 비구들이', '괴로움의 원인은', '법의 바퀴를'], answer: 0 },
  { type: 'teach', icon: '📍', word: 'bārāṇasiyaṃ', pronKo: '바~라~나시양', meaning: '바라나시에서',
    grammar: '여성명사, 처격(7격)', baseForm: 'Bārāṇasī', formNote: '-ī 어간 처격 어미 -iyaṃ = "~에서"',
    buddhism: '바라나시. 붓다 첫 설법지.', verseLine: V1, verseLineKo: V1K, audio: true },
  { type: 'teach', icon: '🏠', word: 'viharati', pronKo: '위하라띠', meaning: '머무시다',
    grammar: '동사, 현재 3인칭 단수', baseForm: '√vi-har (머물다)', formNote: '어근 √har + 접두사 vi. 경전 서두 정형구에 항상 나옴.',
    buddhism: 'vihāra(정사, 사원)와 같은 어근.', verseLine: V1, verseLineKo: V1K, audio: true },
  { type: 'teach', icon: '🏔️', word: 'isipatane', pronKo: '이시빠따네', meaning: '이시빠따나에',
    grammar: '중성명사, 처격(7격)', baseForm: 'Isipatana', formNote: '-a 어간 처격 어미 -e = "~에"',
    buddhism: '"선인(isi)들이 내려온(patana) 곳". 녹야원의 다른 이름.', verseLine: V1, verseLineKo: V1K, audio: true },
  { type: 'teach', icon: '🦌', word: 'migadāye', pronKo: '미가다~예', meaning: '녹야원에',
    grammar: '남성명사, 처격(7격)', baseForm: 'migadāya (사슴+동산)', formNote: 'miga(사슴) + dāya(동산). -a 어간 처격 -e',
    buddhism: '녹야원(鹿野苑). 현재 사르나트(Sarnath). 붓다 최초 설법지.', verseLine: V1, verseLineKo: V1K, audio: true },
  { type: 'teach-grammar', title: '처격(7격) -e / -iyaṃ', example: 'migadāya → migadāye\nBārāṇasī → bārāṇasiyaṃ', exampleKo: '녹야원 → 녹야원에\n바라나시 → 바라나시에서',
    explanation: '처격 = "~에서, ~안에" (장소)\n-a 어간: -e / -ī 어간: -iyaṃ' },
  { type: 'verse', pali: V1, pronKo: '에깡 사마양 바가와~ 바~라~나시양 위하라띠 이시빠따네 미가다~예.',
    translation: V1K, highlight: ['ekaṃ','samayaṃ','bhagavā','bārāṇasiyaṃ','viharati','isipatane','migadāye'],
    note: '✅ 첫 문장 7단어 완료! 탭해서 복습하세요.' },
  { type: 'quiz', question: '"viharati"의 뜻은?', options: ['말하다', '머무시다', '걷다', '앉다'], answer: 1 },
  { type: 'quiz', question: '"migadāye"의 -e는 무슨 격?', options: ['주격', '대격', '처격', '속격'], answer: 2 },
  { type: 'speak', pali: V1, pronKo: '에깡 사마양 바가와~ 바~라~나시양 위하라띠 이시빠따네 미가다~예.' },

  // ===== 2문장 (5단어) =====
  { type: 'teach', icon: '👉', word: 'tatra', pronKo: '따뜨라', meaning: '거기서',
    grammar: '부사 (불변어)', formNote: '변하지 않는 단어. 격변화 없음.', verseLine: V2, verseLineKo: V2K, audio: true },
  { type: 'teach', icon: '❗', word: 'kho', pronKo: '코', meaning: '실로, 참으로',
    grammar: '강조 불변어', formNote: '문장 강조. 영어 indeed. 경전에 매우 자주 나옴.', verseLine: V2, verseLineKo: V2K, audio: true },
  { type: 'teach', icon: '5️⃣', word: 'pañcavaggiye', pronKo: '빤짜왁기예', meaning: '다섯 무리의',
    grammar: '형용사, 대격 복수', baseForm: 'pañcavaggiya', formNote: 'pañca(다섯)+vaggiya(무리의). 대격 복수 -e',
    buddhism: '다섯 비구(五比丘). 꼰단냐, 왑빠, 밧디야, 마하나마, 앗사지.', verseLine: V2, verseLineKo: V2K, audio: true },
  { type: 'teach', icon: '🧘', word: 'bhikkhū', pronKo: '빅쿠~', meaning: '비구들을',
    grammar: '남성명사, 대격 복수', baseForm: 'bhikkhu (비구)',
    formNote: 'bhikkhu 격변화:\n• 주격 단수: bhikkhu (비구가)\n• 대격 복수: bhikkhū (비구들을) ← 여기!\n• 호격 복수: bhikkhave (비구들이여)\n\n대격 복수 = 주격 복수와 같은 형태(bhikkhū)',
    buddhism: '비구(比丘). 출가 수행자. "걸식하는 자".', verseLine: V2, verseLineKo: V2K, audio: true },
  { type: 'teach-grammar', title: 'bhikkhu(비구) 격변화', example: 'bhikkhu → bhikkhū → bhikkhave', exampleKo: '비구가 → 비구들을 → 비구들이여',
    explanation: '-u 어간 남성명사:\n• 주격: bhikkhu / bhikkhū\n• 대격: bhikkhuṃ / bhikkhū\n• 호격: bhikkhu / bhikkhave\n\n💡 대격 복수 = 주격 복수(bhikkhū)' },
  { type: 'teach', icon: '🗣️', word: 'āmantesi', pronKo: '아~만떼시', meaning: '말씀하셨다',
    grammar: '동사, 과거(aorist) 3인칭 단수', baseForm: '√manteti (부르다)',
    formNote: 'ā(접두사) + mantesi(과거형).\n현재: manteti "부른다"\n과거: āmantesi "불렀다"',
    verseLine: V2, verseLineKo: V2K, audio: true },
  { type: 'verse', pali: V2, pronKo: '따뜨라 코 바가와~ 빤짜왁기예 빅쿠~ 아~만떼시:',
    translation: V2K, highlight: ['tatra','kho','bhagavā','pañcavaggiye','bhikkhū','āmantesi'],
    note: '✅ 두 번째 문장 완료! bhagavā가 다시 나왔죠?' },
  { type: 'quiz', question: '"bhikkhū"와 "bhikkhave"의 차이는?', options: ['bhikkhū=대격(~을), bhikkhave=호격(~이여)', '같은 뜻', 'bhikkhū=단수, bhikkhave=복수', 'bhikkhū=과거, bhikkhave=현재'], answer: 0, hint: '격이 다릅니다' },
  { type: 'quiz', question: '"āmantesi"는 어떤 시제?', options: ['현재', '과거', '미래', '명령'], answer: 1 },
  { type: 'speak', pali: V2, pronKo: '따뜨라 코 바가와~ 빤짜왁기예 빅쿠~ 아~만떼시:' },

  // ===== 3문장: 두 극단 (6단어) =====
  { type: 'teach', icon: '2️⃣', word: 'dveme', pronKo: '드웨메', meaning: '이 두 가지',
    grammar: '수사+대명사', baseForm: 'dve (둘) + ime (이것들)', formNote: 'dve(둘)+ime(이것들) 합쳐진 형태.',
    verseLine: V3, verseLineKo: V3K, audio: true },
  { type: 'teach', icon: '🧘', word: 'bhikkhave', pronKo: '빅카웨', meaning: '비구들이여',
    grammar: '남성명사, 호격 복수', baseForm: 'bhikkhu (비구)',
    formNote: '호격(8격) = 부르는 말 "~이여!"\nbhikkhu → bhikkhave (호격 복수)\n\n💡 앞에서 배운 bhikkhū(대격)과 비교:\n• bhikkhū = 비구들을 (목적어)\n• bhikkhave = 비구들이여 (호칭)',
    buddhism: '경전에서 붓다가 제자를 부를 때. 가장 자주 나오는 호칭.', verseLine: V3, verseLineKo: V3K, audio: true },
  { type: 'teach', icon: '⚡', word: 'antā', pronKo: '안따~', meaning: '극단들이',
    grammar: '남성명사, 주격 복수', baseForm: 'anta (극단, 끝)',
    formNote: 'anta → antā: -a 어간 주격 복수 어미 -ā',
    buddhism: '극단(極端). 붓다는 쾌락과 고행 양극단을 피하고 중도를 가르침.', verseLine: V3, verseLineKo: V3K, audio: true },
  { type: 'teach', icon: '🚶', word: 'pabbajitena', pronKo: '빱바지떼나', meaning: '출가자에 의해',
    grammar: '남성명사, 구격(3격) 단수', baseForm: 'pabbajita (출가자)',
    formNote: 'pabbajita → pabbajitena: -a 어간 구격 -ena = "~에 의해, ~로써"',
    buddhism: '출가자. 세속을 떠나 수행하는 자. pabbajjā(출가)에서 유래.', verseLine: V3, verseLineKo: V3K, audio: true },
  { type: 'teach', icon: '🚫', word: 'na', pronKo: '나', meaning: '~않다',
    grammar: '부정 불변어', formNote: '부정을 나타냄. 영어 not. 동사/형용사 앞에 위치.', verseLine: V3, verseLineKo: V3K, audio: true },
  { type: 'teach', icon: '📋', word: 'sevitabbā', pronKo: '세위땁바~', meaning: '따라야 할, 섬겨야 할',
    grammar: '의무분사(미래수동분사), 주격 복수', baseForm: '√sev (따르다, 섬기다)',
    formNote: '√sev → sevitabba: -tabba 어미 = "~해야 할" (의무/당위)\n"na sevitabbā" = "따르지 말아야 할"',
    verseLine: V3, verseLineKo: V3K, audio: true },
  { type: 'teach-grammar', title: '구격(3격) -ena / 의무분사 -tabba', example: 'pabbajita → pabbajitena\n√sev → sevitabbā', exampleKo: '출가자 → 출가자에 의해\n따르다 → 따라야 할',
    explanation: '구격(-ena) = "~에 의해, ~로써"\n의무분사(-tabba) = "~해야 할" (영어 should)\n"na sevitabbā" = 따르지 말아야 할\n"pabbajitena" = 출가자에 의해' },
  { type: 'verse', pali: V3, pronKo: '"드웨메, 빅카웨, 안따~ 빱바지떼나 나 세위땁바~."',
    translation: V3K, highlight: ['dveme','bhikkhave','antā','pabbajitena','na','sevitabbā'],
    note: '☸️ 붓다의 첫 설법이 시작됩니다! "두 극단을 따르지 말라"' },
  { type: 'quiz', question: '"na sevitabbā"의 뜻은?', options: ['따라야 한다', '따르지 말아야 할', '이미 따랐다', '따를 수 있다'], answer: 1 },
  { type: 'quiz', question: '"pabbajitena"의 -ena는?', options: ['주격 (~이/가)', '구격 (~에 의해)', '처격 (~에서)', '호격 (~이여)'], answer: 1 },

  // ===== 4문장: 중도 (주요 단어) =====
  { type: 'teach', icon: '⚖️', word: 'majjhimā', pronKo: '맛지마~', meaning: '중간의, 중도의',
    grammar: '형용사, 주격 여성 단수', baseForm: 'majjhima (중간의)',
    formNote: 'majjhima → majjhimā: 여성 주격 -ā',
    buddhism: '중도(中道). 쾌락과 고행의 양극단을 피하는 길.', verseLine: V4, verseLineKo: V4K, audio: true },
  { type: 'teach', icon: '🛤️', word: 'paṭipadā', pronKo: '빠띠빠다~', meaning: '도, 길, 수행법',
    grammar: '여성명사, 주격 단수', baseForm: 'paṭipadā (수행의 길)',
    formNote: 'paṭi(향하여) + pada(걸음) = 수행의 길\n여성명사이므로 형용사 majjhimā도 여성형',
    buddhism: '도(道). 사성제의 넷째(도성제)와 연결.', verseLine: V4, verseLineKo: V4K, audio: true },
  { type: 'teach', icon: '🙏', word: 'tathāgatena', pronKo: '따타~가떼나', meaning: '여래에 의해',
    grammar: '남성명사, 구격 단수', baseForm: 'tathāgata (여래)',
    formNote: 'tathāgata → tathāgatena: -a 어간 구격 -ena\ntathā(그렇게) + gata(간) = "그렇게 간 자"',
    buddhism: '여래(如來). 붓다의 자칭. "진리에 따라 온/간 자".', verseLine: V4, verseLineKo: V4K, audio: true },
  { type: 'teach', icon: '💡', word: 'abhisambuddhā', pronKo: '아비삼붓다~', meaning: '완전히 깨달은',
    grammar: '과거분사, 주격 여성 단수', baseForm: 'abhisambujjhati (완전히 깨닫다)',
    formNote: 'abhi(완전히) + sam(함께) + √budh(깨닫다)\n과거분사 = "~된" (영어 -ed)\npaṭipadā(여성)을 수식하므로 여성형 -ā',
    buddhism: '정등각(正等覺). 완전한 깨달음. √budh = Buddha의 어근!', verseLine: V4, verseLineKo: V4K, audio: true },
  { type: 'verse', pali: V4, pronKo: '에떼 코, 빅카웨, 우보 안떼 아누빠감마 맛지마~ 빠띠빠다~ 따타~가떼나 아비삼붓다~',
    translation: V4K, highlight: ['majjhimā','paṭipadā','tathāgatena','abhisambuddhā'],
    note: '☸️ 중도! 붓다의 핵심 방법론. abhisambuddhā의 어근 √budh = Buddha!' },
  { type: 'quiz', question: '중도(majjhimā paṭipadā)란?', options: ['쾌락에 빠지는 것', '고행으로 괴롭히는 것', '양극단을 피하는 길', '아무것도 안 하는 것'], answer: 2 },

  // ===== 5문장: 팔정도 (핵심 단어) =====
  { type: 'teach', icon: '☸️', word: 'ariyo', pronKo: '아리요', meaning: '성스러운, 고귀한',
    grammar: '형용사, 주격 남성 단수', baseForm: 'ariya (성스러운)',
    formNote: 'ariya → ariyo: -a 어간 남성 주격 -o',
    buddhism: '성(聖). 깨달음에 이르는. "아리야"는 수행자를 가리키기도 함.', verseLine: V5, verseLineKo: V5K, audio: true },
  { type: 'teach', icon: '8️⃣', word: 'aṭṭhaṅgiko', pronKo: '앗탕기꼬', meaning: '여덟 가지의',
    grammar: '형용사, 주격 남성 단수', baseForm: 'aṭṭhaṅgika',
    formNote: 'aṭṭha(8) + aṅga(요소) + ika(형용사 접미사)\n합성어: "여덟 요소를 가진"', verseLine: V5, verseLineKo: V5K, audio: true },
  { type: 'teach', icon: '🛤️', word: 'maggo', pronKo: '막고', meaning: '도, 길',
    grammar: '남성명사, 주격 단수', baseForm: 'magga (길)',
    formNote: 'magga → maggo: -a 어간 남성 주격 -o\n"ariyo aṭṭhaṅgiko maggo" = 성스러운 여덟 요소의 길',
    buddhism: '도(道). 사성제 넷째. 괴로움 소멸로 이끄는 길.', verseLine: V5, verseLineKo: V5K, audio: true },
  { type: 'teach', icon: '👁️', word: 'sammādiṭṭhi', pronKo: '삼마~딧티', meaning: '바른 견해',
    grammar: '여성명사, 주격', baseForm: 'sammā(바른) + diṭṭhi(견해)',
    formNote: 'sammā = 바른, 올바른 (부사/접두사)\ndiṭṭhi = 견해, 봄 (√dis에서)',
    buddhism: '정견(正見). 팔정도 첫째. 사성제를 바로 아는 것.', verseLine: V5, verseLineKo: V5K, audio: true },
  { type: 'teach', icon: '🧘', word: 'sammāsati', pronKo: '삼마~사띠', meaning: '바른 마음챙김',
    grammar: '여성명사, 주격', baseForm: 'sammā(바른) + sati(마음챙김)',
    formNote: 'sati = 알아차림, 기억 (√sar에서)\n이것이 사념처경(MN 10)의 주제!',
    buddhism: '정념(正念). 팔정도 일곱째. 사념처 수행. 🎯 우리 학습의 최종 목표!', verseLine: V5, verseLineKo: V5K, audio: true },
  { type: 'verse', pali: V5, pronKo: '아야메와 아리요 앗탕기꼬 막고—삼마~딧티 ... 삼마~사띠 삼마~사마~디.',
    translation: V5K, highlight: ['ariyo','maggo','sammādiṭṭhi','sammāsati','sammāsamādhi'],
    note: '☸️ 팔정도! sammāsati(바른 마음챙김) = 사념처 수행 = 우리 최종 목표!' },
  { type: 'quiz', question: '"sammāsati"의 뜻은?', options: ['바른 견해', '바른 말', '바른 마음챙김', '바른 삼매'], answer: 2 },
  { type: 'speak', pali: 'sammādiṭṭhi sammāsaṅkappo sammāvācā sammākammanto sammāājīvo sammāvāyāmo sammāsati sammāsamādhi',
    pronKo: '삼마~딧티 삼마~상깝뽀 삼마~와~짜~ 삼마~깜만또 삼마~아~지~워 삼마~와~야~모 삼마~사띠 삼마~사마~디' },

  // ===== 6-7문장: 고성제 =====
  { type: 'teach', icon: '📜', word: 'dukkhaṃ', pronKo: '둑캉', meaning: '괴로움',
    grammar: '중성명사, 주격 단수', baseForm: 'dukkha (괴로움)',
    formNote: 'dukkha → dukkhaṃ: 중성 -a 어간 주격 -ṃ\n💡 남성 주격은 -o인데 중성 주격은 -ṃ!',
    buddhism: '고(苦). 사성제 첫째. 단순 고통이 아닌 불만족·불완전함 포괄.', verseLine: V6, verseLineKo: V6K, audio: true },
  { type: 'teach', icon: '📜', word: 'ariyasaccaṃ', pronKo: '아리야삿짱', meaning: '성스러운 진리',
    grammar: '중성명사, 주격 단수', baseForm: 'ariyasacca',
    formNote: 'ariya(성스러운) + sacca(진리) + ṃ(중성 주격)\n합성어: "성스러운 진리"',
    buddhism: '성제(聖諦). 사성제의 각 항목.', verseLine: V6, verseLineKo: V6K, audio: true },
  { type: 'teach', icon: '👶', word: 'jātipi', pronKo: '자~띠삐', meaning: '태어남도',
    grammar: 'jāti(여성명사) + pi(불변어 "~도")', baseForm: 'jāti (탄생)',
    formNote: 'jāti + pi(~도) = 태어남도\npi = 영어 also. 모든 항목 뒤에 붙어 강조',
    buddhism: '생(生). 윤회에서의 태어남. 12연기의 11번째.', verseLine: V7, verseLineKo: V7K, audio: true },
  { type: 'teach', icon: '👴', word: 'jarāpi', pronKo: '자라~삐', meaning: '늙음도',
    grammar: 'jarā(여성명사) + pi', baseForm: 'jarā (늙음)',
    formNote: 'jarā + pi = 늙음도', buddhism: '노(老). 늙음, 쇠퇴.', verseLine: V7, verseLineKo: V7K, audio: true },
  { type: 'teach', icon: '🤒', word: 'byādhipi', pronKo: '뱌~디삐', meaning: '병듦도',
    grammar: 'byādhi(남성명사) + pi', baseForm: 'byādhi (병)',
    formNote: 'byādhi + pi = 병듦도\n💡 byādhi는 남성이라 "dukkho"(남성 주격)', buddhism: '병(病).', verseLine: V7, verseLineKo: V7K, audio: true },
  { type: 'teach', icon: '💀', word: 'maraṇampi', pronKo: '마라낭삐', meaning: '죽음도',
    grammar: 'maraṇa(중성명사) + m + pi', baseForm: 'maraṇa (죽음)',
    formNote: 'maraṇa + ṃ(연음) + pi = 죽음도\n√mar(죽다)에서 유래', buddhism: '사(死). 12연기 마지막.', verseLine: V7, verseLineKo: V7K, audio: true },
  { type: 'verse', pali: `${V6}\n${V7}`, pronKo: '이당 코 빠나, 빅카웨, 둑캉 아리야삿짱—\n자~띠삐 둑카~, 자라~삐 둑카~, 뱌~디삐 둑코, 마라낭삐 둑캉',
    translation: `${V6K}\n${V7K}`, highlight: ['dukkhaṃ','ariyasaccaṃ','jātipi','jarāpi','byādhipi','maraṇampi'],
    note: '☸️ 고성제: 생로병사(生老病死) = 붓다가 출가를 결심한 네 가지 고통!' },
  { type: 'quiz', question: '사성제 첫째 "고성제"의 핵심은?', options: ['행복이 최고', '생로병사가 모두 괴로움', '신을 믿어야', '고행이 답'], answer: 1 },
  { type: 'quiz', question: '"pi"의 뜻은?', options: ['~이다', '~않다', '~도 (also)', '~을/를'], answer: 2 },

  // ===== 종합 퀴즈 =====
  { type: 'quiz', question: '전법륜경 첫 설법 장소는?', options: ['보드가야', '사위성', '바라나시 녹야원', '라자가하'], answer: 2 },
  { type: 'quiz', question: '"bhagavā"의 원형은?', options: ['bhagava', 'bhagavant', 'bhagavā', 'bhagavati'], answer: 1, hint: '-ant 어간 특수 주격형' },
  { type: 'quiz', question: '중도(majjhimā paṭipadā)의 구체적 내용은?', options: ['사성제', '팔정도', '오온', '십이연기'], answer: 1 },
  { type: 'quiz', question: '"abhisambuddhā"의 어근 √budh는 무슨 뜻?', options: ['가다', '보다', '깨닫다', '말하다'], answer: 2, hint: 'Buddha의 어근!' },
]
