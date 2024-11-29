import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'charts-render.js',
    output: {
        file: 'dist/charts-bundle.js',
        format: 'iife'
    },
    plugins: [
        nodeResolve({
            browser: true,
            preferBuiltins: false
        }),
        commonjs()
    ]
}; 