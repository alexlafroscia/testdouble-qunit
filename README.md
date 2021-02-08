# testdouble-qunit

> Verify [`testdouble`][testdouble] stubs with [`QUnit`][qunit]

This library adds a `assert.verify` method to `QUnit` that allows you to verify that your stubs are called correctly.

```javascript
test('the stub is called', function(assert) {
  const stub = td.function();

  stub('foo');

  assert.verify(stub('foo'));
});
```

The signature of `assert.verify` is the same as `td.verify`.

## Installation

First, install the library. [`QUnit`][qunit] and [`testdouble`][testdouble] must also be installed.

```bash
yarn add -D testdouble-qunit
```

In your test set-up code, you need to extend `QUnit` with the added `verify` assertion. You can do so with the following code snippet:

```javascript
import QUnit from 'qunit';
import td from 'testdouble';
import installVerifyAssertion from 'testdouble-qunit';

installVerifyAssertion(QUnit, td);
```

If you are using this package with Ember.js, you should put this in your `tests/test-helper.js` file

[testdouble]: https://github.com/testdouble/testdouble.js/
[qunit]: https://qunitjs.com
