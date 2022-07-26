import { Locator, Page } from "playwright";

export class LoginPage {
  readonly page: Page;
  readonly email: Locator;
  readonly password: Locator;
  readonly btnEnter: Locator;
  readonly msgLoginError: Locator;
  readonly btnLogout: Locator;
  readonly lnkSignUp: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.email = page.locator('[data-testid="email"]');
    this.password = page.locator('[data-testid="senha"]');
    this.btnEnter = page.locator('[data-testid="entrar"]');
    this.btnLogout = page.locator('[data-testid="logout"]');
    this.msgLoginError = page.locator('#root > div > div > form > div.alert.alert-secondary.alert-dismissible > span')
    this.lnkSignUp = page.locator('[data-testid="cadastrar"]');
  }

  async goto() {
    await this.page.goto('https://front.serverest.dev/login');
    expect(await page.title()).toBe("Front - ServeRest");
  }

  async login(email:string, password:string){
    await this.email.click();
    await this.email.fill(email);
    await this.password.click();
    await this.password.fill(password);
    await this.btnEnter.click();
  }

 async logout() {
   await this.btnLogout.click();
 }

 async validateTitle (text:string){
  //wait locator is visible to be defined
  expect(page.locator('[data-testid="logout"]').isVisible).toBeDefined()
  //compare text parameter equals welcome title login succeded
  expect(await page.innerText("#root > div > div > h1")).toContain(text);
 }

  async validateMessageError(message:string){
    expect(this.msgLoginError.isVisible).toBeDefined();
    expect(await page.innerText('#root > div > div > form > div.alert.alert-secondary.alert-dismissible > span')).toContain(message);
  }

  async signUp() {
    await this.lnkSignUp.click();
    expect(page.locator('text=Cadastro').isVisible).toBeDefined();
  }

}