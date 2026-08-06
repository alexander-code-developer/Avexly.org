import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    // Ajustamos la salida para que sea relativa a donde se ejecuta el comando
    outDir: 'dist', 
    emptyOutDir: true, // Limpia la carpeta dist antes de cada build
    lib: {
      entry: resolve(__dirname, 'src/library/index.js'),
      name: 'AveUI',
      fileName: () => 'index.mjs',
      formats: ['es'],
    },
    rollupOptions: {
      // Mantenemos las dependencias externas para no duplicar código
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'framer-motion',
        'react-icons',
        'tailwindcss' // Agregado: Tailwind no debe procesarse dentro del bundle
      ],
      output: {
        // Esto asegura que el CSS se llame ui.css como pusiste en tu package.json
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'ui.css';
          return assetInfo.name;
        },
      },
    }
  }
});