import { module, test } from 'qunit';
import td from 'testdouble';

module('ember-cli-testdouble-qunit', function() {
  test('it works', function(assert) {
    const stub = td.function();

    stub('foo');

    assert.verify(stub('foo'));
  });
});
