'use strict';

module.exports = {
  name: 'ember-cli-testdouble-qunit',

  included() {
    this._super.included.apply(this, arguments);

    this.import('node_modules/testdouble-qunit/dist/testdouble-qunit.umd.js', {
      type: 'test',
      using: [{ transformation: 'amd', as: 'testdouble-qunit' }]
    });
  }
};
