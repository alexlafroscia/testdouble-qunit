testdouble-qunit
=================================================================================

Installation
---------------------------------------------------------------------------------

First, install the library. [`QUnit`][qunit] and [`testdouble`][testdouble] must also be installed.

```bash
# For Yarn
yarn add -D testdouble-qunit
# For NPM
npm install --save-dev testdouble-qunit
```

Now, before your tests run, install the assertion helper

```javascript
import QUnit from 'qunit';
import td from 'testdouble';
import installVerifyAssertion from 'testdouble-qunit';

installVerifyAssertion(QUnit, td);
```

Usage
---------------------------------------------------------------------------------

This library adds a `assert.verify` method that allows you to verify that your stubs are called correctly.

```javascript
test('the stub is called', function(assert) {
  const stub = td.function();

  stub('foo');

  assert.verify(stub('foo'));
});
```

The signature of `assert.verify` is the same as `td.verify`; in fact, the arguments are passed directly through.

For more information and examples, check out [the documentation][documentation].

[testdouble]: https://github.com/testdouble/testdouble.js/
[qunit]: https://qunitjs.com
[documentation]: http://alexlafroscia.com/testdouble-qunit
