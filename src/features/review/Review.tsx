// SRS 복습 화면 (플래시카드)
import { useState } from 'react'

const MOCK_CARDS = [
  { front: 'Mettā', back: '자비, 자애', source: '기초단어 2과', example: 'Mettā sahagatena cetasā' },
  { front: 'Dukkha', back: '고, 괴로움, 불만족', source: '사성제 1과', example: 'Idaṃ dukkhaṃ ariyasaccaṃ' },
  { front: 'Anicca', back: '무상, 영원하지 않은', source: '삼법인 3과', example: 'Sabbe saṅkhārā aniccā' },
  { front: 'Paññā', back: '지혜, 반야', source: '삼학 2과', example: 'Paññāya cassa disvā' },
  { front: 'Saṅgha', back: '승가, 공동체', source: '삼보 1과', example: 'Saṅghaṃ saraṇaṃ gacchāmi' },
]

export default function Review() {
  const [cardIndex, setCardIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [done, setDone] = useState(false)

  const card = MOCK_CARDS[cardIndex]
  const remaining = MOCK_CARDS.length - cardIndex

  const rate = (_level: string) => {
    setFlipped(false)
    if (cardIndex + 1 >= MOCK_CARDS.length) {
      setDone(true)
    } else {
      setCardIndex(i => i + 1)
    }
  }

  if (done) {
    return (
      <div className="px-4 pt-20 text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h1 className="text-xl font-bold">복습 완료!</h1>
        <p className="text-sm mt-2" style={{ color: 'var(--color-text-secondary)' }}>
          오늘 5장의 카드를 복습했습니다
        </p>
        <div className="mt-6 rounded-2xl p-4" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
          <div className="flex justify-between text-sm">
            <span>복습 카드</span><span className="font-bold">5장</span>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span>획득 공덕</span><span className="font-bold" style={{ color: 'var(--color-primary)' }}>+15 💎</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="px-4 pt-6">
      {/* 헤더 */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold">🔄 복습</h1>
        <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{remaining}장 남음</span>
      </div>

      {/* 진행바 */}
      <div className="h-1.5 rounded-full mb-6 overflow-hidden" style={{ backgroundColor: 'var(--color-border)' }}>
        <div className="h-full rounded-full transition-all" style={{ width: `${(cardIndex / MOCK_CARDS.length) * 100}%`, backgroundColor: 'var(--color-accent)' }} />
      </div>

      {/* 카드 */}
      <button
        onClick={() => !flipped && setFlipped(true)}
        className="w-full rounded-2xl p-6 min-h-[280px] flex flex-col justify-center items-center text-center transition-all active:scale-[0.98]"
        style={{ backgroundColor: 'var(--color-surface)', border: '2px solid var(--color-border)' }}
      >
        {/* 출처 */}
        <span className="text-xs mb-4" style={{ color: 'var(--color-text-secondary)' }}>{card.source}</span>

        {/* 앞면 */}
        <p className="pali-text text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>{card.front}</p>

        {/* 발음 버튼 */}
        <button className="mt-3 text-sm flex items-center gap-1" style={{ color: 'var(--color-accent)' }}
          onClick={e => { e.stopPropagation() }}>
          🔊 발음 듣기
        </button>

        {flipped && (
          <>
            <hr className="w-full my-4" style={{ borderColor: 'var(--color-border)' }} />
            <p className="text-xl font-semibold">{card.back}</p>
            <p className="text-xs pali-text mt-3" style={{ color: 'var(--color-text-secondary)' }}>
              📖 {card.example}
            </p>
          </>
        )}

        {!flipped && (
          <p className="text-xs mt-6" style={{ color: 'var(--color-text-secondary)' }}>탭하여 뜻 보기</p>
        )}
      </button>

      {/* SRS 평가 버튼 */}
      {flipped && (
        <div className="grid grid-cols-3 gap-3 mt-6">
          <button onClick={() => rate('hard')}
            className="py-4 rounded-xl text-center active:scale-95 transition-transform"
            style={{ backgroundColor: '#FFEBEE', border: '2px solid #EF5350' }}>
            <span className="text-xl">😰</span>
            <p className="text-xs font-bold mt-1" style={{ color: '#EF5350' }}>어려움</p>
            <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-secondary)' }}>1일 후</p>
          </button>
          <button onClick={() => rate('good')}
            className="py-4 rounded-xl text-center active:scale-95 transition-transform"
            style={{ backgroundColor: '#FFF8E1', border: '2px solid #FFA726' }}>
            <span className="text-xl">🤔</span>
            <p className="text-xs font-bold mt-1" style={{ color: '#F57C00' }}>보통</p>
            <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-secondary)' }}>3일 후</p>
          </button>
          <button onClick={() => rate('easy')}
            className="py-4 rounded-xl text-center active:scale-95 transition-transform"
            style={{ backgroundColor: '#E8F5E9', border: '2px solid #66BB6A' }}>
            <span className="text-xl">😊</span>
            <p className="text-xs font-bold mt-1" style={{ color: '#2E7D32' }}>쉬움</p>
            <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-secondary)' }}>7일 후</p>
          </button>
        </div>
      )}
    </div>
  )
}
