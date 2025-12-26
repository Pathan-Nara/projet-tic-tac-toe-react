import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
base: '/projet-tic-tac-toe-react'
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
