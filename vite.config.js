import { resolve } from 'path';
import { defineConfig } from 'vite';

import jsnginPlugin from '@thejsngin/rollup-plugin';

// needed for rapier
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

console.log(jsnginPlugin);

export default defineConfig({
    build: {
        outDir: resolve(__dirname, 'dist'),
        minify: false,
    },
    plugins: [
        jsnginPlugin(),
        wasm(),
        topLevelAwait(),
    ]
});