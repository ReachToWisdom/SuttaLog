// 온보딩 플로우 (4단계) — 선택 동작
import { useState } from 'react'

interface Props { onComplete: () => void }

export default function Onboarding({ onComplete }: Props) {
  const [step, setStep] = useState(0)
  const [motivation, setMotivation] = useState(-1)
  const [dailyGoal, setDailyGoal] = useState(1) // 기본: 10분
  const [level, setLevel] = useState(-1)

  const next = () => {
    if (step < 3) setStep(s => s + 1)
    else {
      // 선택 저장
      localStorage.setItem('suttalog-motivation', String(motivation))
      localStorage.setItem('suttalog-daily-goal', String([5, 10, 15, 20][dailyGoal]))
      localStorage.setItem('suttalog-level', String(level))
      onComplete()
    }
  }

  // 다음 가능 조건
  const canNext = step === 0 || (step === 1 && motivation >= 0) || (step === 2 && dailyGoal >= 0) || (step === 3 && level >= 0)

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)' }}>
      <div className="flex-1 overflow-y-auto">

        {/* 1. 환영 */}
        {step === 0 && (
          <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
            <div className="text-7xl mb-6">🪷</div>
            <h1 className="text-3xl font-bold pali-text" style={{ color: 'var(--color-primary)' }}>Namo Tassa</h1>
            <p className="text-sm mt-2 pali-text" style={{ color: 'var(--color-text-secondary)' }}>Bhagavato Arahato Sammāsambuddhassa</p>
            <p className="mt-6 text-lg font-medium">빠알리어의 세계에<br/>오신 것을 환영합니다</p>
            <p className="mt-3 text-sm" style={{ color: 'var(--color-text-secondary)' }}>초기 불교 경전의 원어를 배우고<br/>붓다의 가르침을 직접 읽어보세요</p>
          </div>
        )}

        {/* 2. 학습 동기 선택 */}
        {step === 1 && (
          <div className="px-6 pt-12">
            <h2 className="text-xl font-bold mb-2">빠알리어를 배우는<br/>이유가 무엇인가요?</h2>
            <p className="text-sm mb-6" style={{ color: 'var(--color-text-secondary)' }}>맞춤형 학습 경로를 제공합니다</p>
            {[
              { icon: '🧘', label: '명상/수행', desc: '찬팅과 명상 용어 이해' },
              { icon: '📜', label: '경전 원문 읽기', desc: '빠알리 삼장 직접 독해' },
              { icon: '🎓', label: '학술 연구', desc: '불교학/인도학 연구' },
              { icon: '💡', label: '호기심/교양', desc: '고대 언어에 대한 관심' },
            ].map((item, i) => (
              <button key={i} onClick={() => setMotivation(i)}
                className="w-full flex items-center gap-4 p-4 mb-3 rounded-xl text-left transition-all active:scale-[0.98]"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: motivation === i ? '2px solid var(--color-primary)' : '2px solid var(--color-border)',
                }}>
                <span className="text-2xl">{item.icon}</span>
                <div className="flex-1">
                  <p className="font-semibold">{item.label}</p>
                  <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>{item.desc}</p>
                </div>
                {motivation === i && <span style={{ color: 'var(--color-primary)' }}>✓</span>}
              </button>
            ))}
          </div>
        )}

        {/* 3. 일일 목표 */}
        {step === 2 && (
          <div className="px-6 pt-12">
            <h2 className="text-xl font-bold mb-2">하루에 얼마나<br/>수행하시겠습니까?</h2>
            <p className="text-sm mb-6" style={{ color: 'var(--color-text-secondary)' }}>나중에 변경할 수 있습니다</p>
            {[
              { min: 5, label: '가벼운 수행', desc: '하루 1~2 레슨' },
              { min: 10, label: '꾸준한 수행', desc: '하루 3~4 레슨', recommended: true },
              { min: 15, label: '진지한 수행', desc: '하루 5~6 레슨' },
              { min: 20, label: '깊은 수행', desc: '하루 7~8 레슨' },
            ].map((item, i) => (
              <button key={i} onClick={() => setDailyGoal(i)}
                className="w-full flex items-center justify-between p-4 mb-3 rounded-xl transition-all active:scale-[0.98]"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: dailyGoal === i ? '2px solid var(--color-primary)' : '2px solid var(--color-border)',
                }}>
                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold" style={{ color: 'var(--color-primary)' }}>{item.min}분</span>
                  <div className="text-left">
                    <p className="font-semibold text-sm">{item.label}</p>
                    <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>{item.desc}</p>
                  </div>
                </div>
                {dailyGoal === i && <span style={{ color: 'var(--color-primary)' }}>✓</span>}
                {item.recommended && dailyGoal !== i && (
                  <span className="text-xs px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: 'var(--color-primary)' }}>추천</span>
                )}
              </button>
            ))}
          </div>
        )}

        {/* 4. 레벨 선택 */}
        {step === 3 && (
          <div className="px-6 pt-12">
            <h2 className="text-xl font-bold mb-2">현재 빠알리어<br/>수준은?</h2>
            <p className="text-sm mb-6" style={{ color: 'var(--color-text-secondary)' }}>적합한 시작점을 안내합니다</p>
            {[
              { icon: '🌱', label: '처음이에요', desc: '발음과 기초 단어부터', level: '1과: 전법륜경 기초' },
              { icon: '🌿', label: '조금 알아요', desc: '기본 불교 용어 가능', level: '3과: 문법 학습' },
              { icon: '🌳', label: '경전 읽기 가능', desc: '문법을 다지고 싶어요', level: '5과: 경전 독해' },
            ].map((item, i) => (
              <button key={i} onClick={() => setLevel(i)}
                className="w-full flex items-start gap-4 p-4 mb-3 rounded-xl text-left transition-all active:scale-[0.98]"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: level === i ? '2px solid var(--color-primary)' : '2px solid var(--color-border)',
                }}>
                <span className="text-3xl mt-1">{item.icon}</span>
                <div className="flex-1">
                  <p className="font-bold">{item.label}</p>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{item.desc}</p>
                  <p className="text-xs mt-1 px-2 py-0.5 rounded-full inline-block" style={{ backgroundColor: 'var(--color-primary)', color: 'white', opacity: 0.8 }}>{item.level}</p>
                </div>
                {level === i && <span className="mt-2" style={{ color: 'var(--color-primary)' }}>✓</span>}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 하단 버튼 + 인디케이터 */}
      <div className="shrink-0 px-6 pb-8 pt-3">
        <button onClick={next} disabled={!canNext}
          className="w-full py-4 rounded-xl text-white font-bold text-lg active:scale-[0.97] transition-transform disabled:opacity-40"
          style={{ backgroundColor: 'var(--color-primary)' }}>
          {step === 3 ? '학습 시작하기' : step === 0 ? '시작하기' : '다음'}
        </button>
        <div className="flex justify-center gap-2 mt-4">
          {[0, 1, 2, 3].map(i => (
            <div key={i} className="h-2 rounded-full transition-all"
              style={{ backgroundColor: i === step ? 'var(--color-primary)' : 'var(--color-border)', width: i === step ? 20 : 8 }} />
          ))}
        </div>
      </div>
    </div>
  )
}
