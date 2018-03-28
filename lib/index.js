/**
 * Injects the `verify` assert into QUnit
 *
 * @param {Object} QUnit a reference to QUnit
 * @param {Object} td a reference to testdouble
 */
export default function addVerifyToQunit(QUnit, td) {
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
}
