import { Locator } from '@playwright/test';
import { testIdMap } from '../data/testId';

declare module '@playwright/test' {
  interface Page {
    getByTestId(selector: (testIds: typeof testIdMap) => string): Locator
  }
}
