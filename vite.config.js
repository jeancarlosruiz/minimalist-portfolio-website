import htmlPurge from 'vite-plugin-html-purgecss';
// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [htmlPurge()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        pages: resolve(__dirname, 'pages/contact.html'),
      },
    },
  },
});

// npm i vite-plugin-html-purgecss -D
