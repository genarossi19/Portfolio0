import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import million from 'million/compiler'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [million.vite({auto:true}),react()],
  server: {
    host: '0.0.0.0',
    port: "5173" ,
    open: true,
   },
})
