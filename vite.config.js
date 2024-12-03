import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NPDE_ENV === 'production' ?'/weather-text/':'/',
  plugins: [react()],
})
