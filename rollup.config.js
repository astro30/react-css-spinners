import typescript from '@rollup/plugin-typescript';

const dist = 'dist';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: `${dist}/bundle.cjs.js`,
      format: 'cjs',
    },
    {
      file: `${dist}/bundle.esm.js`,
      format: 'esm',
    },
    {
      name: 'ReactCssSpinners',
      file: `${dist}/bundle.umd.js`,
      format: 'umd',
    },
  ],
  plugins: [typescript()],
};
