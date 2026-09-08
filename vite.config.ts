import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Standalone Vite configuration for OllaWrite Knowledge Blog (Version B)
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: true,
    port: 5174,
    strictPort: false,
    open: true,
  },
  build: {
    outDir: 'dist',
  },
});
