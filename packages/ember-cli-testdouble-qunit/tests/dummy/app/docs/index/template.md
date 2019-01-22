testdouble-qunit
=================================================================================

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

For installation information, go here:

- {{docs-link 'testdouble-qunit' 'docs.packages.testdouble-qunit'}}
- {{docs-link 'ember-cli-testdouble-qunit' 'docs.packages.ember-cli-testdouble-qunit'}}

[testdouble]: https://github.com/testdouble/testdouble.js/
[qunit]: https://qunitjs.com
[documentation]: http://alexlafroscia.github.io/testdouble-qunit
