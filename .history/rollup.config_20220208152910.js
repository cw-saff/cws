import esbuild from 'rollup-plugin-esbuild';
import { defineConfig } from 'rollup';

export default defineConfig({
    input: 'src/index.ts',
    output: {
        file: 'dist/index.mjs',
        format: 'esm',
        sourcemap: true,
    },
    plugins: [
        esbuild({
            // All options are optional
            include: /\.[jt]sx?$/, // default, inferred from `loaders` option
            exclude: /node_modules/, // default
            sourceMap: true,
            minify: process.env.NODE_ENV === 'production',
            target: 'esnext', // default, or 'es20XX', 'esnext'
            // // Like @rollup/plugin-replace
            // define: {
            //     __VERSION__: '"x.y.z"',
            // },
            // Add extra loaders
            loaders: {
                // Add .json files support
                // require @rollup/plugin-commonjs
                '.json': 'json',
            },
        }),
    ],
    context: 'this',
});
