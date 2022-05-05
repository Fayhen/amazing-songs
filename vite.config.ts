import { resolve } from 'path'
import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    eslintPlugin(),
    vue()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
