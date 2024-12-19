import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure assets load from the root for custom domain
  server: {
    host: '0.0.0.0', // Expose the server to the local network
    port: 5173, // Port for the dev server
  },
  build: {
    outDir: 'dist', // Specify output directory (default is 'dist')
  },
});
