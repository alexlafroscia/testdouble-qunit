/* globals require process */

import path from 'path';
import babel from 'rollup-plugin-babel';

const pkg = require(path.resolve(process.cwd(), './package.json'));

export default {
  input: 'lib/index.js',

  output: {
    name: pkg.name,
    format: 'umd',
    file: './output/testdouble-qunit.umd.js'
  },

  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
};
