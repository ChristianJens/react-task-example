import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Poniedo la configuracion para despliegue
  base: '/https://github.com/ChristianJens/react-deploy-example/',
  plugins: [react()],
})
