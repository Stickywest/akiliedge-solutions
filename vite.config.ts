import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Ensures correct asset paths for deployment

  server: {
    host: true, // Allows access from LAN (0.0.0.0 shorthand)
    port: 5173, // Fixed port for consistency
    strictPort: true, // Prevents auto-changing ports
    open: true, // Automatically opens browser on startup
    hmr: {
      overlay: true, // Enables error overlay in the browser
    },
  },

  build: {
    outDir: 'dist', // Output directory
    assetsDir: 'assets', // Stores assets in a separate folder
    sourcemap: true, // Enables source maps for easier debugging
    minify: 'terser', // Optimizes build size
    emptyOutDir: true, // Cleans the output directory before building
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Splits vendor dependencies for better caching
          }
        },
      },
    },
  },

  optimizeDeps: {
    esbuildOptions: {
      minify: true, // Enables minification for dependencies
    },
    include: ['react', 'react-dom'], // Pre-bundle key dependencies for faster HMR
  },

  envDir: './env', // Load environment variables from a custom directory
});
