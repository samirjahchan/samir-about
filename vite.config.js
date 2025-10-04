import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// CHANGE "samir-about" to the *exact* repository name
export default defineConfig({
  plugins: [react()],
  base: '/samir-about/',
})
