import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/main.ts'),
            name: 'Calendarify',
            fileName: 'calendarify',
            formats: ['es', 'umd', 'cjs', 'iife']
        },
        minify: 'esbuild'
    }
})