import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ⚠️ CHANGE THIS to match your GitHub repo name!
// Example: if your site is https://yourname.github.io/apollo-performing-arts/
// then base = '/apollo-performing-arts/'
export default defineConfig({
  plugins: [react()],
  base: '/YOUR-REPO-NAME/', // ←←← REPLACE THIS
  build: {
    outDir: 'dist'
  }
});