// 학습맵 (보리수 경로 스킬트리)
import { useNavigate } from 'react-router-dom'

// 레벨에 따라 동적으로 상태 결정
const level = Number(localStorage.getItem('suttalog-level') || '0')

const SKILLS = [
  { id: 4, title: '사념처경', desc: '사념처 수행법 🎯', icon: '🧘', route: '/learn/scripture/mn10', source: 'MN 10' },
  { id: 3, title: '팔정도 분별경', desc: '팔정도 각 항목 분석', icon: '☸️', route: '/learn/scripture/sn45-8', source: 'SN 45.8' },
  { id: 2, title: '무아경', desc: '오온과 무아', icon: '🔍', route: '/learn/scripture/sn22-59', source: 'SN 22.59' },
  { id: 1, title: '전법륜경', desc: '사성제와 팔정도 · 첫 설법', icon: '☸️', route: '/learn/scripture/dhp1-alphabet', source: 'SN 56.11' },
].map(s => ({
  ...s,
  status: (s.id - 1) === level ? 'current' as const : (s.id - 1) < level ? 'skipped' as const : 'locked' as const,
  crown: 0,
}))

function CrownStars({ count, max = 5 }: { count: number; max?: number }) {
  return (
    <span className="text-xs">
      {'⭐'.repeat(count)}{'☆'.repeat(max - count)}
    </span>
  )
}

export default function StudyMap() {
  const nav = useNavigate()

  return (
    <div className="px-4 pt-6 pb-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold">📖 학습맵</h1>
        <span className="text-sm px-3 py-1 rounded-full"
          style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
          {level + 1}과 진행 중
        </span>
      </div>

      {/* 스킬트리 (위→아래, 잠금→현재→완료) */}
      <div className="relative">
        {/* 세로 연결선 */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5" style={{ backgroundColor: 'var(--color-border)' }} />

        {SKILLS.map((skill) => {
          const isLocked = skill.status === 'locked'
          const isCurrent = skill.status === 'current'
          const isSkipped = skill.status === 'skipped'
          const isDone = false // 아직 실제 완료 추적 없음

          return (
            <div key={skill.id} className="relative flex items-start gap-4 mb-1">
              {/* 노드 원 */}
              <div
                className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-2xl shrink-0 ${
                  isCurrent ? 'ring-4 ring-offset-2' : ''
                } ${isLocked ? 'opacity-40' : ''}`}
                style={{
                  backgroundColor: isDone ? 'var(--color-accent)' : isCurrent ? 'var(--color-primary)' : isSkipped ? 'var(--color-border)' : 'var(--color-border)',
                  outlineColor: isCurrent ? 'var(--color-primary)' : undefined,
                }}
              >
                {isLocked ? '🔒' : isSkipped ? '—' : skill.icon}
              </div>

              {/* 스킬 정보 */}
              <button
                onClick={() => !isLocked && nav(skill.route)}
                className={`flex-1 rounded-xl p-3 text-left transition-all ${!isLocked ? 'active:scale-[0.98]' : ''}`}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: isCurrent ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                  opacity: isLocked ? 0.5 : isSkipped ? 0.6 : 1,
                }}
                disabled={isLocked}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`font-bold text-sm ${isCurrent ? '' : ''}`}
                      style={isCurrent ? { color: 'var(--color-primary)' } : {}}>
                      제{skill.id}과: {skill.title}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-secondary)' }}>
                      {skill.desc}
                    </p>
                    <p className="text-xs mt-1 pali-text" style={{ color: 'var(--color-primary)', opacity: 0.7 }}>
                      📜 {skill.source}
                    </p>
                  </div>
                  <div className="text-right">
                    <CrownStars count={skill.crown} />
                    {isCurrent && (
                      <p className="text-xs mt-1 font-bold" style={{ color: 'var(--color-primary)' }}>진행 중</p>
                    )}
                  </div>
                </div>
              </button>
            </div>
          )
        })}

        {/* 출발점 */}
        <div className="relative flex items-center gap-4">
          <div className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-3xl"
            style={{ backgroundColor: 'var(--color-primary)' }}>
            🪷
          </div>
          <p className="font-bold" style={{ color: 'var(--color-primary)' }}>시작</p>
        </div>
      </div>
    </div>
  )
}
