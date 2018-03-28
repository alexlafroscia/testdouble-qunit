# `testdouble-qunit`

This library exposes a function that will set `QUnit` up with some additional assertions that are helpful when using `testdouble`.

## Installation

```bash
yarn add -D testdouble-qunit
```

You also have to "set up" the integration by running the following before your tests.

```javascript
const testdoubleQunit = require('testdouble-qunit');
const QUnit = require('qunit');
const td = require('testdouble');

testdoubleQunit(QUnit, td);
```
