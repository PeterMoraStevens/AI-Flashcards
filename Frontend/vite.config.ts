import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/get_decks': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
      '/get_all_decks': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
      '/add_deck': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      }
    }
  },
})
