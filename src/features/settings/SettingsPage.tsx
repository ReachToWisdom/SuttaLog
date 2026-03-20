// 설정 페이지 — 초기화 + 소리 토글
import { useState } from 'react'

export default function SettingsPage() {
  const [soundOn, setSoundOn] = useState(localStorage.getItem('suttalog-sound') !== 'off')

  const toggleSound = () => {
    const next = !soundOn
    setSoundOn(next)
    localStorage.setItem('suttalog-sound', next ? 'on' : 'off')
    if (!next) speechSynthesis.cancel()
  }

  const resetAll = () => {
    if (!confirm('모든 학습 데이터를 초기화하시겠습니까?\n진도, 설정이 모두 삭제됩니다.')) return
    localStorage.clear()
    // IndexedDB 삭제
    indexedDB.deleteDatabase('suttalog')
    window.location.href = '/SuttaLog/'
  }

  return (
    <div className="px-4 pt-6 space-y-4">
      <h1 className="text-xl font-bold">⚙️ 설정</h1>

      {/* 소리 */}
      <div className="rounded-2xl p-4" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold">🔊 발음 소리</p>
            <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>단어/구절 탭 시 발음 재생</p>
          </div>
          <button onClick={toggleSound}
            className="w-12 h-7 rounded-full transition-all relative"
            style={{ backgroundColor: soundOn ? 'var(--color-accent)' : 'var(--color-border)' }}>
            <div className="absolute w-5 h-5 bg-white rounded-full top-1 transition-all"
              style={{ left: soundOn ? 24 : 4 }} />
          </button>
        </div>
      </div>

      {/* 정보 */}
      <div className="rounded-2xl p-4" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
        <h3 className="text-sm font-semibold mb-2">SuttaLog 정보</h3>
        <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>버전 0.1.0</p>
        <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>경전 데이터: SuttaCentral.net (CC BY-NC)</p>
        <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>번역: Bhikkhu Sujato (영어)</p>
      </div>

      {/* 초기화 */}
      <div className="rounded-2xl p-4" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
        <h3 className="text-sm font-semibold mb-2 text-red-500">초기화</h3>
        <p className="text-xs mb-3" style={{ color: 'var(--color-text-secondary)' }}>모든 학습 진도, 설정, 데이터가 삭제됩니다.</p>
        <button onClick={resetAll}
          className="w-full py-3 rounded-xl text-white font-bold text-sm active:scale-[0.97] transition-transform"
          style={{ backgroundColor: '#EF4444' }}>
          🗑️ 전체 초기화
        </button>
      </div>
    </div>
  )
}
