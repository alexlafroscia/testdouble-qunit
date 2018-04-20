ember-cli-testdouble-qunit
=================================================================================

This Ember addon exposes `testdouble-qunit` so that you can easily consume it in your application.

Installation
---------------------------------------------------------------------------------

First, install the library. It is assumed that your tests are already written in `QUnit`; `ember-cli-testdouble` will be installed for you if missing.

```bash
ember install ember-cli-testdouble-qunit
```

Next, install the assertion helper. Add the following anywhere in your `tests/test-helper.js` file:

```javascript
// tests/test-helper.js
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

For more information, check out the [`testdouble.js`][testdouble-docs] documentation.

[testdouble-docs]: https://github.com/testdouble/testdouble.js/tree/master/docs
