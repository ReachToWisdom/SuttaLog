// 9과: 무아상경(Anattalakkhaṇa Sutta, SN 22.59) — 오온의 무아
// 출처: DOCS/제9과. 무아상경.txt
import type { StepType } from './lesson-data-sn56-11'

const V_INTRO = 'Evaṁ me sutaṁ. Ekaṁ samayaṁ bhagavā bārāṇasiyaṁ viharati isipatane migadāye. Tatra kho bhagavā pañcavaggiye bhikkhū āmantesi, "bhikkhavo"ti. "Bhadante"ti te bhikkhū bhagavato paccassosuṁ. Bhagavā etadavoca —'
const V_INTROK = '이와 같이 나는 들었다. 한 때 세존께서 바라나시 이시빠따나 녹야원에 머무셨다. 거기서 세존께서 다섯 비구를 부르셨다. "비구들이여." "스승님" 하고 비구들이 응답하였다. 세존께서 이렇게 말씀하셨다 —'

const V_RUPA = '"Rūpaṁ, bhikkhave, anattā. Rūpañca hidaṁ, bhikkhave, attā abhavissa, nayidaṁ rūpaṁ ābādhāya saṁvatteyya, labbhetha ca rūpe, \'evaṁ me rūpaṁ hotu, evaṁ me rūpaṁ mā ahosī\'ti. Yasmā ca kho, bhikkhave, rūpaṁ anattā, tasmā rūpaṁ ābādhāya saṁvattati, na ca labbhati rūpe \'evaṁ me rūpaṁ hotu, evaṁ me rūpaṁ mā ahosī\'ti."'
const V_RUPAK = '"비구들이여, 물질(색)은 무아이다. 만약 물질이 자아라면, 물질이 병고로 이끌지 않을 것이고, \'내 물질이 이렇게 되기를, 이렇게 되지 않기를\'이라고 통제할 수 있을 것이다. 그러나 물질은 무아이기에 병고로 이끌며, 통제할 수 없다."'

const V_OTHERS = '"Vedanā anattā ... Saññā anattā ... Saṅkhārā anattā ... Viññāṇaṁ anattā ..." (같은 논증이 느낌·인식·의지·의식에도 동일하게 반복된다.)'
const V_OTHERSK = '"느낌도 무아이다 ... 인식도 무아이다 ... 의지작용들도 무아이다 ... 의식도 무아이다 ..." (같은 논증 — 만약 자아라면 통제 가능했을 것 / 그러나 통제 불가 / 그러므로 무아 — 가 오온의 다섯 가지 모두에 그대로 반복된다.)'

const V_TRIAD = '"Taṁ kiṁ maññatha, bhikkhave, rūpaṁ niccaṁ vā aniccaṁ vā"ti? "Aniccaṁ, bhante." "Yaṁ panāniccaṁ dukkhaṁ vā taṁ sukhaṁ vā"ti? "Dukkhaṁ, bhante." "Yaṁ panāniccaṁ dukkhaṁ vipariṇāmadhammaṁ, kallaṁ nu taṁ samanupassituṁ \'etaṁ mama, esohamasmi, eso me attā\'"ti? "No hetaṁ, bhante."'
const V_TRIADK = '"비구들이여, 어떻게 생각하는가? 물질은 영원한가, 무상한가?" "무상합니다, 세존이시여." "무상한 것은 괴로움인가, 즐거움인가?" "괴로움입니다, 세존이시여." "무상하고 괴로우며 변하는 것을 \'이것은 나의 것, 이것이 나, 이것이 나의 자아\'라고 보는 것이 옳은가?" "그렇지 않습니다, 세존이시여."'

const V_TRIAD_REPEAT = '(같은 문답 — "무상한가? 괴로움인가? 자아라고 볼 수 있는가?" — 이 삼특상 문답이 느낌·인식·의지·의식 각각에도 그대로 반복되어 총 5회 시행됨.)'
const V_TRIAD_REPEATK = '(같은 삼특상 문답 — 무상·고·무아 — 이 느낌·인식·의지·의식에도 각각 반복되어 오온 전체에 대해 5회 검증됨.)'

const V_CONCLUSION_RUPA = '"Tasmātiha, bhikkhave, yaṁ kiñci rūpaṁ atītānāgatapaccuppannaṁ ajjhattaṁ vā bahiddhā vā oḷārikaṁ vā sukhumaṁ vā hīnaṁ vā paṇītaṁ vā yaṁ dūre santike vā, sabbaṁ rūpaṁ \'netaṁ mama, nesohamasmi, na meso attā\'ti evametaṁ yathābhūtaṁ sammappaññāya daṭṭhabbaṁ."'
const V_CONCLUSION_RUPAK = '"그러므로 비구들이여, 어떤 물질이든 — 과거·미래·현재의, 안의·밖의, 거친·미세한, 저열한·수승한, 멀리·가까이 있는 — 모든 물질을 \'이것은 나의 것이 아니다, 이것이 나가 아니다, 이것이 나의 자아가 아니다\'라고 있는 그대로 바른 지혜로 보아야 한다."'

const V_CONCLUSION_OTHERS = '(같은 결론 정형구가 vedanā·saññā·saṅkhārā·viññāṇaṁ 각각에 그대로 반복됨 — 모든 차원의 오온에 대해 "내 것 아님·나 아님·내 자아 아님"으로 통찰.)'
const V_CONCLUSION_OTHERSK = '(같은 결론 정형구 — 과거·미래·현재 / 안·밖 / 거친·미세 / 저열·수승 / 멀리·가까이 — 가 느낌·인식·의지·의식 각각에도 그대로 반복되어, 오온 전체에 대해 "내 것 아님·나 아님·내 자아 아님"이라 통찰함.)'

const V_RELEASE = '"Evaṁ passaṁ, bhikkhave, sutavā ariyasāvako rūpasmimpi nibbindati, vedanāyapi nibbindati, saññāyapi nibbindati, saṅkhāresupi nibbindati, viññāṇasmimpi nibbindati. Nibbindaṁ virajjati, virāgā vimuccati. Vimuttasmiṁ vimuttamiti ñāṇaṁ hoti. \'Khīṇā jāti, vusitaṁ brahmacariyaṁ, kataṁ karaṇīyaṁ, nāparaṁ itthattāyā\'ti pajānātīti."'
const V_RELEASEK = '"비구들이여, 이와 같이 보는 잘 배운 성스러운 제자는 물질에도 싫증내고, 느낌에도, 인식에도, 의지에도, 의식에도 싫증낸다. 싫증내면 탐욕이 사라지고, 탐욕이 사라지면 해탈한다. 해탈하면 \'해탈했다\'는 앎이 일어난다 — \'태어남은 다했고, 청정범행은 이루어졌고, 할 일은 마쳤으며, 더 이상 이러한 상태가 없다\'고 안다."'

const V_END = 'Idamavoca bhagavā. Attamanā pañcavaggiyā bhikkhū bhagavato bhāsitaṁ abhinanduṁ. Imasmiñca pana veyyākaraṇasmiṁ bhaññamāne pañcavaggiyānaṁ bhikkhūnaṁ anupādāya āsavehi cittāni vimucciṁsūti.'
const V_ENDK = '이렇게 세존께서 말씀하셨다. 다섯 비구는 만족하여 세존의 말씀을 기뻐하였다. 이 가르침이 설해질 때 다섯 비구의 마음은 집착 없이 번뇌로부터 해탈하였다.'

export const LESSON_SN22_59: StepType[] = [
  { type: 'intro', icon: '🔍', title: '무아상경', subtitle: 'Anattalakkhaṇa Sutta (SN 22.59)',
    description: '붓다의 두 번째 설법.\n전법륜경 직후, 같은 다섯 비구에게 오온의 무아를 설하여\n모두 아라한이 되게 한 경.\n구조: ① 통제 불가 논증 × 5온 → ② 삼특상 문답 × 5온 → ③ 11차원 통찰 → ④ 해탈.' },

  { type: 'verse', pali: V_INTRO, pronKo: '에왕 메 수땅 ... 바가와 에따다오짜 —',
    translation: V_INTROK, highlight: ['bārāṇasiyaṁ', 'isipatane', 'pañcavaggiye'], note: '서두 — 전법륜경과 같은 장소·같은 청중.' },

  { type: 'teach', icon: '🎨', word: 'rūpaṁ', pronKo: '루빵', meaning: '물질, 색(色)',
    grammar: '중성명사 주격', baseForm: 'rūpa', buddhism: '오온 ①. 몸을 포함한 모든 물질.', verseLine: V_RUPA, verseLineKo: V_RUPAK, audio: true },

  { type: 'teach', icon: '💭', word: 'vedanā', pronKo: '웨다나', meaning: '느낌, 수(受)',
    grammar: '여성명사 주격', buddhism: '오온 ②. 쾌·불쾌·중립의 기본 감수.', verseLine: V_OTHERS, verseLineKo: V_OTHERSK, audio: true },

  { type: 'teach', icon: '🏷️', word: 'saññā', pronKo: '산냐', meaning: '인식, 상(想)',
    grammar: '여성명사 주격', buddhism: '오온 ③. 대상을 구별하여 인지하는 작용.', verseLine: V_OTHERS, verseLineKo: V_OTHERSK, audio: true },

  { type: 'teach', icon: '⚡', word: 'saṅkhārā', pronKo: '상카라', meaning: '의지작용, 행(行)',
    grammar: '남성명사 주격 복수', buddhism: '오온 ④. 의도적 정신활동, 업을 짓는 의지.', verseLine: V_OTHERS, verseLineKo: V_OTHERSK, audio: true },

  { type: 'teach', icon: '👁️', word: 'viññāṇaṁ', pronKo: '윈냐낭', meaning: '의식, 식(識)',
    grammar: '중성명사 주격', buddhism: '오온 ⑤. 대상을 아는 기본 인식작용. 6식.', verseLine: V_OTHERS, verseLineKo: V_OTHERSK, audio: true },

  { type: 'teach', icon: '🚫', word: 'anattā', pronKo: '아낫따', meaning: '무아, 자아가 아닌',
    grammar: '형용사 주격', baseForm: 'an(부정) + attā(자아)',
    buddhism: '무아(無我). 삼법인 셋째. "어디에도 영원한 나는 없다." 불교의 가장 독특한 교리.', verseLine: V_RUPA, verseLineKo: V_RUPAK, audio: true },

  { type: 'teach', icon: '🌪️', word: 'aniccaṁ — dukkhaṁ — anattā', pronKo: '아닛짱 둑캉 아낫따', meaning: '무상·고·무아 (삼특상)',
    grammar: '형용사 3개', buddhism: '삼특상(三特相, ti-lakkhaṇa). 모든 유위법의 공통 특성.', verseLine: V_TRIAD, verseLineKo: V_TRIADK, audio: true },

  { type: 'teach-grammar', title: '무아 논증의 핵심 구조',
    example: 'X anattā. Yadi X attā abhavissa, ... saṁvatteyya, labbhetha ... mā ahosi\'ti.\nYasmā X anattā, tasmā ...',
    exampleKo: 'X는 무아. 만약 X가 자아라면 통제 가능했을 것. 그러나 통제 불가 → X는 무아.',
    explanation: '동일 논증이 색·수·상·행·식 다섯에 그대로 반복.\n전제: 자아라면 "이렇게 되기를"이 가능해야 함.\n경험: 그러나 우리는 오온을 마음대로 통제할 수 없음.\n결론: 오온은 무아.' },

  { type: 'verse', pali: V_RUPA, pronKo: '루빵 빅카웨 아낫따 ... 야스마 짜 코 빅카웨 루빵 아낫따...',
    translation: V_RUPAK, highlight: ['Rūpaṁ', 'anattā', 'attā', 'ābādhāya', 'saṁvatteyya', 'labbhetha'],
    note: '① 색의 무아 — 통제 불가 논증.' },

  { type: 'verse', pali: V_OTHERS, pronKo: '웨다나 아낫따 ... 산냐 아낫따 ... 상카라 아낫따 ... 윈냐낭 아낫따...',
    translation: V_OTHERSK, highlight: ['Vedanā', 'Saññā', 'Saṅkhārā', 'Viññāṇaṁ'],
    note: '② 수·상·행·식의 무아 — 같은 논증 반복.' },

  { type: 'verse', pali: V_TRIAD, pronKo: '땅 낑 만냐타 빅카웨 루빵 닛짱 와 아닛짱 와...',
    translation: V_TRIADK, highlight: ['niccaṁ', 'aniccaṁ', 'dukkhaṁ', 'sukhaṁ', 'vipariṇāmadhammaṁ', 'etaṁ mama', 'eso me attā'],
    note: '③ 색에 대한 삼특상 문답: 무상→고→무아.' },

  { type: 'verse', pali: V_TRIAD_REPEAT, pronKo: '(반복 — 웨다나·산냐·상카라·윈냐낭)',
    translation: V_TRIAD_REPEATK, highlight: ['niccaṁ', 'aniccaṁ', 'dukkhaṁ', 'anattā'],
    note: '④ 같은 문답이 수·상·행·식에도 반복 (총 5회).' },

  { type: 'verse', pali: V_CONCLUSION_RUPA, pronKo: '따스마띠하 빅카웨 양 낀찌 루빵...',
    translation: V_CONCLUSION_RUPAK, highlight: ['atītānāgatapaccuppannaṁ', 'ajjhattaṁ', 'bahiddhā', 'oḷārikaṁ', 'sukhumaṁ', 'hīnaṁ', 'paṇītaṁ', 'dūre', 'santike', 'netaṁ mama'],
    note: '⑤ 11차원의 색 — 시간(과·현·미) × 위치(안·밖) × 정도(거친·미세) × 가치(저열·수승) × 거리(멀고·가까이) — 모두 "내 것·나·내 자아 아님".' },

  { type: 'verse', pali: V_CONCLUSION_OTHERS, pronKo: '(반복 — 수·상·행·식 각각에)',
    translation: V_CONCLUSION_OTHERSK, note: '⑥ 같은 11차원 통찰을 수·상·행·식에도 적용.' },

  { type: 'verse', pali: V_RELEASE, pronKo: '에왕 빳상 빅카웨 수따와 아리야사와꼬 루빠스밈삐 닙빈다띠...',
    translation: V_RELEASEK, highlight: ['nibbindati', 'virajjati', 'vimuccati', 'Khīṇā jāti', 'vusitaṁ brahmacariyaṁ', 'nāparaṁ itthattāya'],
    note: '⑦ 해탈의 흐름 — 싫증(nibbidā) → 이욕(virāga) → 해탈(vimutti) → 아라한의 자각.' },

  { type: 'verse', pali: V_END, pronKo: '이다마오짜 바가와...',
    translation: V_ENDK, highlight: ['pañcavaggiyā bhikkhū', 'āsavehi cittāni vimucciṁsūti'],
    note: '⑧ 다섯 비구 모두 그 자리에서 번뇌로부터 해탈 = 아라한과 증득.' },

  { type: 'quiz', question: '"rūpaṁ anattā"의 뜻은?',
    options: ['물질은 무아이다', '물질은 괴로움이다', '물질은 무상하다', '물질은 행복이다'], answer: 0 },

  { type: 'quiz', question: '오온(五蘊)의 순서는?',
    options: ['색·수·상·행·식', '색·행·수·식·상', '식·행·상·수·색', '수·색·상·식·행'], answer: 0 },

  { type: 'quiz', question: '무아 논증의 핵심은? "만약 자아라면..."',
    options: ['통제 가능해야 한다', '영원해야 한다', '행복해야 한다', '보여야 한다'], answer: 0 },

  { type: 'quiz', question: '삼특상(三特相, ti-lakkhaṇa)은?',
    options: ['무상·고·무아', '계·정·혜', '신·구·의', '고·집·멸'], answer: 0 },

  { type: 'quiz', question: '해탈에 이르는 단계는?',
    options: ['nibbidā(싫증) → virāga(이욕) → vimutti(해탈)', '계 → 정 → 혜', '문 → 사 → 수', '신 → 해 → 행'], answer: 0 },

  { type: 'writing', instruction: '"무아"를 빠알리어로 써보세요',
    meaning: '무아', pronKo: '아낫따', answer: 'anattā', hint: 'an+attā' },

  { type: 'speak', pali: 'Rūpaṁ anattā. Vedanā anattā. Saññā anattā. Saṅkhārā anattā. Viññāṇaṁ anattā.',
    pronKo: '루빵 아낫따. 웨다나 아낫따. 산냐 아낫따. 상카라 아낫따. 윈냐낭 아낫따.' },
]
