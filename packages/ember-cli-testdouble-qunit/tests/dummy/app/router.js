import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('docs', function() {
    this.route('packages', function() {
      this.route('testdouble-qunit');
      this.route('ember-cli-testdouble-qunit');
    });

    this.route('examples', function() {
      this.route('call-count');
      this.route('stubbing');
    });

    this.route('api', function() {
      this.route('item', { path: '/*path' });
    });
  });
});

export default Router;
