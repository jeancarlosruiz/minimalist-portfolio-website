import htmlPurge from 'vite-plugin-html-purgecss';
// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [htmlPurge()],
  base: '/minimalist-portfolio-website/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'pages/contact.html'),
        portfolio: resolve(__dirname, 'pages/portfolio.html'),
        bookmark: resolve(__dirname, 'pages/bookmark.html'),
        fylo: resolve(__dirname, 'pages/fylo.html'),
        manage: resolve(__dirname, 'pages/manage.html'),
        insure: resolve(__dirname, 'pages/insure.html'),
      },
    },
  },
});

// npm i vite-plugin-html-purgecss -D
