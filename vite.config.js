import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 80, // Ensure the server binds to the correct port (either the PORT environment variable or 80)
  },
})
