// 11과: 마음챙김 확립의 큰 경(Mahāsatipaṭṭhāna Sutta, MN 10 / DN 22)
// 출처: DOCS/제11과. 마음챙김 확립의 큰 경.txt
// 구조: 총설 + 신·수·심·법 4염처(총 21단원) + 결론
import type { StepType } from './lesson-data-sn56-11'

const V_OPEN = 'Evaṁ me sutaṁ — ekaṁ samayaṁ bhagavā kurūsu viharati kammāsadhammaṁ nāma kurūnaṁ nigamo. Tatra kho bhagavā bhikkhū āmantesi — "bhikkhavo"ti. "Bhaddante"ti te bhikkhū bhagavato paccassosuṁ. Bhagavā etadavoca —'
const V_OPENK = '이와 같이 나는 들었다. 어느 때 세존께서 꾸루 사람들의 마을, 깜마사담마라는 곳에 머무셨다. 거기서 세존께서 비구들을 부르셨다. "비구들이여." "스승님" 하고 비구들이 응답하였다. 세존께서 이렇게 말씀하셨다 —'

const V_UDDESA = '"Ekāyano ayaṁ, bhikkhave, maggo sattānaṁ visuddhiyā, sokaparidevānaṁ samatikkamāya, dukkhadomanassānaṁ atthaṅgamāya, ñāyassa adhigamāya, nibbānassa sacchikiriyāya — yadidaṁ cattāro satipaṭṭhānā. Katame cattāro? Idha, bhikkhave, bhikkhu kāye kāyānupassī viharati ātāpī sampajāno satimā vineyya loke abhijjhādomanassaṁ; vedanāsu vedanānupassī ...; citte cittānupassī ...; dhammesu dhammānupassī viharati ātāpī sampajāno satimā vineyya loke abhijjhādomanassaṁ."'
const V_UDDESAK = '"비구들이여, 중생의 청정·슬픔과 비탄의 극복·고통과 불쾌의 소멸·바른 도의 증득·열반의 실현을 위한 단 하나의 길이 있으니, 그것은 네 가지 마음챙김의 확립이다. 무엇이 넷인가? 비구는 ① 몸에서 몸을 ② 느낌에서 느낌을 ③ 마음에서 마음을 ④ 법에서 법을 따라 관찰하며 머문다 — 열심히, 분명히 알며, 마음챙기며, 세상에 대한 욕망과 근심을 다스리면서."'

const V_REFRAIN = 'iti ajjhattaṁ vā [X] viharati, bahiddhā vā [X] viharati, ajjhattabahiddhā vā [X] viharati. Samudayadhammānupassī ... vayadhammānupassī ... samudayavayadhammānupassī vā [X] viharati. \'Atthi [X]\'ti vā panassa sati paccupaṭṭhitā hoti yāvadeva ñāṇamattāya paṭissatimattāya, anissito ca viharati, na ca kiñci loke upādiyati.'
const V_REFRAINK = '(각 단원의 후렴 정형구) 안으로·밖으로·안팎으로 [대상]을 관찰. 일어나는 법·사라지는 법·일어남과 사라지는 법을 관찰. "[대상]이 있다"는 마음챙김이 앎과 새김에 충분한 만큼 확립되어, 어떤 것에도 의존하지 않고 머문다.'

const V_BODY1 = '① ānāpānapabbaṁ (호흡): araññagato vā rukkhamūlagato vā suññāgāragato vā nisīdati pallaṅkaṁ ābhujitvā ujuṁ kāyaṁ paṇidhāya parimukhaṁ satiṁ upaṭṭhapetvā. So satova assasati, satova passasati. Dīghaṁ/rassaṁ assasanto/passasanto pajānāti. \'Sabbakāyapaṭisaṁvedī assasissāmī\'ti sikkhati ... \'passambhayaṁ kāyasaṅkhāraṁ\'ti sikkhati. (예: 노련한 도공처럼)'
const V_BODY1K = '① 호흡 — 한적한 곳에 가부좌하고 몸을 곧게 하여 앞에 마음챙김을 둠. 길게·짧게 들이쉬고 내쉼을 안다. 온몸을 느끼며·몸의 작용을 가라앉히며 호흡함을 익힘. (능숙한 도공이 길고 짧음을 알듯)'

const V_BODY2 = '② iriyāpathapabbaṁ (자세): gacchanto \'gacchāmī\'ti, ṭhito \'ṭhitomhī\'ti, nisinno \'nisinnomhī\'ti, sayāno \'sayānomhī\'ti pajānāti. Yathā yathā vā panassa kāyo paṇihito hoti, tathā tathā naṁ pajānāti.'
const V_BODY2K = '② 자세 — 걸을 때 "걷는다", 설 때 "선다", 앉을 때 "앉는다", 누울 때 "눕는다"를 안다. 몸이 어떻게 놓이든 그대로 안다.'

const V_BODY3 = '③ sampajānapabbaṁ (분명한 앎): abhikkante paṭikkante, ālokite vilokite, samiñjite pasārite, saṅghāṭipattacīvaradhāraṇe, asite pīte khāyite sāyite, uccārapassāvakamme, gate ṭhite nisinne sutte jāgarite bhāsite tuṇhībhāve — sampajānakārī hoti.'
const V_BODY3K = '③ 분명한 앎 — 나아갈 때·돌아올 때, 앞을 볼 때·옆을 볼 때, 굽힐 때·펼 때, 가사·발우를 들 때, 먹고 마시고 씹고 맛볼 때, 대소변을 볼 때, 가고·서고·앉고·자고·깰 때, 말할 때·침묵할 때 — 분명히 알며 행한다.'

const V_BODY4 = '④ paṭikūlamanasikārapabbaṁ (32신분): imameva kāyaṁ uddhaṁ pādatalā adho kesamatthakā tacapariyantaṁ pūraṁ nānappakārassa asucino paccavekkhati — kesā lomā nakhā dantā taco, maṁsaṁ nhāru aṭṭhi aṭṭhimiñjaṁ vakkaṁ, hadayaṁ yakanaṁ kilomakaṁ pihakaṁ papphāsaṁ, antaṁ antaguṇaṁ udariyaṁ karīsaṁ, pittaṁ semhaṁ pubbo lohitaṁ sedo medo, assu vasā kheḷo siṅghāṇikā lasikā muttaṁ. (양구녕 자루의 곡물 비유)'
const V_BODY4K = '④ 32신분 — 발바닥에서 머리끝까지 살갗으로 둘러싸인 이 몸을 부정한 여러 가지로 가득 찼다고 관찰: 머리카락·털·손톱·이·살갗 / 살·힘줄·뼈·골수·콩팥 / 심장·간·횡격막·비장·폐 / 창자·장간막·위장의 음식·똥 / 담즙·가래·고름·피·땀·기름 / 눈물·기름덩이·침·콧물·관절액·오줌. (양 끝 자루에 든 갖가지 곡물을 보듯)'

const V_BODY5 = '⑤ dhātumanasikārapabbaṁ (4대): imameva kāyaṁ yathāṭhitaṁ yathāpaṇihitaṁ dhātuso paccavekkhati — \'atthi imasmiṁ kāye pathavīdhātu āpodhātu tejodhātu vāyodhātū\'ti. (능숙한 소잡이가 사거리에서 분해해 앉듯)'
const V_BODY5K = '⑤ 4대 요소 — 이 몸을 있는 그대로 요소별로 관찰: "이 몸에는 지대(地)·수대(水)·화대(火)·풍대(風)가 있다." (능숙한 도살자가 소를 사거리에서 부위별로 펼쳐놓고 보듯)'

const V_BODY6 = '⑥-⑭ navasivathikapabbaṁ (9가지 시체관): 시체가 ① 부풀어 변색·부패함 / ② 새·짐승에 먹힘 / ③ 살·피·힘줄 붙은 해골 / ④ 살은 없고 피와 힘줄만 / ⑤ 살·피 없이 힘줄만 / ⑥ 흩어진 뼈 / ⑦ 조개껍데기처럼 흰 뼈 / ⑧ 한 해 넘은 무더기 뼈 / ⑨ 가루가 된 뼈. — 각각에서 "이 몸도 이와 같은 법, 이같이 됨, 이를 면치 못함"이라 봄.'
const V_BODY6K = '⑥~⑭ 9가지 시체 관찰 — 묘지에 버려진 시체의 9단계(부풂·짐승에 먹힘·살피힘줄 해골·살 없는 해골·뼈만·흩어진 뼈·흰 뼈·해묵은 뼈·가루뼈)를 보고 "내 몸도 이러한 법이며 이를 면치 못한다"고 자신의 몸을 견줌. 신념처 14단원 종료.'

const V_VEDANA = '受念處: sukhaṁ vā vedanaṁ vedayamāno \'sukhaṁ vedanaṁ vedayāmī\'ti pajānāti / dukkhaṁ / adukkhamasukhaṁ. Sāmisaṁ vā ... nirāmisaṁ vā sukhaṁ/dukkhaṁ/adukkhamasukhaṁ vedanaṁ. (총 9종 = 3 × 2 + 3) → 후렴 정형구.'
const V_VEDANAK = '受念處 — 즐거운 느낌을 느낄 때 "즐거운 느낌을 느낀다"고 안다. 괴로운·중립의 느낌도 그러함. 그것이 세속적인지(sāmisa) 출세간적인지(nirāmisa)도 안다. 총 9가지 느낌. → 후렴 정형구 적용.'

const V_CITTA = '心念處: sarāgaṁ ↔ vītarāgaṁ / sadosaṁ ↔ vītadosaṁ / samohaṁ ↔ vītamohaṁ / saṅkhittaṁ ↔ vikkhittaṁ / mahaggataṁ ↔ amahaggataṁ / sauttaraṁ ↔ anuttaraṁ / samāhitaṁ ↔ asamāhitaṁ / vimuttaṁ ↔ avimuttaṁ cittaṁ — pajānāti. (8쌍 16종) → 후렴 정형구.'
const V_CITTAK = '心念處 — 마음의 16가지 상태(8쌍): 탐 있는/없는, 진 있는/없는, 치 있는/없는, 위축된/산만한, 광대한/광대하지 않은, 위가 있는/없는, 삼매에 든/들지 않은, 해탈한/해탈하지 않은 마음을 그대로 안다. → 후렴 정형구.'

const V_DHAMMA1 = '法念處-① nīvaraṇapabbaṁ (5개): 5장애 — kāmacchanda(욕망)·byāpāda(악의)·thinamiddha(혼침)·uddhaccakukkucca(들뜸·후회)·vicikicchā(의심) — 각 장애의 ① 있음/없음, ② 일어남, ③ 끊음, ④ 미래 일어남 막음을 안다.'
const V_DHAMMA1K = '法念處 ① 5개(蓋) — 다섯 장애(욕망·악의·혼침·들뜸·의심) 각각에 대해 (1) 안에 있음/없음 (2) 일어나는 조건 (3) 끊는 방법 (4) 다시 일어나지 않게 하는 법을 안다.'

const V_DHAMMA2 = '法念處-② khandhapabbaṁ (5취온): \'iti rūpaṁ, iti rūpassa samudayo, iti rūpassa atthaṅgamo\' — vedanā·saññā·saṅkhārā·viññāṇaṁ도 동일.'
const V_DHAMMA2K = '法念處 ② 5취온 — "이것이 색이다·이것이 색의 일어남·이것이 색의 사라짐"이라 봄. 수·상·행·식도 동일.'

const V_DHAMMA3 = '法念處-③ āyatanapabbaṁ (6내외처): cakkhu+rūpā / sota+saddā / ghāna+gandhā / jivhā+rasā / kāya+phoṭṭhabbā / mano+dhammā — 각 쌍에서 일어나는 결박(saṁyojana)의 ① 일어남 ② 끊음 ③ 재발 막음을 안다.'
const V_DHAMMA3K = '法念處 ③ 6내외처 — 안+색 / 귀+소리 / 코+냄새 / 혀+맛 / 몸+감촉 / 마음+법 — 6근과 6경, 그로 인해 일어나는 결박을 안다.'

const V_DHAMMA4 = '法念處-④ bojjhaṅgapabbaṁ (7각지): sati·dhammavicaya·vīriya·pīti·passaddhi·samādhi·upekkhā-sambojjhaṅga 각각에 대해 ① 있음/없음 ② 일어남 ③ 완성을 안다.'
const V_DHAMMA4K = '法念處 ④ 7각지(覺支) — 염각지·택법각지·정진각지·희각지·경안각지·정각지·사각지 — 각각의 있음/없음, 일어남, 완성을 안다.'

const V_DHAMMA5 = '法念處-⑤ saccapabbaṁ (4성제): \'idaṁ dukkhan\'ti / \'ayaṁ dukkhasamudayo\'ti / \'ayaṁ dukkhanirodho\'ti / \'ayaṁ dukkhanirodhagāminī paṭipadā\'ti yathābhūtaṁ pajānāti. (각 성제는 다시 jāti·jarā·maraṇa·soka·parideva 등으로 상세 분석되며, 도성제는 팔정도로 풀이됨.)'
const V_DHAMMA5K = '法念處 ⑤ 4성제 — "이것이 고이다 / 이것이 고의 일어남이다 / 이것이 고의 소멸이다 / 이것이 고의 소멸로 이끄는 길이다"라고 있는 그대로 안다. 각 성제는 다시 생·노·사·소·비·고·우·뇌 등으로 상세 분석되고, 도성제는 팔정도로 풀이됨.'

export const LESSON_MN10: StepType[] = [
  { type: 'intro', icon: '🧘', title: '마음챙김의 확립 큰 경', subtitle: 'Mahāsatipaṭṭhāna Sutta (MN 10 / DN 22)',
    description: '마음챙김 수행의 완전한 안내서.\n身·受·心·法 4염처에 21단원으로 펼쳐진 가장 상세한 수행 경전.\n사성제 → 팔정도 → 무아 → 자애를 거친 학습의 정점.' },

  { type: 'teach', icon: '🛤️', word: 'ekāyano maggo', pronKo: '에까야노 막고', meaning: '단 하나의 길',
    grammar: '형용사+명사', buddhism: '청정·열반에 이르는 유일한 길 = 사념처.', verseLine: V_UDDESA, verseLineKo: V_UDDESAK, audio: true },

  { type: 'teach', icon: '🧘', word: 'cattāro satipaṭṭhānā', pronKo: '짯따로 사띠빳타나', meaning: '네 가지 마음챙김의 확립',
    grammar: '복합어', buddhism: '신(kāya)·수(vedanā)·심(citta)·법(dhamma) 네 대상에 대한 관찰.', verseLine: V_UDDESA, verseLineKo: V_UDDESAK, audio: true },

  { type: 'teach', icon: '🔥', word: 'ātāpī sampajāno satimā', pronKo: '아따삐 삼빠자노 사띠마', meaning: '열심히·분명히 알며·마음챙기며',
    grammar: '3형용사', buddhism: '모든 단원에 반복되는 사념처 수행자의 세 자질.', verseLine: V_UDDESA, verseLineKo: V_UDDESAK, audio: true },

  { type: 'teach', icon: '👀', word: 'anupassī', pronKo: '아누빳시', meaning: '따라 관찰하는',
    grammar: '형용사', baseForm: 'anu(따라) + √pas(보다)', verseLine: V_UDDESA, verseLineKo: V_UDDESAK, audio: true },

  { type: 'verse', pali: V_OPEN, pronKo: '에왕 메 수땅 ... 바가와 에따다오짜 —',
    translation: V_OPENK, highlight: ['kurūsu', 'kammāsadhammaṁ'], note: '서두 — 꾸루 나라 깜마사담마 마을.' },

  { type: 'verse', pali: V_UDDESA, pronKo: '에까야노 아양 빅카웨 막고...',
    translation: V_UDDESAK, highlight: ['ekāyano', 'cattāro satipaṭṭhānā', 'kāye', 'vedanāsu', 'citte', 'dhammesu', 'ātāpī', 'sampajāno', 'satimā'],
    note: '총설(uddeso) — 사념처의 목적과 네 가지 대상.' },

  { type: 'verse', pali: V_REFRAIN, pronKo: '이띠 앗잣땅 와 [대상] 위하라띠 바힛다 와...',
    translation: V_REFRAINK, highlight: ['ajjhattaṁ', 'bahiddhā', 'samudaya', 'vaya', 'sati paccupaṭṭhitā'],
    note: '★ 정형 후렴구 — 모든 21단원이 이 구조로 마무리됩니다. (대상 = 몸/느낌/마음/법)' },

  // === 身念處 14단원 ===
  { type: 'verse', pali: V_BODY1, pronKo: '아란냐가또 와 룩카물라가또 와... 사또와 앗사사띠...',
    translation: V_BODY1K, highlight: ['ānāpāna', 'pallaṅkaṁ', 'satiṁ upaṭṭhapetvā', 'assasati', 'passasati'],
    note: '身① 호흡 — 사념처 수행의 출발점.' },

  { type: 'verse', pali: V_BODY2, pronKo: '갓찬또 갓차미띠... 사야노 사야놈히띠...',
    translation: V_BODY2K, highlight: ['gacchanto', 'ṭhito', 'nisinno', 'sayāno'], note: '身② 자세 — 가·서·앉·누움 4자세.' },

  { type: 'verse', pali: V_BODY3, pronKo: '아빅깐떼 빠띡깐떼... 삼빠자나까리 호띠.',
    translation: V_BODY3K, highlight: ['sampajānakārī'], note: '身③ 분명한 앎 — 일상 모든 행위.' },

  { type: 'verse', pali: V_BODY4, pronKo: '이마메와 까양 웃당 빠다딸라 아도 께사맛타까...',
    translation: V_BODY4K, highlight: ['kesā lomā nakhā dantā taco', '32 신분'], note: '身④ 32신분(부정관) — 몸의 부정성.' },

  { type: 'verse', pali: V_BODY5, pronKo: '이마메와 까양 ... 다뚜소 빳짜웩카띠...',
    translation: V_BODY5K, highlight: ['pathavīdhātu', 'āpodhātu', 'tejodhātu', 'vāyodhātu'], note: '身⑤ 4대 요소 — 지·수·화·풍.' },

  { type: 'verse', pali: V_BODY6, pronKo: '시와티까야 찻디땅... (9 단계)',
    translation: V_BODY6K, highlight: ['navasivathika', 'evaṁdhammo', 'evaṁbhāvī', 'evaṁanatīto'],
    note: '身⑥~⑭ 9시체관 — 신념처 14단원 완료. 모든 단원은 후렴 정형구로 마침.' },

  // === 受念處 ===
  { type: 'verse', pali: V_VEDANA, pronKo: '수캉 와 웨다낭 웨다야마노 수캉 웨다낭 웨다야미띠 빠자나띠...',
    translation: V_VEDANAK, highlight: ['sukhaṁ', 'dukkhaṁ', 'adukkhamasukhaṁ', 'sāmisaṁ', 'nirāmisaṁ'],
    note: '受念處 — 9가지 느낌의 자각.' },

  // === 心念處 ===
  { type: 'verse', pali: V_CITTA, pronKo: '사라강 와 찟땅 사라강 찟딴띠 빠자나띠...',
    translation: V_CITTAK, highlight: ['sarāgaṁ', 'sadosaṁ', 'samohaṁ', 'saṅkhittaṁ', 'vimuttaṁ'],
    note: '心念處 — 마음 16상태(8쌍).' },

  // === 法念處 5단원 ===
  { type: 'verse', pali: V_DHAMMA1, pronKo: '산땅 와 앗잣땅 까마찬당 앗티 메 앗잣땅 까마찬도띠 빠자나띠...',
    translation: V_DHAMMA1K, highlight: ['kāmacchanda', 'byāpāda', 'thinamiddha', 'uddhaccakukkucca', 'vicikicchā'],
    note: '法① 5개(蓋) — 5장애의 자각.' },

  { type: 'verse', pali: V_DHAMMA2, pronKo: '이띠 루빵 이띠 루빳사 사무다요 이띠 루빳사 앗탕가모...',
    translation: V_DHAMMA2K, highlight: ['rūpaṁ', 'samudayo', 'atthaṅgamo', 'pañcupādānakkhandhā'],
    note: '法② 5취온 — 일어남과 사라짐.' },

  { type: 'verse', pali: V_DHAMMA3, pronKo: '짝쿤짜 빠자나띠 루뻬 짜 빠자나띠... 마난짜 ... 담메 짜...',
    translation: V_DHAMMA3K, highlight: ['cakkhu', 'sota', 'ghāna', 'jivhā', 'kāya', 'mano', 'saṁyojana'],
    note: '法③ 6내외처 — 6근×6경 결박의 통찰.' },

  { type: 'verse', pali: V_DHAMMA4, pronKo: '산땅 와 앗잣땅 사띠삼봇장강... 담마위짜야... 위리야... 삐띠... 빳삿디... 사마디... 우뻭카...',
    translation: V_DHAMMA4K, highlight: ['sati', 'dhammavicaya', 'vīriya', 'pīti', 'passaddhi', 'samādhi', 'upekkhā'],
    note: '法④ 7각지 — 깨달음의 일곱 요소.' },

  { type: 'verse', pali: V_DHAMMA5, pronKo: '이당 둑칸띠 야타부땅 빠자나띠 / 아양 둑카사무다요 / 아양 둑카니로도 / 아양 둑카니로다가미니 빠띠빠다...',
    translation: V_DHAMMA5K, highlight: ['dukkhaṁ', 'samudayo', 'nirodho', 'paṭipadā', 'jāti', 'jarā', 'maraṇa'],
    note: '法⑤ 4성제 — 사념처의 정점. 도성제는 팔정도로 풀이.' },

  { type: 'quiz', question: '사념처(cattāro satipaṭṭhānā)의 네 가지는?',
    options: ['몸·느낌·마음·법', '고·집·멸·도', '계·정·혜·해탈', '색·수·상·행'], answer: 0 },

  { type: 'quiz', question: '"ekāyano maggo"의 뜻은?',
    options: ['단 하나의 길', '여러 길', '어려운 길', '긴 길'], answer: 0 },

  { type: 'quiz', question: '사념처 수행자의 3가지 자질은?',
    options: ['ātāpī(열심)·sampajāno(분명)·satimā(마음챙김)', '계·정·혜', '문·사·수', '신·구·의'], answer: 0 },

  { type: 'quiz', question: '신념처의 첫 단원은?',
    options: ['ānāpāna(호흡)', 'iriyāpatha(자세)', 'navasivathika(시체관)', '4대 요소'], answer: 0 },

  { type: 'quiz', question: '법념처의 5단원이 아닌 것은?',
    options: ['5개(蓋)', '5취온', '6내외처', '12연기'], answer: 3 },

  { type: 'writing', instruction: '"마음챙김의 확립"을 빠알리어로 써보세요',
    meaning: '마음챙김의 확립 (사념처)', pronKo: '사띠빳타나', answer: 'satipaṭṭhāna', hint: 'sati + paṭṭhāna' },

  { type: 'speak', pali: 'kāye kāyānupassī viharati ātāpī sampajāno satimā',
    pronKo: '까예 까야누빳시 위하라띠 아따삐 삼빠자노 사띠마' },

  { type: 'arrange', instruction: '신·수·심·법 네 대상을 순서대로 배열',
    translation: '몸·느낌·마음·법 (사념처의 네 대상)',
    blocks: ['vedanā', 'kāya', 'dhamma', 'citta'], correctOrder: [1, 0, 3, 2] },
]
