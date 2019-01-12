const QUnit = require('qunit');
const td = require('testdouble');

const testdoubleQunit = require('../');

testdoubleQunit(QUnit, td);

QUnit.module('assert.verify', function() {
  QUnit.test('it can verify a stub', function(assert) {
    const stub = td.function();

    stub('foo');

    assert.verify(stub('foo'));
  });

  QUnit.test('it can verify a stub is never called', function(assert) {
    const stub = td.function();

    assert.verify(stub(), { times: 0 });
  });

  QUnit.module('alternate message', function() {
    QUnit.test('when options are also provided', function(assert) {
      const stub = td.function();

      assert.verify(stub(), { times: 0 }, 'The stub is never called');
    });

    QUnit.test('when options are also provided', function(assert) {
      const stub = td.function();

      stub('foo');

      assert.verify(
        stub('foo'),
        'The stub is called with the expected arguments'
      );
    });
  });
});
