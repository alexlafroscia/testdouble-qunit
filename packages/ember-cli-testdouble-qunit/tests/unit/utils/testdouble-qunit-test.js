import { module, test } from 'qunit';
import td from 'testdouble';

module('ember-cli-testdouble-qunit', function() {
  test('it can verify a stub', function(assert) {
    const stub = td.function();

    stub('foo');

    assert.verify(stub('foo'));
  });

  test('it can verify a stub is never called', function(assert) {
    const stub = td.function();

    assert.verify(stub(), { times: 0 });
  });

  module('alternate message', function() {
    test('when options are also provided', function(assert) {
      const stub = td.function();

      assert.verify(stub(), { times: 0 }, 'The stub is never called');
    });

    test('when options are also provided', function(assert) {
      const stub = td.function();

      stub('foo');

      assert.verify(
        stub('foo'),
        'The stub is called with the expected arguments'
      );
    });
  });
});
