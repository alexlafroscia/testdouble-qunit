import QUnit from 'qunit';
import td from 'testdouble';

QUnit.extend(QUnit.assert, {
  verify() {
    try {
      td.verify(...arguments);

      this.pushResult({
        result: true,
        message: 'Stub passed verification'
      });
    } catch ({ message }) {
      this.pushResult({
        result: false,
        message
      });
    }
  }
});
