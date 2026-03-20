// 프로필/나 화면
import { useNavigate } from 'react-router-dom'

const ACHIEVEMENTS = [
  { icon: '🪷', title: '첫 레슨 완료', desc: '학습의 첫 걸음' },
  { icon: '🔥', title: '7일 연속 수행', desc: '정진의 시작' },
  { icon: '📜', title: '경전 첫 해석', desc: 'Dhammapada 1게 완료' },
  { icon: '💎', title: '100 공덕', desc: '꾸준한 수행의 결실' },
  { icon: '📚', title: '50단어 마스터', desc: '어휘의 기초' },
  { icon: '⭐', title: '완벽 레슨 5회', desc: '오답 없이 완료' },
  { icon: '🔒', title: '???', desc: '14일 연속 수행 시 해제' },
  { icon: '🔒', title: '???', desc: '100단어 마스터 시 해제' },
]

export default function Profile() {
  const nav = useNavigate()

  return (
    <div className="px-4 pt-6 space-y-5">
      {/* 프로필 헤더 */}
      <div className="rounded-2xl p-5 text-center"
        style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
        <div className="text-5xl mb-3">🧘</div>
        <h2 className="font-bold text-lg">법학자 <span style={{ color: 'var(--color-primary)' }}>Lv.7</span></h2>
        <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>Dhammavidu</p>

        {/* XP 바 */}
        <div className="mt-3">
          <div className="flex justify-between text-xs mb-1" style={{ color: 'var(--color-text-secondary)' }}>
            <span>1,250 / 1,500 XP</span>
            <span>다음: 경론자</span>
          </div>
          <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--color-border)' }}>
            <div className="h-full rounded-full" style={{ width: '83%', backgroundColor: 'var(--color-primary)' }} />
          </div>
        </div>
      </div>

      {/* 통계 4박스 */}
      <div className="grid grid-cols-2 gap-3">
        {[
          { icon: '🔥', value: '14일', label: '연속 수행' },
          { icon: '📚', value: '89', label: '학습 단어' },
          { icon: '⏱', value: '42시간', label: '총 학습' },
          { icon: '🏅', value: '6/20', label: '업적' },
        ].map((s, i) => (
          <div key={i} className="rounded-xl p-4 text-center"
            style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
            <span className="text-2xl">{s.icon}</span>
            <p className="font-bold text-lg mt-1" style={{ color: 'var(--color-primary)' }}>{s.value}</p>
            <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* 주간 그래프 */}
      <div className="rounded-2xl p-4"
        style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
        <p className="text-sm font-semibold mb-3">📊 이번 주 학습</p>
        <div className="flex items-end justify-between h-24 gap-2">
          {[80, 60, 100, 40, 0, 0, 0].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full rounded-t-md transition-all"
                style={{
                  height: `${h}%`,
                  backgroundColor: h > 0 ? 'var(--color-primary)' : 'var(--color-border)',
                  opacity: h > 0 ? (i < 4 ? 1 : 0.3) : 0.2,
                  minHeight: 4,
                }} />
              <span className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                {['월', '화', '수', '목', '금', '토', '일'][i]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 업적 */}
      <div>
        <p className="text-sm font-semibold mb-3">🏅 업적</p>
        <div className="grid grid-cols-4 gap-3">
          {ACHIEVEMENTS.map((a, i) => (
            <div key={i} className="rounded-xl p-3 text-center"
              style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', opacity: a.icon === '🔒' ? 0.4 : 1 }}>
              <span className="text-2xl">{a.icon}</span>
              <p className="text-xs font-medium mt-1 truncate">{a.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 메뉴 */}
      <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
        {[
          { icon: '⚙️', label: '설정', to: '/settings' },
          { icon: '📤', label: '학습 데이터 내보내기', to: '#' },
          { icon: '❓', label: '도움말', to: '#' },
        ].map((item, i) => (
          <button key={i} onClick={() => nav(item.to)}
            className="w-full flex items-center gap-3 px-4 py-3.5 text-sm text-left border-b last:border-b-0"
            style={{ borderColor: 'var(--color-border)' }}>
            <span>{item.icon}</span>
            <span>{item.label}</span>
            <span className="ml-auto" style={{ color: 'var(--color-text-secondary)' }}>→</span>
          </button>
        ))}
      </div>
    </div>
  )
}
