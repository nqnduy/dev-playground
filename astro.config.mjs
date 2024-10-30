import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import path from 'path';

// https://astro.build/config
const __dirname = path.dirname(fileURLToPath(import.meta.url));
export default defineConfig({
    output: 'static',
    trailingSlash: 'never',
    devToolbar: {
        enabled: false
    },
    vite: {
        resolve: {
            alias: {
                '~': path.resolve(__dirname, './src'),
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler'
                }
            }
        }
    }
});
