import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import eslint from "vite-plugin-eslint";
export default defineConfig({
    plugins: [
        vue(),
        eslint({
            include: ['src/**/*.js', 'src/**/*.vue'],
            emitError: false,
            emitWarning: false,
        }),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        }
    }
})