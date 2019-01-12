import { VerificationConfig } from 'testdouble';

declare global {
  interface Assert {
    verify(
      a: any,
      configOrMessage?: VerificationConfig | string,
      message?: string
    ): void;
  }
}
