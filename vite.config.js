import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // When deploying to custom domain
  base: 'https://kananosa.github.io/gxfcfxxccxv/',
  plugins: [react()],
})
