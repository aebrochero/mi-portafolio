// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/mi-portafolio/', // <- Aqui se ajusta nombre del repositorio
  plugins: [react()],
})
