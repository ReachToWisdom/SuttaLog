// 온보딩 플로우 (4단계)
import { useState } from 'react'

const STEPS = [
  // 1. 환영
  {
    render: () => (
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center"
        style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="text-7xl mb-6">🪷</div>
        <h1 className="text-3xl font-bold pali-text" style={{ color: 'var(--color-primary)' }}>
          Namo Tassa
        </h1>
        <p className="text-sm mt-2 pali-text" style={{ color: 'var(--color-text-secondary)' }}>
          Bhagavato Arahato Sammāsambuddhassa
        </p>
        <p className="mt-6 text-lg font-medium">빠알리어의 세계에<br/>오신 것을 환영합니다</p>
        <p className="mt-3 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
          초기 불교 경전의 원어를 배우고<br/>붓다의 가르침을 직접 읽어보세요
        </p>
      </div>
    ),
  },
  // 2. 학습 동기
  {
    render: () => (
      <div className="px-6 pt-16">
        <h2 className="text-xl font-bold mb-2">빠알리어를 배우는<br/>이유가 무엇인가요?</h2>
        <p className="text-sm mb-6" style={{ color: 'var(--color-text-secondary)' }}>
          맞춤형 학습 경로를 제공합니다
        </p>
        {[
          { icon: '🧘', label: '명상/수행', desc: '찬팅과 명상 용어 이해' },
          { icon: '📜', label: '경전 원문 읽기', desc: '빠알리 삼장 직접 독해' },
          { icon: '🎓', label: '학술 연구', desc: '불교학/인도학 연구' },
          { icon: '💡', label: '호기심/교양', desc: '고대 언어에 대한 관심' },
        ].map((item, i) => (
          <button key={i} className="w-full flex items-center gap-4 p-4 mb-3 rounded-xl text-left transition-all active:scale-[0.98]"
            style={{ backgroundColor: 'var(--color-surface)', border: '2px solid var(--color-border)' }}>
            <span className="text-2xl">{item.icon}</span>
            <div>
              <p className="font-semibold">{item.label}</p>
              <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>{item.desc}</p>
            </div>
          </button>
        ))}
      </div>
    ),
  },
  // 3. 일일 목표
  {
    render: () => (
      <div className="px-6 pt-16">
        <h2 className="text-xl font-bold mb-2">하루에 얼마나<br/>수행하시겠습니까?</h2>
        <p className="text-sm mb-6" style={{ color: 'var(--color-text-secondary)' }}>
          나중에 변경할 수 있습니다
        </p>
        {[
          { min: 5, label: '가벼운 수행', desc: '하루 1~2 레슨' },
          { min: 10, label: '꾸준한 수행', desc: '하루 3~4 레슨', recommended: true },
          { min: 15, label: '진지한 수행', desc: '하루 5~6 레슨' },
          { min: 20, label: '깊은 수행', desc: '하루 7~8 레슨' },
        ].map((item, i) => (
          <button key={i} className="w-full flex items-center justify-between p-4 mb-3 rounded-xl transition-all active:scale-[0.98]"
            style={{
              backgroundColor: 'var(--color-surface)',
              border: item.recommended ? '2px solid var(--color-primary)' : '2px solid var(--color-border)',
            }}>
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold" style={{ color: 'var(--color-primary)' }}>{item.min}분</span>
              <div className="text-left">
                <p className="font-semibold text-sm">{item.label}</p>
                <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>{item.desc}</p>
              </div>
            </div>
            {item.recommended && (
              <span className="text-xs px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: 'var(--color-primary)' }}>추천</span>
            )}
          </button>
        ))}
      </div>
    ),
  },
  // 4. 레벨 선택
  {
    render: () => (
      <div className="px-6 pt-16">
        <h2 className="text-xl font-bold mb-2">현재 빠알리어<br/>수준은?</h2>
        <p className="text-sm mb-6" style={{ color: 'var(--color-text-secondary)' }}>
          적합한 시작점을 안내합니다
        </p>
        {[
          { icon: '🌱', label: '처음이에요', desc: '알파벳과 발음부터 시작', level: '알파벳 → Dhammapada' },
          { icon: '🌿', label: '조금 알아요', desc: '기본 인사/불교 용어 가능', level: '기초문법 → Itivuttaka' },
          { icon: '🌳', label: '경전 읽기 가능', desc: '문법을 다지고 싶어요', level: '심화문법 → SN/AN' },
        ].map((item, i) => (
          <button key={i} className="w-full flex items-start gap-4 p-4 mb-3 rounded-xl text-left transition-all active:scale-[0.98]"
            style={{ backgroundColor: 'var(--color-surface)', border: '2px solid var(--color-border)' }}>
            <span className="text-3xl mt-1">{item.icon}</span>
            <div>
              <p className="font-bold">{item.label}</p>
              <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{item.desc}</p>
              <p className="text-xs mt-1 px-2 py-0.5 rounded-full inline-block"
                style={{ backgroundColor: 'var(--color-primary)', color: 'white', opacity: 0.8 }}>
                {item.level}
              </p>
            </div>
          </button>
        ))}
      </div>
    ),
  },
]

export default function Onboarding({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0)

  const next = () => {
    if (step < STEPS.length - 1) setStep(s => s + 1)
    else onComplete()
  }

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)' }} className="min-h-screen">
      {STEPS[step].render()}

      {/* 하단 버튼 + 인디케이터 */}
      <div className="fixed bottom-0 left-0 right-0 p-6 pb-8" style={{ backgroundColor: 'var(--color-bg)' }}>
        <button
          onClick={next}
          className="w-full py-4 rounded-xl text-white font-bold text-lg active:scale-[0.97] transition-transform"
          style={{ backgroundColor: 'var(--color-primary)' }}
        >
          {step === STEPS.length - 1 ? '학습 시작하기' : step === 0 ? '시작하기' : '다음'}
        </button>
        {/* 인디케이터 */}
        <div className="flex justify-center gap-2 mt-4">
          {STEPS.map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full transition-all"
              style={{ backgroundColor: i === step ? 'var(--color-primary)' : 'var(--color-border)', width: i === step ? 20 : 8 }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
