/**
 * Injects the `verify` assert into QUnit
 *
 * @param {Object} QUnit a reference to QUnit
 * @param {Object} td a reference to testdouble
 */
export default function addVerifyToQunit(QUnit, td) {
  QUnit.extend(QUnit.assert, {
    verify(invocation, optionsOrMessage, possibleMessage) {
      let verifyOptions,
        message = possibleMessage || 'Stub passed verification';

      if (typeof optionsOrMessage === 'string') {
        message = optionsOrMessage;
      } else if (optionsOrMessage) {
        verifyOptions = optionsOrMessage;
      }

      try {
        td.verify(invocation, verifyOptions);

        this.pushResult({ result: true, message });
      } catch ({ message }) {
        this.pushResult({ result: false, message });
      }
    }
  });
}
