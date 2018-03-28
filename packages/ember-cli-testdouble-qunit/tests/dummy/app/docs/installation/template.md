# Installation

## For Ember applications

```bash
ember install ember-cli-testdouble testdouble-qunit
```

Then, import the module in your `tests/test-helper.js` file to install the integration:

```javascript
import testdoubleQunit from 'testdouble-qunit';
import QUnit from 'qunit';
import td from 'testdouble';

testdoubleQunit(QUnit, td);
```
