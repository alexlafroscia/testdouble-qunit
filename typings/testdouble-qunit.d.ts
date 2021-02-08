import { VerificationConfig } from 'testdouble';

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
