/* eslint-env node */

module.exports = {
  description: 'Perform post-installation setup',

  afterInstall() {
    return this.addPackageToProject('ember-cli-testdouble', '^0.1.3');
  }
};
