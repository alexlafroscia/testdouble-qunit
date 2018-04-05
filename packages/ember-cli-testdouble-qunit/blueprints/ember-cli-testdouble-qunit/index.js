/* eslint-env node */

module.exports = {
  description: 'Perform post-installation setup',

  // Prevents error when running blueprint w/o name argument
  normalizeEntityName() {},

  afterInstall() {
    return this.addPackageToProject('ember-cli-testdouble', '^0.1.3');
  }
};
