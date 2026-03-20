// 홈 대시보드 — 학습 전 초기 상태
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const nav = useNavigate()

  // 온보딩에서 설정한 일일 목표 읽기
  const dailyGoalRaw = localStorage.getItem('suttalog-daily-goal')
  const dailyGoal = dailyGoalRaw ? parseInt(dailyGoalRaw, 10) : null
  // 분 → 레슨 수 변환 (1레슨 ≈ 3분)
  const goalLessons = dailyGoal !== null ? Math.max(1, Math.round(dailyGoal / 3)) : null
  const goalText = goalLessons !== null ? `오늘 목표 0/${goalLessons} 레슨` : '목표 미설정'

  // 온보딩 레벨에 따른 시작 경로 결정
  // level 0 → 1과, level 1 → 2과(sn22-59), level 2 → 3과(sn45-8)
  // 현재 2과/3과 미구현이므로 모두 1과로 폴백
  const level = localStorage.getItem('suttalog-level') || '0'
  const courseMap: Record<string, { path: string; label: string; desc: string }> = {
    '0': { path: '/learn/scripture/dhp1-alphabet', label: '제1과: 전법륜경', desc: '사성제와 팔정도 · 첫 설법' },
    '1': { path: '/learn/scripture/sn22-59', label: '제2과: 무아경', desc: '오온과 무아' },
    '2': { path: '/learn/scripture/sn45-8', label: '제3과: 팔정도 분별경', desc: '팔정도 각 항목 분석' },
    '3': { path: '/learn/scripture/mn10', label: '제4과: 사념처경', desc: '사념처 수행법 (준비 중)' },
  }
  const course = courseMap[level] || courseMap['0']
  const startPath = course.path
  const startLabel = course.label
  const startDesc = course.desc

  return (
    <div className="px-4 pt-6 space-y-5">
      {/* 헤더 */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold" style={{ color: 'var(--color-primary)' }}>🪷 SuttaLog</h1>
        <div className="flex items-center gap-3 text-sm">
          <span>🔥 0</span>
          <span>💎 0</span>
          <span>🪷 3</span>
        </div>
      </div>

      {/* 스트릭 + 오늘 목표 */}
      <div className="rounded-2xl p-4" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold">🔥 학습 전</span>
          <span className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>{goalText}</span>
        </div>
        <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--color-border)' }}>
          <div className="h-full rounded-full" style={{ width: '0%', backgroundColor: 'var(--color-primary)' }} />
        </div>
      </div>

      {/* 오늘의 빠알리어 */}
      <div className="rounded-2xl p-4" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
        <p className="text-xs font-semibold mb-2" style={{ color: 'var(--color-text-secondary)' }}>💡 오늘의 빠알리어</p>
        <p className="pali-text text-xl font-semibold" style={{ color: 'var(--color-primary)' }}>"Namo tassa bhagavato"</p>
        <p className="text-sm mt-1">나모 땃사 바가와또</p>
        <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>"그 세존께 귀의합니다" — 삼귀의문 첫 구절</p>
      </div>

      {/* 학습 경로 미리보기 */}
      <div>
        <p className="text-xs font-semibold mb-2" style={{ color: 'var(--color-text-secondary)' }}>☸️ 학습 경로</p>
        <div className="rounded-2xl p-4" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
          {[
            { num: '1과', title: '전법륜경 (사성제·팔정도)', idx: 0, route: '/learn/scripture/dhp1-alphabet' },
            { num: '2과', title: '무아경 (오온·무아)', idx: 1, route: '/learn/scripture/sn22-59' },
            { num: '3과', title: '팔정도경 (수행의 길)', idx: 2, route: '/learn/scripture/sn45-8' },
            { num: '4과', title: '사념처경 (수행법) 🎯', idx: 3, route: '/learn/scripture/mn10' },
          ].map((item, i) => {
            const lvl = Number(level)
            const active = item.idx === lvl
            const status = active ? '시작 ▶' : item.idx < lvl ? '미학습' : '미학습'
            return (
            <button key={i} onClick={() => nav(item.route)}
              className={`w-full flex items-center gap-3 py-3 ${i > 0 ? 'border-t' : ''} active:scale-[0.98] transition-all text-left`}
              style={{ borderColor: 'var(--color-border)' }}>
              <span className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                style={{ backgroundColor: active ? 'var(--color-primary)' : 'var(--color-border)' }}>
                {active ? '▶' : i + 1}
              </span>
              <div className="flex-1 min-w-0">
                <p className={`text-sm ${active ? 'font-bold' : 'font-medium'}`}>{item.num}: {item.title}</p>
              </div>
              <span className="text-xs" style={{ color: active ? 'var(--color-primary)' : 'var(--color-text-secondary)' }}>{status}</span>
            </button>
          )})}
        </div>
      </div>
    </div>
  )
}
