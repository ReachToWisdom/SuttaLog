import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import BottomNav from './BottomNav'

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    speechSynthesis.cancel()
  }, [location.pathname])

  return (
    <div className="min-h-dvh flex flex-col" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)' }}>
      <main className="flex-1 pb-16 overflow-y-auto">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  )
}
