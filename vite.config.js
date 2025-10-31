import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

// ✅ karena __dirname tidak tersedia di ESM, kita definisikan manual
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  base: '/portfolio',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
