import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// 앱 시작 시 글자 크기 초기 적용
const savedFontSize = localStorage.getItem('suttalog-fontsize')
if (savedFontSize) {
  document.documentElement.style.setProperty('--font-size-base', `${savedFontSize}px`)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
