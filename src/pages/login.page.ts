import { Locator, Page } from "playwright";

// playwright-dev-page.ts
export class LoginPage {
  readonly page: Page;
  

  constructor(page: Page) {
    this.page = page;
    
  }

  async goto() {
    await this.page.goto('https://front.serverest.dev/login');
    expect(await page.title()).toBe("Front - ServeRest");
  }

}