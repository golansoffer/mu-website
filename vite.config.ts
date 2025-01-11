import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {TanStackRouterVite} from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [TanStackRouterVite({}), react()],
    define: { VITE_API_URL: process.env.VITE_API_URL },
    build: {
        rollupOptions: {
          output: {
            manualChunks: undefined
          }
        }
      },
      server: {
        proxy: {},
        open: true
      }
})
