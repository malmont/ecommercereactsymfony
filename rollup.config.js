import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/bundle/NavbarWebComponent.js',
  output: {
    file: 'src/dist/navbar-component.js',
    format: 'esm',
    name: 'NavbarComponent',
  },
  plugins: [
    resolve({
      extensions: ['.js', '.jsx']
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: ['@babel/plugin-transform-runtime', 'babel-plugin-styled-components'],
      extensions: ['.js', '.jsx'],
      babelHelpers: 'runtime',
      exclude: 'node_modules/**'
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true
    }),
    terser()
  ]
};