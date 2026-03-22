import { defineConfig } from 'vite';

export default defineConfig({
  // Use relative paths for assets (crucial for GitHub Pages subdomains)
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Ensure the index.html references the bundled assets correctly
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  // We use src/assets as our main multimedia source
  // We don't need publicDir if we point directly to src/assets in HTML
});
