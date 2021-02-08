/* globals require process */

import path from 'path';
import babel from 'rollup-plugin-babel';

const pkg = require(path.resolve(process.cwd(), './package.json'));

const commonConfig = overrides =>
  Object.assign(
    {},
    {
      input: 'src/index.js',

      plugins: [
        babel({
          exclude: 'node_modules/**'
        })
      ]
    },
    overrides
  );

export default [
  commonConfig({
    output: {
      name: pkg.name,
      format: 'umd',
      file: './dist/testdouble-qunit.umd.js'
    }
  }),
  commonConfig({
    output: {
      format: 'cjs',
      file: './dist/testdouble-qunit.cjs.js'
    }
  }),
  commonConfig({
    output: {
      format: 'es',
      file: './dist/testdouble-qunit.es.js'
    }
  })
];
