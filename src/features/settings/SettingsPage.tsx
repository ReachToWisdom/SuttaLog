// 설정 페이지
import Card from '../../components/Card'
import { useAppStore } from '../../store/app-store'
import type { ThemeMode } from '../../types'

const THEMES: { mode: ThemeMode; label: string; icon: string }[] = [
  { mode: 'light', label: '라이트', icon: '☀️' },
  { mode: 'dark', label: '다크', icon: '🌙' },
  { mode: 'sepia', label: '세피아', icon: '📜' },
]

export default function SettingsPage() {
  const { theme, setTheme, fontSize, setFontSize, isOnline } = useAppStore()

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">⚙️ 설정</h1>

      {/* 온라인 상태 */}
      <Card>
        <div className="flex items-center justify-between">
          <span className="text-sm">연결 상태</span>
          <span className={`text-sm font-medium ${isOnline ? 'text-green-500' : 'text-red-500'}`}>
            {isOnline ? '🟢 온라인' : '🔴 오프라인'}
          </span>
        </div>
      </Card>

      {/* 테마 */}
      <Card>
        <h3 className="text-sm font-semibold mb-3">테마</h3>
        <div className="grid grid-cols-3 gap-2">
          {THEMES.map(t => (
            <button
              key={t.mode}
              onClick={() => setTheme(t.mode)}
              className={`py-2 rounded-lg text-sm ${
                theme === t.mode ? 'ring-2' : ''
              }`}
              style={{
                backgroundColor: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                outlineColor: 'var(--color-primary)',
              }}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>
      </Card>

      {/* 글자 크기 */}
      <Card>
        <h3 className="text-sm font-semibold mb-3">글자 크기</h3>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setFontSize(Math.max(12, fontSize - 1))}
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'var(--color-border)' }}
          >
            -
          </button>
          <span className="text-sm font-mono flex-1 text-center">{fontSize}px</span>
          <button
            onClick={() => setFontSize(Math.min(24, fontSize + 1))}
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'var(--color-border)' }}
          >
            +
          </button>
        </div>
        <p className="pali-text mt-3" style={{ fontSize: `${fontSize}px` }}>
          Evaṃ me sutaṃ — 이와 같이 나는 들었다.
        </p>
      </Card>

      {/* 정보 */}
      <Card>
        <h3 className="text-sm font-semibold mb-2">SuttaLog 정보</h3>
        <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
          버전 0.1.0
        </p>
        <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>
          경전 데이터: SuttaCentral.net (CC BY-NC)
        </p>
        <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>
          번역: Bhikkhu Sujato (영어)
        </p>
      </Card>
    </div>
  )
}
