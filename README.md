testdouble-qunit
=================================================================================

[![Build Status](https://travis-ci.org/alexlafroscia/testdouble-qunit.svg?branch=master)](https://travis-ci.org/alexlafroscia/testdouble-qunit)

> Verify [`testdouble`][testdouble] stubs with [`QUnit`][qunit]

When using `testdouble` for stubbing functions and `QUnit` for writing your tests, you'll likely run into wanting to verify that your stub was called.

`testdouble` has a handle `td.verify` function, but it doesn't play that nicely with `QUnit`; `QUnit` assumes you'll have at least one assertion, and if you allow `testdouble` to throw an error, it will prevent other assertions from being run.

This library will add a `assert.verify` method to `QUnit` that allows you to verify that your stubs are called correctly.

Installation
---------------------------------------------------------------------------------

**For Ember applications**

```bash
ember install testdouble-qunit
```

And then add the following to your `tests/test-helper.js` file:

```javascript
import 'testdouble-qunit';
```

Example
---------------------------------------------------------------------------------

**Basic Usage**

```javascript
import td from 'testdouble';

test('verifying a stub', function(assert) {
  const stubFunction = td.function();
  stubFunction('foobar');

  assert.verify(stubFunction('foobar'));
});
```

**With a matcher**

```javascript
import td from 'testdouble';

test('verifying a stub', function(assert) {
  const stubFunction = td.function();
  stubFunction({ foo: 'bar' });

  assert.verify(stubFunction(td.matchers.isA(Object)));
});
```

[testdouble]: https://github.com/testdouble/testdouble.js/
[qunit]: https://qunitjs.com
