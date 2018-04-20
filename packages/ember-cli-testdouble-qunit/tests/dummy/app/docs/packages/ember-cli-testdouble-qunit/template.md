# `ember-cli-testdouble-qunit`

This Ember addon exposes `testdouble-qunit` so that you can easily consume it in your application.

## Installation

```bash
ember install ember-cli-testdouble-qunit
```

This will also install [`ember-cli-testdouble`][ember-cli-testdouble] (and through it, `testdouble`) for you automatically.

Then, inject the new assertion by adding the following anywhere in your `tests/test-helper.js` file:

```javascript
// tests/test-helper.js
import injectVerifyAssertion from 'testdouble-qunit';
import QUnit from 'qunit';
import td from 'testdouble';

injectVerifyAssertion(QUnit, td);
```

[ember-cli-testdouble]: https://github.com/isleofcode/ember-cli-testdouble
