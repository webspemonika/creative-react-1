import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/creative-react-1/',   // <-- আপনার repo name
  plugins: [react(), tailwindcss() ,],
  
})
