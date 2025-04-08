import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // change this if your app is served from a subdirectory
  plugins: [react()]
})
