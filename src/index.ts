import * as QUnit from 'qunit';
import { VerificationConfig, verify } from 'testdouble';

interface VerifyContainer {
  verify: typeof verify;
}

declare global {
  interface Assert {
    /**
     * Verify a specific function call to a stubbed function.
     */
    verify(a: any, config?: VerificationConfig): void;
    verify(a: any, message?: string): void;
    verify(a: any, config: VerificationConfig, message: string): void;
  }
}

/**
 * Injects the `verify` assert into QUnit
 *
 * @param {Object} QUnit a reference to QUnit
 * @param {Object} td a reference to testdouble
 */
export default function addVerifyToQunit(QUnit: QUnit, td: VerifyContainer): void {
  Object.assign(QUnit.assert, {
    verify(
      this: Assert,
      invocation: any,
      optionsOrMessage: VerificationConfig | string | undefined,
      possibleMessage: string | undefined
    ) {
      let verifyOptions: VerificationConfig | undefined = undefined;
      let message = possibleMessage ?? 'Stub passed verification';

      if (typeof optionsOrMessage === 'string') {
        message = optionsOrMessage;
      } else if (optionsOrMessage) {
        verifyOptions = optionsOrMessage;
      }

      try {
        td.verify(invocation, verifyOptions);

        this.pushResult({ result: true, message, actual: undefined, expected: undefined });
      } catch (error: any) {
        this.pushResult({
          result: false,
          message: error.message,
          actual: undefined,
          expected: undefined,
        });
      }
    },
  });
}
