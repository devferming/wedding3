import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Esto permite que cualquier dispositivo en la red local acceda al servidor de desarrollo
    port: 5173,      // Puedes cambiar el puerto si lo deseas
  },
})
