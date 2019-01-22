# testdouble-qunit

[![Build Status](https://travis-ci.org/alexlafroscia/testdouble-qunit.svg?branch=master)](https://travis-ci.org/alexlafroscia/testdouble-qunit)

> Verify [`testdouble`][testdouble] stubs with [`QUnit`][qunit]

This library adds a `assert.verify` method to `QUnit` that allows you to verify that your stubs are called correctly.

```javascript
test('the stub is called', function(assert) {
  const stub = td.function();

  stub('foo');

  assert.verify(stub('foo'));
});
```

## Packages

- [`testdouble-qunit`][testdouble-qunit-source] Sets up the `assert.verify` helper
- [`ember-cli-testdouble-qunit`][ember-cli-testdouble-qunit-source] Ember addon convenience wrapper

For more information and examples, check out [the documentation][documentation].

[testdouble]: https://github.com/testdouble/testdouble.js/
[qunit]: https://qunitjs.com
[testdouble-qunit-source]: https://github.com/alexlafroscia/testdouble-qunit/tree/master/packages/testdouble-qunit
[ember-cli-testdouble-qunit-source]: https://github.com/alexlafroscia/testdouble-qunit/tree/master/packages/ember-cli-testdouble-qunit
[documentation]: http://alexlafroscia.github.io/testdouble-qunit
