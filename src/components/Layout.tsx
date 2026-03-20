import { Outlet } from 'react-router-dom'
import BottomNav from './BottomNav'

export default function Layout() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)' }}>
      <main className="pb-20 min-h-screen max-w-md mx-auto">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  )
}
