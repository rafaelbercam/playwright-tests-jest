import { Locator, Page } from "playwright";

// playwright-dev-page.ts
export class LoginPage {
  readonly page: Page;
  readonly email: Locator;
  readonly password: Locator;
  readonly btnEnter: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.email = page.locator('[data-testid="email"]');
    this.password = page.locator('[data-testid="senha"]');
    this.btnEnter = page.locator('[data-testid="entrar"]');
  }

  async goto() {
    await this.page.goto('https://front.serverest.dev/login');
    expect(await page.title()).toBe("Front - ServeRest");
  }

  async login(){
    await this.email.click();
    await this.email.fill("fulano@qa.com");
    await this.password.click();
    await this.password.fill("teste");
    await this.btnEnter.click();
  }

 async validateTitle (text:string){
  //wait locator is visible to be defined
  expect(await page.locator('[data-testid="logout"]').isVisible).toBeDefined()
  //compare text parameter equals welcome title login succeded
  expect(await page.innerText("#root > div > div > h1")).toContain(text);
 }

}