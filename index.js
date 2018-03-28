'use strict';

const Funnel = require('broccoli-funnel');
const MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'testdouble-qunit',

  included() {
    this._super.included.apply(this, arguments);

    this.import('vendor/testdouble-qunit.umd.js', {
      type: 'test',
      using: [{ transformation: 'amd', as: 'testdouble-qunit' }]
    });
  },

  treeForVendor(vendorTree) {
    let qunitPluginTree = new Funnel(`${__dirname}/dist`, {
      files: ['testdouble-qunit.umd.js']
    });

    return new MergeTrees([vendorTree, qunitPluginTree]);
  }
};
