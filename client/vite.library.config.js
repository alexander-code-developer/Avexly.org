import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: resolve(__dirname, 'src/library/dist'), // 👈 AQUÍ ESTÁ LA CLAVE
    lib: {
      entry: resolve(__dirname, 'src/library/index.js'),
      name: 'AveUI',
      fileName: () => 'index.mjs',
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'framer-motion',
        'react-icons'
      ],
    }
  }
});