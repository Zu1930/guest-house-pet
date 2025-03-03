import { defineConfig } from 'vite';
import { resolve } from 'path';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),
    react(),
  ],
  resolve: {
    alias: {
      page: resolve(__dirname, '/src/page/'),
      widgets: resolve(__dirname, '/src/widgets/'),
      shared: resolve(__dirname, '/src/shared/'),
    },
  },
});
