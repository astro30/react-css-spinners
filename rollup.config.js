import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const dist = 'dist';
const bundle = 'bundle';
const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: `${dist}/${bundle}.cjs.js`,
      format: 'cjs',
    },
    {
      file: `${dist}/${bundle}.esm.js`,
      format: 'esm',
    },
    {
      name: 'ReactCssSpinners',
      file: `${dist}/${bundle}.umd.js`,
      format: 'umd',
      globals: {
        react: 'React',
      },
    },
  ],
  plugins: [
    resolve(),
    typescript(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
    production && terser(),
  ],
  external: ['react'],
};
