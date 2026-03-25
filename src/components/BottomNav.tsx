import { NavLink } from 'react-router-dom'

const TABS = [
  { to: '/', icon: '🏠', label: '홈' },
  { to: '/map', icon: '📖', label: '학습맵' },
  { to: '/review', icon: '🔄', label: '복습' },
  { to: '/profile', icon: '👤', label: '나' },
]

export default function BottomNav() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 flex justify-around items-center h-14 border-t max-w-[430px] mx-auto"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      {TABS.map(t => (
        <NavLink
          key={t.to}
          to={t.to}
          end={t.to === '/'}
          className={({ isActive }) =>
            `flex flex-col items-center gap-0.5 py-1 px-4 text-xs transition-all ${isActive ? 'scale-110' : 'opacity-50'}`
          }
          style={({ isActive }) => ({ color: isActive ? 'var(--color-primary)' : 'var(--color-text)' })}
        >
          <span className="text-xl">{t.icon}</span>
          <span className="font-medium">{t.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
