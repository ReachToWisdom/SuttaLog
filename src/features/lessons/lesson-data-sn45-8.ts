// 5과: 도 분별경(Vibhaṅga Sutta, SN 45.8) — 팔정도 분별
// 출처: DOCS/제5과. 도 분별경.txt
import type { StepType } from './lesson-data-sn56-11'

const V_OPENING = '"Ariyaṁ vo, bhikkhave, aṭṭhaṅgikaṁ maggaṁ desessāmi vibhajissāmi. Taṁ suṇātha, sādhukaṁ manasi karotha; bhāsissāmī"ti.'
const V_OPENINGK = '"비구들이여, 나는 그대들에게 성스러운 팔정도를 설하고 분별하겠다. 그것을 듣고 잘 마음에 새기라. 내가 설하리라."'

const V_QUESTION = '"Katamo ca, bhikkhave, ariyo aṭṭhaṅgiko maggo? Seyyathidaṁ — sammādiṭṭhi, sammāsaṅkappo, sammāvācā, sammākammanto, sammāājīvo, sammāvāyāmo, sammāsati, sammāsamādhi."'
const V_QUESTIONK = '"비구들이여, 성스러운 팔정도란 무엇인가? 그것은 바른 견해·바른 사유·바른 말·바른 행위·바른 생계·바른 정진·바른 마음챙김·바른 삼매이다."'

const V1 = '"Katamā ca, bhikkhave, sammādiṭṭhi? Yaṁ kho, bhikkhave, dukkhe ñāṇaṁ, dukkhasamudaye ñāṇaṁ, dukkhanirodhe ñāṇaṁ, dukkhanirodhagāminiyā paṭipadāya ñāṇaṁ — ayaṁ vuccati, bhikkhave, sammādiṭṭhi."'
const V1K = '"비구들이여, 바른 견해(正見)란 무엇인가? 비구들이여, 괴로움에 대한 앎, 괴로움의 일어남에 대한 앎, 괴로움의 소멸에 대한 앎, 괴로움의 소멸로 이끄는 길에 대한 앎 — 비구들이여, 이것을 바른 견해라 한다."'

const V2 = '"Katamo ca, bhikkhave, sammāsaṅkappo? Yo kho, bhikkhave, nekkhammasaṅkappo, abyāpādasaṅkappo, avihiṁsāsaṅkappo — ayaṁ vuccati, bhikkhave, sammāsaṅkappo."'
const V2K = '"비구들이여, 바른 사유(正思惟)란 무엇인가? 출리의 사유, 악의 없음의 사유, 해치지 않음의 사유 — 비구들이여, 이것을 바른 사유라 한다."'

const V3 = '"Katamā ca, bhikkhave, sammāvācā? Yā kho, bhikkhave, musāvādā veramaṇī, pisuṇāya vācāya veramaṇī, pharusāya vācāya veramaṇī, samphappalāpā veramaṇī — ayaṁ vuccati, bhikkhave, sammāvācā."'
const V3K = '"비구들이여, 바른 말(正語)이란 무엇인가? 거짓말을 삼가고, 이간하는 말을 삼가고, 거친 말을 삼가고, 잡담을 삼가는 것 — 비구들이여, 이것을 바른 말이라 한다."'

const V4 = '"Katamo ca, bhikkhave, sammākammanto? Yā kho, bhikkhave, pāṇātipātā veramaṇī, adinnādānā veramaṇī, abrahmacariyā veramaṇī — ayaṁ vuccati, bhikkhave, sammākammanto."'
const V4K = '"비구들이여, 바른 행위(正業)란 무엇인가? 살생을 삼가고, 주지 않은 것을 취함을 삼가고, 청정하지 않은 행을 삼가는 것 — 비구들이여, 이것을 바른 행위라 한다."'

const V5 = '"Katamo ca, bhikkhave, sammāājīvo? Idha, bhikkhave, ariyasāvako micchāājīvaṁ pahāya sammāājīvena jīvitaṁ kappeti — ayaṁ vuccati, bhikkhave, sammāājīvo."'
const V5K = '"비구들이여, 바른 생계(正命)란 무엇인가? 여기 비구들이여, 성스러운 제자는 삿된 생계를 버리고 바른 생계로 삶을 영위한다 — 비구들이여, 이것을 바른 생계라 한다."'

const V6 = '"Katamo ca, bhikkhave, sammāvāyāmo? Idha, bhikkhave, bhikkhu anuppannānaṁ pāpakānaṁ akusalānaṁ dhammānaṁ anuppādāya chandaṁ janeti vāyamati vīriyaṁ ārabhati cittaṁ paggaṇhāti padahati; uppannānaṁ pāpakānaṁ akusalānaṁ dhammānaṁ pahānāya...; anuppannānaṁ kusalānaṁ dhammānaṁ uppādāya...; uppannānaṁ kusalānaṁ dhammānaṁ ṭhitiyā asammosāya bhiyyobhāvāya vepullāya bhāvanāya pāripūriyā chandaṁ janeti vāyamati vīriyaṁ ārabhati cittaṁ paggaṇhāti padahati — ayaṁ vuccati, bhikkhave, sammāvāyāmo."'
const V6K = '"비구들이여, 바른 정진(正精進)이란 무엇인가? ① 아직 일어나지 않은 악·불선법이 일어나지 않게, ② 이미 일어난 악·불선법을 끊기 위해, ③ 아직 일어나지 않은 선법을 일으키기 위해, ④ 이미 일어난 선법을 머물게·잊지 않게·증장하게·완성하기 위해 의욕을 일으키고 정진하며 노력하고 마음을 다잡고 노력한다 — 비구들이여, 이것을 바른 정진(사정근)이라 한다."'

const V7 = '"Katamā ca, bhikkhave, sammāsati? Idha, bhikkhave, bhikkhu kāye kāyānupassī viharati ātāpī sampajāno satimā, vineyya loke abhijjhādomanassaṁ; vedanāsu vedanānupassī viharati...; citte cittānupassī viharati...; dhammesu dhammānupassī viharati ātāpī sampajāno satimā, vineyya loke abhijjhādomanassaṁ — ayaṁ vuccati, bhikkhave, sammāsati."'
const V7K = '"비구들이여, 바른 마음챙김(正念)이란 무엇인가? 비구는 몸에서 몸을 / 느낌에서 느낌을 / 마음에서 마음을 / 법에서 법을 따라 관찰하며 머문다 — 열심히, 분명히 알아차리며, 마음챙기며, 세상에 대한 욕망과 근심을 다스리면서 — 비구들이여, 이것을 바른 마음챙김(사념처)이라 한다."'

const V8 = '"Katamo ca, bhikkhave, sammāsamādhi? Idha, bhikkhave, bhikkhu vivicceva kāmehi vivicca akusalehi dhammehi savitakkaṁ savicāraṁ vivekajaṁ pītisukhaṁ paṭhamaṁ jhānaṁ upasampajja viharati. ... dutiyaṁ jhānaṁ ... tatiyaṁ jhānaṁ ... catutthaṁ jhānaṁ upasampajja viharati — ayaṁ vuccati, bhikkhave, sammāsamādhī"ti.'
const V8K = '"비구들이여, 바른 삼매(正定)란 무엇인가? 감각적 욕망을 떠나고 불선법을 떠나, 위딱까·위짜라가 있는, 떠남에서 생긴 희열과 즐거움이 있는 초선(初禪)에 들어 머문다. 이어서 이선·삼선·사선에 차례로 들어 머문다 — 비구들이여, 이것을 바른 삼매(사선정)라 한다."'

export const LESSON_SN45_8: StepType[] = [
  { type: 'intro', icon: '☸️', title: '도 분별경', subtitle: 'Vibhaṅga Sutta (SN 45.8)',
    description: '팔정도의 여덟 항목 각각을 상세히 정의·분별하는 경.\n사성제 → 팔정도 → 각 항목의 정의로 이어집니다.' },

  { type: 'verse', pali: V_OPENING, pronKo: '아리양 워, 빅카웨, 앗탕기깡 막강 데셋사미 위바짓사미...',
    translation: V_OPENINGK, highlight: ['ariyaṁ', 'aṭṭhaṅgikaṁ', 'maggaṁ', 'desessāmi', 'vibhajissāmi'],
    note: '서두 — 붓다께서 팔정도를 분별하여 설하시겠다 선언.' },

  { type: 'teach', icon: '❓', word: 'Katamo', pronKo: '까따모', meaning: '어떤 것인가? (남성)',
    grammar: '의문 대명사 (성별 변화)', baseForm: 'katama',
    formNote: 'katamo(남성) / katamā(여성) / katamaṁ(중성). 매 항목 정의 앞에 등장.',
    verseLine: V_QUESTION, verseLineKo: V_QUESTIONK, audio: true },

  { type: 'verse', pali: V_QUESTION, pronKo: '까따모 짜 빅카웨 아리요 앗탕기꼬 막고...',
    translation: V_QUESTIONK, highlight: ['sammādiṭṭhi', 'sammāsaṅkappo', 'sammāvācā', 'sammākammanto', 'sammāājīvo', 'sammāvāyāmo', 'sammāsati', 'sammāsamādhi'],
    note: '☸️ 팔정도의 여덟 이름이 한 자리에 모입니다.' },

  // === 1. 정견 ===
  { type: 'teach', icon: '🧠', word: 'sammādiṭṭhi', pronKo: '삼마딧티', meaning: '바른 견해 (正見)',
    grammar: '여성명사 주격', baseForm: 'sammā(바른) + diṭṭhi(견해)',
    buddhism: '사성제(고·집·멸·도)에 대한 앎이 정견.', verseLine: V1, verseLineKo: V1K, audio: true },
  { type: 'verse', pali: V1, pronKo: '까따마 짜 빅카웨 삼마딧티...',
    translation: V1K, highlight: ['dukkhe ñāṇaṁ', 'dukkhasamudaye', 'dukkhanirodhe', 'dukkhanirodhagāminiyā'],
    note: '정견 = 사성제에 대한 앎.' },

  // === 2. 정사유 ===
  { type: 'teach', icon: '🕊️', word: 'sammāsaṅkappo', pronKo: '삼마상깝뽀', meaning: '바른 사유 (正思惟)',
    grammar: '남성명사 주격', baseForm: 'sammā + saṅkappa(사유)',
    buddhism: '출리·악의 없음·해치지 않음의 세 사유.', verseLine: V2, verseLineKo: V2K, audio: true },
  { type: 'verse', pali: V2, pronKo: '까따모 짜 빅카웨 삼마상깝뽀...',
    translation: V2K, highlight: ['nekkhammasaṅkappo', 'abyāpādasaṅkappo', 'avihiṁsāsaṅkappo'],
    note: '정사유 = 출리·선의·불해.' },

  // === 3. 정어 ===
  { type: 'teach', icon: '🗣️', word: 'sammāvācā', pronKo: '삼마와짜', meaning: '바른 말 (正語)',
    grammar: '여성명사 주격', baseForm: 'sammā + vācā(말)',
    buddhism: '거짓·이간·악구·잡담을 삼감.', verseLine: V3, verseLineKo: V3K, audio: true },
  { type: 'verse', pali: V3, pronKo: '까따마 짜 빅카웨 삼마와짜...',
    translation: V3K, highlight: ['musāvādā', 'pisuṇāya', 'pharusāya', 'samphappalāpā'],
    note: '정어의 네 가지 — 망어·양설·악구·기어.' },

  // === 4. 정업 ===
  { type: 'teach', icon: '🤲', word: 'sammākammanto', pronKo: '삼마깜만또', meaning: '바른 행위 (正業)',
    grammar: '남성명사 주격', baseForm: 'sammā + kammanta(행위)',
    buddhism: '살생·도둑질·삿된 행을 삼감.', verseLine: V4, verseLineKo: V4K, audio: true },
  { type: 'verse', pali: V4, pronKo: '까따모 짜 빅카웨 삼마깜만또...',
    translation: V4K, highlight: ['pāṇātipātā', 'adinnādānā', 'abrahmacariyā'],
    note: '정업의 세 가지 — 불살생·불투도·불음행.' },

  // === 5. 정명 ===
  { type: 'teach', icon: '💼', word: 'sammāājīvo', pronKo: '삼마아지오', meaning: '바른 생계 (正命)',
    grammar: '남성명사 주격', baseForm: 'sammā + ājīva(생계)',
    buddhism: '삿된 생계를 버리고 바른 생계로 삶.', verseLine: V5, verseLineKo: V5K, audio: true },
  { type: 'verse', pali: V5, pronKo: '까따모 짜 빅카웨 삼마아지오...',
    translation: V5K, highlight: ['micchāājīvaṁ', 'sammāājīvena'], note: '정명 — 정당한 직업으로 살아감.' },

  // === 6. 정정진 ===
  { type: 'teach', icon: '🔥', word: 'sammāvāyāmo', pronKo: '삼마와야모', meaning: '바른 정진 (正精進)',
    grammar: '남성명사 주격', baseForm: 'sammā + vāyāma(정진)',
    buddhism: '사정근(四正勤): 미생악·이생악·미생선·이생선의 네 항목.', verseLine: V6, verseLineKo: V6K, audio: true },
  { type: 'verse', pali: V6, pronKo: '까따모 짜 빅카웨 삼마와야모...',
    translation: V6K, highlight: ['anuppannānaṁ', 'uppannānaṁ', 'pāpakānaṁ', 'kusalānaṁ'],
    note: '정정진 — 사정근(불선 막기·끊기 / 선 일으키기·기르기).' },

  // === 7. 정념 ===
  { type: 'teach', icon: '🧘', word: 'sammāsati', pronKo: '삼마사띠', meaning: '바른 마음챙김 (正念)',
    grammar: '여성명사 주격', baseForm: 'sammā + sati(마음챙김)',
    buddhism: '사념처(四念處): 신·수·심·법 관찰. 다음 11과에서 자세히 다룸.', verseLine: V7, verseLineKo: V7K, audio: true },
  { type: 'verse', pali: V7, pronKo: '까따마 짜 빅카웨 삼마사띠...',
    translation: V7K, highlight: ['kāye', 'vedanāsu', 'citte', 'dhammesu', 'ātāpī', 'sampajāno', 'satimā'],
    note: '정념 — 사념처(身·受·心·法 관찰).' },

  // === 8. 정정 ===
  { type: 'teach', icon: '🪷', word: 'sammāsamādhi', pronKo: '삼마사마디', meaning: '바른 삼매 (正定)',
    grammar: '남성명사 주격', baseForm: 'sammā + samādhi(삼매)',
    buddhism: '사선정(四禪定): 초선·이선·삼선·사선.', verseLine: V8, verseLineKo: V8K, audio: true },
  { type: 'verse', pali: V8, pronKo: '까따모 짜 빅카웨 삼마사마디...',
    translation: V8K, highlight: ['paṭhamaṁ jhānaṁ', 'dutiyaṁ jhānaṁ', 'tatiyaṁ jhānaṁ', 'catutthaṁ jhānaṁ'],
    note: '정정 — 초·이·삼·사선의 네 단계 선정.' },

  { type: 'quiz', question: '"sammādiṭṭhi(정견)"의 내용은?',
    options: ['사성제에 대한 앎', '명상의 첫 단계', '계율 수행', '좋은 행동'], answer: 0 },

  { type: 'quiz', question: '"sammāsaṅkappo"의 세 요소는?',
    options: ['출리·선의·불해', '계·정·혜', '고·집·멸', '신·구·의'], answer: 0 },

  { type: 'quiz', question: '"sammāvācā(정어)"가 다루는 네 항목은?',
    options: ['망어·양설·악구·기어', '살·도·음·망', '탐·진·치·만', '신·구·의·식'], answer: 0 },

  { type: 'quiz', question: '"sammāvāyāmo(정정진)"의 사정근(四正勤)은?',
    options: ['선·악 일으키기·끊기 4가지', '사선정', '사성제', '사념처'], answer: 0 },

  { type: 'quiz', question: '"sammāsati(정념)"의 구체적 실천은?',
    options: ['사념처(신·수·심·법)', '사선정', '사무량심', '사정근'], answer: 0 },

  { type: 'quiz', question: '"sammāsamādhi(정정)"의 네 단계는?',
    options: ['초선·이선·삼선·사선', '예류·일래·불환·아라한', '사성제', '사념처'], answer: 0 },

  { type: 'writing', instruction: '"앎, 지혜"를 빠알리어로 써보세요',
    meaning: '앎, 지혜', pronKo: '냐낭', answer: 'ñāṇaṁ', hint: 'ñ로 시작' },

  { type: 'speak', pali: 'sammādiṭṭhi sammāsaṅkappo sammāvācā sammākammanto sammāājīvo sammāvāyāmo sammāsati sammāsamādhi',
    pronKo: '삼마딧티 삼마상깝뽀 삼마와짜 삼마깜만또 삼마아지오 삼마와야모 삼마사띠 삼마사마디' },
]
