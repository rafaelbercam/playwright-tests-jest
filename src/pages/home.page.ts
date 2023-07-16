import { Locator, Page } from "playwright";

export class HomePage {
  readonly page: Page;
  readonly email: Locator;
  readonly password: Locator;
  readonly btnAcessar: Locator;
  readonly btnRegistrar: Locator;


  constructor(page: Page) {
    this.page = page;
    this.email = page.locator('[name="email"]')
    this.password = page.locator('[name="email"]');
    this.btnAcessar = page.locator('[button="Acessar"]');
    this.btnRegistrar = page.locator('[button="Registrar"]');
  }

  async goto(title:String) {
    await this.page.goto('https://bugbank.netlify.app');
    expect(await page.innerText('//*[@id="__next"]/div/div[1]/h1')).toBe(title);
  }

  async login(email:string, password:string){
    await this.email.click();
    await this.email.fill(email);
    await this.password.click();
    await this.password.fill(password);
    await this.btnAcessar.click();
  }

}