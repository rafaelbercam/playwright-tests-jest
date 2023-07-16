import { Locator, Page } from "playwright";

export class AppPage {
  readonly page: Page;
  readonly email: Locator;
  readonly password: Locator;
  readonly btnAcessar: Locator;
  readonly btnRegistrar: Locator;


  constructor(page: Page) {
    this.page = page;
    this.email = page.locator('//*[@id="__next"]/div/div[2]/div/div[1]/form/div[1]/input')
    this.password = page.locator('//*[@id="__next"]/div/div[2]/div/div[1]/form/div[2]/div/input');
    this.btnAcessar = page.locator('#__next > div > div.pages__FormBackground-sc-1ee1f2s-2.jNpkvU > div > div.card__login > form > div.login__buttons > button.style__ContainerButton-sc-1wsixal-0.otUnI.button__child');
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