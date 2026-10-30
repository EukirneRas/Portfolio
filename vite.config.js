import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' faz o build funcionar em Vercel, Netlify e GitHub Pages
export default defineConfig({ plugins: [react()], base: './' });
