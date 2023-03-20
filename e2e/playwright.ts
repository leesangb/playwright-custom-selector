import { test as base } from '@playwright/test';
import testIdMap from '../data/testId.json';

const test = base.extend({
  page: async ({ page }, use) => {
    const baseGetByTestId = page.getByTestId.bind(page);
    page.getByTestId = function(testId) {
      return typeof testId === 'function'
        ? baseGetByTestId(testId(testIdMap))
        : baseGetByTestId(testId);
    }
    await use(page)
  },
});

export * from '@playwright/test';
export {
  test
};
