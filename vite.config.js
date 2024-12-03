import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:process.env.NPDE_ENV === 'production' ?'/react-app1112/':'/',
  plugins: [react()],
})
