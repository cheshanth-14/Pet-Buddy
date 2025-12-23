import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration for Pet Buddy landing page
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})