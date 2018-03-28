/* globals require process */

import path from 'path';
import babel from 'rollup-plugin-babel';

const pkg = require(path.resolve(process.cwd(), './package.json'));

export default {
  input: 'lib/testdouble-qunit.js',

  external: ['qunit', 'testdouble'],

  output: {
    name: pkg.name,
    format: 'umd',
    file: './dist/testdouble-qunit.umd.js',
    globals: {
      qunit: 'QUnit',
      testdouble: 'td'
    }
  },

  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
};
