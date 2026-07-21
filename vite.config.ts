import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { readFileSync } from 'node:fs';

const boundary = readFileSync(new URL('./BOUNDARY.json', import.meta.url), 'utf8');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'emit-governed-boundary',
      generateBundle() {
        this.emitFile({ type: 'asset', fileName: 'boundary.json', source: boundary });
      },
    },
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
