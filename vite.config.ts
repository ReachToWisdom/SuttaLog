import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/SuttaLog/',
  // 빌드 타임스탬프 — 서비스워커 캐시 버전 관리에 사용
  define: {
    __BUILD_TIME__: JSON.stringify(Date.now().toString()),
  },
  server: {
    port: 3022,
    host: true,
  },
  preview: {
    port: 3022,
  },
})
