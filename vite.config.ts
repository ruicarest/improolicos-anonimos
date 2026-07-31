import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base: '/' porque o site é servido no domínio próprio improolicos.pt (raiz).
export default defineConfig({
  base: '/',
  plugins: [react()],
})
