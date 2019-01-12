'use strict';

const Funnel = require('broccoli-funnel');

module.exports = {
  name: require('./package').name,

  included() {
    this._super.included.apply(this, arguments);

    this.import('node_modules/testdouble-qunit/dist/testdouble-qunit.umd.js', {
      type: 'test',
      using: [{ transformation: 'amd', as: 'testdouble-qunit' }]
    });
  },

  /**
   * Overriding to allow import of setup file be simply `ember-cli-testdouble-qunit`
   * @see https://github.com/cibernox/ember-native-dom-helpers/blob/43e8daa5b755373bd4b657def5b890e076d01ee1/index.js
   */
  treeForAddonTestSupport(tree) {
    const namespacedTree = new Funnel(tree, {
      srcDir: '/',
      destDir: `/${this.moduleName()}`,
      annotation: `Addon#treeForTestSupport (${this.name})`
    });

    return this.preprocessJs(namespacedTree, '/', this.name, {
      registry: this.registry
    });
  }
};
