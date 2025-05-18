import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
    },
    server: {
      host: true, 
      port: 5173, 
    },
    plugins: [react()],
    css: {
      postcss: path.resolve(__dirname, 'postcss.config.js'),
    },
  };
});
