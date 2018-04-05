ember-cli-testdouble-qunit
=================================================================================

Installation
---------------------------------------------------------------------------------

First, install the library. It is assumed that your tests are already written in `QUnit`; `ember-cli-testdouble` will be installed for you if missing.

```bash
ember install ember-cli-testdouble-qunit
```

Next, install the assertion helper. Add the following anywhere in your `tests/test-helper.js` file:

```javascript
import 'ember-cli-testdouble-qunit';
```

And you're good to go!

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

[documentation]: http://alexlafroscia.com/testdouble-qunit
