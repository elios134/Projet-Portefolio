import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// base: './' => chemins relatifs, compatible GitHub Pages / sous-dossier
export default defineConfig({
  base: './',
  plugins: [react()],
})
