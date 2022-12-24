import {resolve} from 'path'
import {defineConfig} from 'vite'

export default defineConfig({
    base: '/quickly-html-editor/',
    server: {
        port: 3000
    },
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
            },
            output: {
                globals: {
                    jquery: 'window.$',
                    _: 'window._',
                }
            }
        }
    }
})