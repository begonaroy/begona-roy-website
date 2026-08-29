import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    build: {
      rollupOptions: {
        input: {
          home: path.resolve(__dirname, 'index.html'),
          psicologia: path.resolve(__dirname, 'psicologia-zaragoza/index.html'),
          pericardio: path.resolve(__dirname, 'liberacion-del-pericardio-zaragoza/index.html'),
          contacto: path.resolve(__dirname, 'contacto-psicologa-zaragoza/index.html'),
        },
        output: {
          manualChunks: {
            gsap: ['gsap', 'gsap/ScrollTrigger'],
          },
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
