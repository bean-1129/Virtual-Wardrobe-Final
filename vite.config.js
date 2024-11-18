import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  build: {
    chunkSizeWarningLimit: 1000,
  },
  server: {
    historyApiFallback: true,
    proxy: {
      '/predict': 'http://127.0.0.1:5000',
      '/api': {
        target: 'https://api.readyplayer.me', // Target API endpoint
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Rewrite the path to remove /api prefix
      }
    }
  }
})
