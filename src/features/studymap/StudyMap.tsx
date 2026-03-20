// 학습맵 (보리수 경로 스킬트리)
import { useNavigate } from 'react-router-dom'

const SKILLS = [
  { id: 10, title: '복주석서', desc: 'Ṭīkā 논증 구조', icon: '📕', status: 'locked', crown: 0, source: 'Ṭīkā' },
  { id: 9, title: '주석서', desc: 'Aṭṭhakathā 해석학', icon: '📗', status: 'locked', crown: 0, source: 'Aṭṭhakathā' },
  { id: 8, title: '원전 해석', desc: '긴 경전 독해', icon: '📜', status: 'locked', crown: 0, source: 'MN · DN' },
  { id: 7, title: '경전 독해', desc: '정형구/반복공식', icon: '📖', status: 'locked', crown: 0, source: 'SN · AN' },
  { id: 6, title: '산디/합성어', desc: '연음 규칙, samāsa', icon: '🔗', status: 'locked', crown: 0, source: 'Sutta Nipāta' },
  { id: 5, title: '동사 활용', desc: '현재/과거/미래', icon: '🏃', status: 'locked', crown: 0, source: 'Sutta Nipāta' },
  { id: 4, title: '격변화', desc: '8격 체계', icon: '🔀', status: 'locked', crown: 0, source: 'Itivuttaka' },
  { id: 3, title: '문장 구조', desc: 'SOV 어순, 기초 문법', icon: '📝', status: 'locked', crown: 0, source: 'Dhammapada' },
  { id: 2, title: '기초 단어', desc: '핵심 100단어', icon: '💬', status: 'locked', crown: 0, source: 'Dhammapada' },
  { id: 1, title: '알파벳/발음', desc: 'ā ī ū ṃ ṅ ñ ṭ ḍ ṇ ḷ', icon: '🔤', status: 'current', crown: 0, source: 'Dhammapada 1게' },
]

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
          레벨 1
        </span>
      </div>

      {/* 스킬트리 (위→아래, 잠금→현재→완료) */}
      <div className="relative">
        {/* 세로 연결선 */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5" style={{ backgroundColor: 'var(--color-border)' }} />

        {SKILLS.map((skill) => {
          const isLocked = skill.status === 'locked'
          const isCurrent = skill.status === 'current'
          const isDone = skill.status === 'done'

          return (
            <div key={skill.id} className="relative flex items-start gap-4 mb-1">
              {/* 노드 원 */}
              <div
                className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-2xl shrink-0 ${
                  isCurrent ? 'ring-4 ring-offset-2' : ''
                } ${isLocked ? 'opacity-40' : ''}`}
                style={{
                  backgroundColor: isDone ? 'var(--color-accent)' : isCurrent ? 'var(--color-primary)' : 'var(--color-border)',
                  outlineColor: isCurrent ? 'var(--color-primary)' : undefined,
                }}
              >
                {isLocked ? '🔒' : skill.icon}
              </div>

              {/* 스킬 정보 */}
              <button
                onClick={() => !isLocked && nav(`/skill/${skill.id}`)}
                className={`flex-1 rounded-xl p-3 text-left transition-all ${!isLocked ? 'active:scale-[0.98]' : ''}`}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: isCurrent ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                  opacity: isLocked ? 0.5 : 1,
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
