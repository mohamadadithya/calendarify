import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [dts({ insertTypesEntry: true })],
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