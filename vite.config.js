import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages 部署配置
  base: '/qiuzhixiaodui/',
  build: {
    outDir: 'docs',
  },
  server: {
    port: 3000,
  },
})
