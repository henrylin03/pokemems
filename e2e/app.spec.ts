// @ts-check

import { test, expect } from "@playwright/test";
import { URL } from "../src/constants";

test.describe("App", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
  });
});
