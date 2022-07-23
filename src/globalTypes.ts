import { Browser, Locator, Page } from "playwright";

declare global {
  const locator: Locator;
  const page: Page;
  const browser: Browser;
  const browserName: string;
}