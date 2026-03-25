import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import BottomNav from './BottomNav'

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    speechSynthesis.cancel()
  }, [location.pathname])

  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)' }}>
      <main className="flex-1 overflow-y-auto overflow-x-hidden">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  )
}
