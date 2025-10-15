import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // When deploying to Cloudflare Pages
  base: '/',
  plugins: [react()],
})
