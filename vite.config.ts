import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: 'public',
  resolve: {
    alias: {
      '@/components': path.resolve(__dirname, './src/features/kit/components'),
      '@/core': path.resolve(__dirname, './src/core'),
      '@/utils': path.resolve(__dirname, './src/utils'),
      '@/store': path.resolve(__dirname, './src/store'),
      '@/hooks': path.resolve(__dirname, './src/hooks'),
      "@/auth/*": path.resolve(__dirname, './src/features/auth/*'),
      '@/pathsConfig': path.resolve(__dirname, './src/router/entities/paths.config.ts'),
      '@/globalTypes': path.resolve(__dirname, './src/types/global.types.ts'),
      "@/assets": path.resolve(__dirname, 'contents/Assets')
    }
  },
  plugins: [react()]
})
