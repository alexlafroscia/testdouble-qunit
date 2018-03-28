import { module, test } from 'qunit';
import td from 'testdouble';

module('testdouble-qunit', function() {
  module('assert.verify', function() {
    test('it works', function(assert) {
      const stub = td.function();

      stub('foo');

      assert.verify(stub('foo'));
    });
  });
});
