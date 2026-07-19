import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

// 修复 iOS Safari 白屏：
// 1) plugin-legacy 把所有现代语法彻底降到 ES5 并注入 polyfill，
//    老 Safari 走 nomodule 的 legacy 包，新 Safari 走现代包
// 2) 去掉 index.html 中脚本的 crossorigin（iOS Safari 对带此属性的 module 脚本有加载 bug）
function stripCrossorigin() {
  return {
    name: 'strip-crossorigin',
    enforce: 'post',
    transformIndexHtml(html) {
      return html.replace(/\s+crossorigin/g, '')
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['iOS >= 11', 'Safari >= 11', 'Chrome >= 60', 'Edge >= 16', 'Firefox >= 60'],
    }),
    stripCrossorigin(),
  ],
  // GitHub Pages: /qiuzhixiaodui/
  base: '/qiuzhixiaodui/',
  build: {
    outDir: 'docs',
  },
  server: {
    port: 3000,
  },
})
