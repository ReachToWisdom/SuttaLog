// 홈 화면 — SuttaLog3 프리미엄 디자인 기반
import { useNavigate } from 'react-router-dom'

const COURSES = [
  { id: 'dhp1-alphabet', num: '1과', title: '전법륜경', subtitle: '사성제·팔정도 · 첫 설법', icon: '☸️', total: 45 },
  { id: 'sn22-59', num: '2과', title: '무아경', subtitle: '오온과 무아', icon: '🔍', total: 21 },
  { id: 'sn45-8', num: '3과', title: '팔정도 분별경', subtitle: '팔정도 각 항목 분석', icon: '📐', total: 20 },
  { id: 'mn10', num: '4과', title: '사념처경', subtitle: '마음챙김 수행법 🎯', icon: '🧘', total: 20 },
]

function getProgress(id: string): number {
  return Number(localStorage.getItem(`suttalog-progress-${id}`) || '0')
}

function getGreeting(): { text: string; emoji: string; bg: string; textColor: string } {
  const h = new Date().getHours()
  if (h < 6) return { text: '새벽 수행의 시간입니다', emoji: '🌙', bg: 'linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)', textColor: '#fff' }
  if (h < 12) return { text: '좋은 아침입니다', emoji: '🌅', bg: 'linear-gradient(135deg, #fceabb 0%, #f8b500 100%)', textColor: '#1E1B16' }
  if (h < 18) return { text: '좋은 오후입니다', emoji: '☀️', bg: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)', textColor: '#1E1B16' }
  return { text: '고요한 저녁입니다', emoji: '🌿', bg: 'linear-gradient(135deg, #2c3e50 0%, #3d5866 100%)', textColor: '#fff' }
}

const QUOTES = [
  { pali: 'Manopubbaṅgamā dhammā', ko: '마음이 모든 법의 선구자이다', source: '법구경 1게' },
  { pali: 'Sabbe saṅkhārā aniccā', ko: '모든 형성된 것은 무상하다', source: '법구경 277게' },
  { pali: 'Sabbe saṅkhārā dukkhā', ko: '모든 형성된 것은 괴로움이다', source: '법구경 278게' },
  { pali: 'Sabbe dhammā anattā', ko: '모든 법은 무아이다', source: '법구경 279게' },
  { pali: 'Attā hi attano nātho', ko: '자기 자신이 자신의 의지처이다', source: '법구경 160게' },
  { pali: 'Dhammo have rakkhati dhammacāriṃ', ko: '법은 법대로 행하는 자를 보호한다', source: '장로게 303게' },
  { pali: 'Natthi me saraṇaṃ aññaṃ', ko: '나에게 다른 귀의처는 없습니다', source: '삼귀의문' },
]

// 원형 진도
const R = 24, C = 2 * Math.PI * R

export default function Home() {
  const nav = useNavigate()
  const greeting = getGreeting()
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000)
  const quote = QUOTES[dayOfYear % QUOTES.length]

  // 현재 학습 중인 과 (미완료 첫 번째)
  const current = COURSES.find(c => getProgress(c.id) < c.total - 1) ?? COURSES[0]
  const currentPct = Math.round((getProgress(current.id) / current.total) * 100)
  const completed = COURSES.filter(c => getProgress(c.id) >= c.total - 1).length

  // daily goal
  const dailyGoal = Number(localStorage.getItem('suttalog-daily-goal') || '10')
  const goalLessons = Math.max(1, Math.round(dailyGoal / 3))

  return (
    <div className="pb-20 px-4 pt-5">

      {/* ── 상단 인사 카드 ── */}
      <div className="rounded-2xl p-4 mb-4 intro-fade-up" style={{ background: greeting.bg, color: greeting.textColor, boxShadow: 'var(--shadow-lg)' }}>
        <div className="flex items-center gap-3">
          <span className="text-3xl">{greeting.emoji}</span>
          <div>
            <p className="text-sm opacity-80 font-medium">{greeting.text}</p>
            <h1 className="text-xl font-bold tracking-tight">빠알리어 공부</h1>
          </div>
        </div>
      </div>

      {/* ── 히어로: 현재 학습 ── */}
      <button onClick={() => nav(`/learn/scripture/${current.id}`)}
        className="w-full rounded-2xl text-left mb-4 intro-fade-up-delay active:scale-[0.98] transition-transform"
        style={{ background: 'var(--color-primary-gradient)', boxShadow: '0 4px 20px rgba(192,107,10,0.35)', border: 'none', padding: 0 }}>
        <div className="relative overflow-hidden rounded-2xl p-5">
          <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-15" style={{ background: 'radial-gradient(circle, #fff 0%, transparent 70%)' }} />
          <div className="flex items-center gap-4 relative z-10">
            {/* 원형 진도 */}
            <div className="relative flex-shrink-0">
              <svg width="64" height="64" style={{ transform: 'rotate(-90deg)' }}>
                <circle cx="32" cy="32" r={R} fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="4" />
                <circle cx="32" cy="32" r={R} fill="none" stroke="url(#hg)" strokeWidth="4" strokeLinecap="round"
                  strokeDasharray={C} strokeDashoffset={C * (1 - currentPct / 100)} />
                <defs><linearGradient id="hg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fff" stopOpacity="0.4" /><stop offset="100%" stopColor="#fff" stopOpacity="0.9" />
                </linearGradient></defs>
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold">{currentPct}%</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[0.7rem] font-semibold uppercase tracking-widest text-white/60 mb-0.5">현재 학습 중</p>
              <p className="text-lg font-bold text-white truncate leading-tight">{current.icon} {current.title}</p>
              <p className="text-sm text-white/70 mt-0.5 truncate">{current.subtitle}</p>
              <div className="mt-2.5 h-1.5 rounded-full overflow-hidden bg-white/20">
                <div className="h-full rounded-full" style={{ width: `${currentPct}%`, background: 'linear-gradient(90deg, rgba(255,255,255,0.6), rgba(255,255,255,0.95))' }} />
              </div>
            </div>
            <div className="flex-shrink-0 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
          </div>
        </div>
      </button>

      {/* ── 통계 3칸 ── */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { icon: '📚', label: '완료', value: `${completed}과`, bg: 'rgba(192,107,10,0.1)' },
          { icon: '🎯', label: '목표', value: `0/${goalLessons}`, bg: 'rgba(239,83,80,0.1)' },
          { icon: '📖', label: '전체', value: `${Math.round(COURSES.reduce((s, c) => s + (getProgress(c.id) / c.total) * 100, 0) / COURSES.length)}%`, bg: 'rgba(46,125,50,0.1)' },
        ].map((s, i) => (
          <div key={i} className="rounded-xl p-3 text-center animate-fadeIn"
            style={{ background: 'var(--color-surface)', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--color-border-light)' }}>
            <div className="w-8 h-8 mx-auto rounded-full flex items-center justify-center text-sm mb-1.5" style={{ background: s.bg }}>{s.icon}</div>
            <p className="text-lg font-bold" style={{ color: 'var(--color-text)' }}>{s.value}</p>
            <p className="text-[0.65rem]" style={{ color: 'var(--color-text-tertiary)' }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* ── 오늘의 명구 ── */}
      <div className="rounded-2xl overflow-hidden mb-4 intro-fade-up-delay2"
        style={{ background: 'var(--color-surface-elevated)', boxShadow: 'var(--shadow-md)', border: '1px solid var(--color-border-light)' }}>
        <div className="flex">
          <div className="w-1 flex-shrink-0" style={{ background: 'linear-gradient(180deg, var(--color-primary-light), var(--color-primary-dark))' }} />
          <div className="p-4 flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm">🪷</span>
              <p className="text-xs font-semibold" style={{ color: 'var(--color-text-tertiary)' }}>오늘의 경전 명구</p>
            </div>
            <p className="pali-text text-base font-semibold" style={{ color: 'var(--color-primary)' }}>{quote.pali}</p>
            <p className="text-sm mt-1">{quote.ko}</p>
            <p className="text-xs mt-1" style={{ color: 'var(--color-text-tertiary)' }}>— {quote.source}</p>
          </div>
        </div>
      </div>

      {/* ── 학습 경로 ── */}
      <div>
        <p className="text-xs font-semibold mb-2" style={{ color: 'var(--color-text-tertiary)' }}>☸️ 학습 경로</p>
        <div className="rounded-2xl overflow-hidden" style={{ background: 'var(--color-surface)', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--color-border-light)' }}>
          {COURSES.map((c, i) => {
            const saved = getProgress(c.id)
            const pct = Math.round((saved / c.total) * 100)
            const done = saved >= c.total - 1
            const active = saved > 0 && !done
            const status = done ? '완료' : active ? `${pct}%` : '미학습'
            return (
              <button key={c.id} onClick={() => nav(`/learn/scripture/${c.id}`)}
                className={`w-full flex items-center gap-3 px-4 py-3.5 text-left active:scale-[0.98] transition-all ${i > 0 ? 'border-t' : ''}`}
                style={{ borderColor: 'var(--color-divider)' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                  style={{ background: done ? 'rgba(46,125,50,0.1)' : active ? 'rgba(192,107,10,0.1)' : 'var(--color-surface-hover)' }}>
                  {done ? '✓' : c.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm ${active ? 'font-bold' : 'font-medium'}`} style={{ color: active ? 'var(--color-primary)' : 'var(--color-text)' }}>
                    {c.num}: {c.title}
                  </p>
                  <p className="text-xs truncate" style={{ color: 'var(--color-text-tertiary)' }}>{c.subtitle}</p>
                  {active && (
                    <div className="mt-1.5 h-1 rounded-full overflow-hidden" style={{ background: 'var(--color-border-light)' }}>
                      <div className="h-full rounded-full" style={{ width: `${pct}%`, background: 'var(--color-primary-gradient)' }} />
                    </div>
                  )}
                </div>
                <span className="text-xs font-medium flex-shrink-0"
                  style={{ color: done ? 'var(--color-accent)' : active ? 'var(--color-primary)' : 'var(--color-text-tertiary)' }}>
                  {status}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
