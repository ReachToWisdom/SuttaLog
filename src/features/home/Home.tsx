// 홈 대시보드
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const nav = useNavigate()

  return (
    <div className="px-4 pt-6 space-y-5">
      {/* 헤더 */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold" style={{ color: 'var(--color-primary)' }}>🪷 SuttaLog</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm">🔥 14</span>
          <span className="text-sm">💎 250</span>
          <span className="text-sm">🪷 3</span>
        </div>
      </div>

      {/* 스트릭 + 오늘 목표 */}
      <div className="rounded-2xl p-4" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold">🔥 수행 14일째</span>
          <span className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>오늘 목표 3/4</span>
        </div>
        <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--color-border)' }}>
          <div className="h-full rounded-full" style={{ width: '75%', backgroundColor: 'var(--color-primary)' }} />
        </div>
        <div className="flex justify-between mt-3 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
          {['월', '화', '수', '목', '금', '토', '일'].map((d, i) => (
            <div key={d} className="flex flex-col items-center gap-1">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${i < 4 ? 'text-white' : ''}`}
                style={{ backgroundColor: i < 4 ? 'var(--color-accent)' : 'var(--color-border)' }}>
                {i < 4 ? '✓' : ''}
              </span>
              <span>{d}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 메인 CTA: 이어서 학습하기 */}
      <button
        onClick={() => nav('/learn/scripture/dhp1-alphabet')}
        className="w-full rounded-2xl p-5 text-left text-white active:scale-[0.98] transition-transform"
        style={{ backgroundColor: 'var(--color-primary)' }}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs opacity-80">이어서 학습하기</p>
            <p className="text-lg font-bold mt-1">제6과: 동사 활용</p>
            <p className="text-xs opacity-80 mt-1">레슨 3/5 · 크라운 ⭐⭐☆☆☆</p>
          </div>
          <span className="text-4xl">▶</span>
        </div>
      </button>

      {/* 보조 CTA 2개 */}
      <div className="grid grid-cols-2 gap-3">
        <button onClick={() => nav('/review')}
          className="rounded-xl p-4 text-left active:scale-[0.97] transition-transform"
          style={{ backgroundColor: 'var(--color-surface)', border: '2px solid var(--color-accent)' }}>
          <span className="text-2xl">🔄</span>
          <p className="font-bold text-sm mt-2">복습하기</p>
          <p className="text-xs mt-1" style={{ color: 'var(--color-accent)' }}>12단어 대기 중</p>
        </button>
        <button onClick={() => nav('/read/dhp1')}
          className="rounded-xl p-4 text-left active:scale-[0.97] transition-transform"
          style={{ backgroundColor: 'var(--color-surface)', border: '2px solid var(--color-primary)' }}>
          <span className="text-2xl">📖</span>
          <p className="font-bold text-sm mt-2">경전 읽기</p>
          <p className="text-xs mt-1" style={{ color: 'var(--color-primary)' }}>법구경 23/423</p>
        </button>
      </div>

      {/* 오늘의 빠알리어 */}
      <div className="rounded-2xl p-4" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
        <p className="text-xs font-semibold mb-2" style={{ color: 'var(--color-text-secondary)' }}>💡 오늘의 빠알리어</p>
        <p className="pali-text text-xl font-semibold" style={{ color: 'var(--color-primary)' }}>
          "Sukhi hontu"
        </p>
        <p className="text-sm mt-1">수키 혼뚜</p>
        <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>"행복하시길" — 자애 명상(Mettā) 구절</p>
      </div>

      {/* 학습 통계 */}
      <div className="rounded-2xl p-4" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
        <p className="text-xs font-semibold mb-3" style={{ color: 'var(--color-text-secondary)' }}>📊 나의 학습</p>
        <div className="grid grid-cols-3 gap-3 text-center">
          <div>
            <p className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>89</p>
            <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>학습 단어</p>
          </div>
          <div>
            <p className="text-2xl font-bold" style={{ color: 'var(--color-accent)' }}>42</p>
            <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>총 학습 시간</p>
          </div>
          <div>
            <p className="text-2xl font-bold" style={{ color: '#F5A623' }}>8</p>
            <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>획득 업적</p>
          </div>
        </div>
      </div>
    </div>
  )
}
