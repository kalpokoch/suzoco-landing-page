import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/suzoco-landing-page/',
  server: {
    host: '::',
    port: 5000,
    allowedHosts: 'all'
    }
})