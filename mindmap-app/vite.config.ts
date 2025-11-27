import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solidPlugin()],
  base: '/mindmap-app/',   // 👈 這裡填「GitHub repo 名字」，你的是 mindmap-app
  build: {
    target: 'esnext',
  },
})
