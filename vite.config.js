import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/tela_login_reactjs/',
  plugins: [react()],
});
