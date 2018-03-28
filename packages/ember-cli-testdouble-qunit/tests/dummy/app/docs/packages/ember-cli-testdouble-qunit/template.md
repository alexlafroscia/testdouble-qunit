# `ember-cli-testdouble-qunit`

This Ember addon exposes `testdouble-qunit` so that you can easily consume it in your application.

## Installation

```bash
ember install ember-cli-testdouble ember-cli-testdouble-qunit
```

Then, import the module in your `tests/test-helper.js` file to install the integration:

```javascript
import testdoubleQunit from 'testdouble-qunit';
import QUnit from 'qunit';
import td from 'testdouble';

testdoubleQunit(QUnit, td);
```
