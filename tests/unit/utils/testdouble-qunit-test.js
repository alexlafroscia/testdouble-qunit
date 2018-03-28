import { module, test } from 'qunit';
import td from 'testdouble';

module('testdouble-qunit', function() {
  module('assert.verify', function() {
    test('it works', function(assert) {
      const stub = td.function();

      stub('foo');

      assert.verify(stub('foo'));
    });

    module('checking call count', function() {
      test('stub is never called', function(assert) {
        const stub = td.function();

        assert.verify(stub(), { times: 0 });
        assert.verify(stub('foo'), { times: 0 });
      });

      test('stub is called twice', function(assert) {
        const stub = td.function();

        stub('foo');
        stub('foo');

        assert.verify(stub('foo'), { times: 2 });
      });
    });
  });
});
