import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import BottomNav from './BottomNav'

export default function Layout() {
  const location = useLocation()

  // 페이지 이동 시 TTS 중단
  useEffect(() => {
    speechSynthesis.cancel()
  }, [location.pathname])

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)' }}>
      <main className="pb-20 min-h-screen max-w-md mx-auto">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  )
}
