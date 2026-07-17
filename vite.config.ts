import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base: subcaminho onde o site é servido no GitHub Pages
// (https://ruicarest.github.io/improolicos-anonimos/).
export default defineConfig({
  base: '/improolicos-anonimos/',
  plugins: [react()],
})
