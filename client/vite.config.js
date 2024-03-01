import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //added by me for CORS ERROR
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false
      }
    }
  }
})
