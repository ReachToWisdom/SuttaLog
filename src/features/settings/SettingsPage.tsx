// 설정 페이지
import { useState, useEffect } from 'react'
import { isSyncConfigured, isSyncLoggedIn, getSyncUser, initSync, syncLogin, syncLogout, pullFromCloud, pushToCloud } from '../../utils/sync'

export default function SettingsPage() {
  const [soundOn, setSoundOn] = useState(localStorage.getItem('suttalog-sound') !== 'off')
  const [syncLoggedIn, setSyncLoggedIn] = useState(isSyncLoggedIn())
  const [syncUser, setSyncUser] = useState(getSyncUser())
  const [syncing, setSyncing] = useState(false)
  const syncReady = isSyncConfigured()

  useEffect(() => {
    if (syncReady) {
      initSync((loggedIn) => {
        setSyncLoggedIn(loggedIn)
        setSyncUser(getSyncUser())
      })
    }
  }, [syncReady])
  const [writingOn, setWritingOn] = useState(localStorage.getItem('suttalog-writing') !== 'off')
  const [fontSize, setFontSize] = useState(Number(localStorage.getItem('suttalog-fontsize')) || 16)

  const toggleWriting = () => {
    const next = !writingOn
    setWritingOn(next)
    localStorage.setItem('suttalog-writing', next ? 'on' : 'off')
  }

  const changeFontSize = (size: number) => {
    const clamped = Math.max(12, Math.min(24, size))
    setFontSize(clamped)
    localStorage.setItem('suttalog-fontsize', String(clamped))
    document.documentElement.style.setProperty('--pali-fontsize', `${clamped}px`)
  }

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

      {/* 동기화 */}
      <div className="rounded-2xl p-4" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
        <p className="text-sm font-semibold mb-2">🔄 기기간 동기화</p>
        {!syncReady ? (
          <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>준비 중 (Firebase 설정 필요)</p>
        ) : syncLoggedIn ? (
          <div>
            <div className="flex items-center gap-2 mb-3">
              {syncUser?.photoURL && <img src={syncUser.photoURL} className="w-8 h-8 rounded-full" />}
              <div>
                <p className="text-xs font-medium">{syncUser?.displayName}</p>
                <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>{syncUser?.email}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={async () => { setSyncing(true); await pullFromCloud(); setSyncing(false); alert('동기화 완료!') }}
                disabled={syncing}
                className="flex-1 py-2 rounded-lg text-xs font-medium text-white"
                style={{ backgroundColor: 'var(--color-accent)' }}>
                {syncing ? '동기화 중...' : '📥 가져오기'}
              </button>
              <button onClick={async () => { setSyncing(true); await pushToCloud(); setSyncing(false); alert('업로드 완료!') }}
                disabled={syncing}
                className="flex-1 py-2 rounded-lg text-xs font-medium text-white"
                style={{ backgroundColor: 'var(--color-primary)' }}>
                📤 올리기
              </button>
              <button onClick={async () => { await syncLogout(); setSyncLoggedIn(false); setSyncUser(null) }}
                className="px-3 py-2 rounded-lg text-xs"
                style={{ border: '1px solid var(--color-border)' }}>
                로그아웃
              </button>
            </div>
          </div>
        ) : (
          <button onClick={async () => { await syncLogin(); setSyncLoggedIn(isSyncLoggedIn()); setSyncUser(getSyncUser()) }}
            className="w-full py-3 rounded-lg text-sm font-medium text-white flex items-center justify-center gap-2"
            style={{ backgroundColor: '#4285F4' }}>
            <span>🔑</span> Google 계정으로 로그인
          </button>
        )}
        <p className="text-xs mt-2" style={{ color: 'var(--color-text-secondary)' }}>
          Google 로그인으로 여러 기기에서 학습 진도를 동기화합니다
        </p>
      </div>

      {/* 쓰기 모드 */}
      <div className="rounded-2xl p-4" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold">✍️ 쓰기 모드</p>
            <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>단어 스펠링 직접 입력 (특수문자 키보드 제공)</p>
          </div>
          <button onClick={toggleWriting}
            className="w-12 h-7 rounded-full transition-all relative"
            style={{ backgroundColor: writingOn ? 'var(--color-accent)' : 'var(--color-border)' }}>
            <div className="absolute w-5 h-5 bg-white rounded-full top-1 transition-all"
              style={{ left: writingOn ? 24 : 4 }} />
          </button>
        </div>
      </div>

      {/* 글자 크기 */}
      <div className="rounded-2xl p-4" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
        <p className="text-sm font-semibold mb-3">🔤 경전 글자 크기</p>
        <div className="flex items-center gap-4">
          <button onClick={() => changeFontSize(fontSize - 1)}
            className="w-9 h-9 rounded-full flex items-center justify-center text-lg font-bold"
            style={{ backgroundColor: 'var(--color-border)' }}>−</button>
          <span className="text-sm font-mono flex-1 text-center">{fontSize}px</span>
          <button onClick={() => changeFontSize(fontSize + 1)}
            className="w-9 h-9 rounded-full flex items-center justify-center text-lg font-bold"
            style={{ backgroundColor: 'var(--color-border)' }}>+</button>
        </div>
        <p className="pali-text mt-3 text-center" style={{ fontSize: `${fontSize}px`, color: 'var(--color-primary)' }}>
          Evaṃ me sutaṃ
        </p>
        <p className="text-center mt-1" style={{ fontSize: `${fontSize - 2}px` }}>
          이와 같이 나는 들었다
        </p>
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
