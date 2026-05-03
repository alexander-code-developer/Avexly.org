import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  publicDir: false,
  build: {
    outDir: 'src/library/dist',
    lib: {
      // Punto de entrada de la librería
      entry: resolve(__dirname, 'src/library/index.js'),
      name: 'AveUI',
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`,
    },
    rollupOptions: {
      // No incluyas estas librerías en el paquete final (el usuario ya las tiene)
      external: ['react', 'react-dom', 'framer-motion', 'tailwindcss', 'react-router-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'framer-motion': 'Motion'
        },
      },
    },
  },
});