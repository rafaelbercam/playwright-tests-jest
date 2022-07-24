import { Locator, Page } from "playwright";

export class UserPage {
    readonly page: Page;
    readonly name: Locator;
    readonly email: Locator;
    readonly password: Locator;
    readonly checkAdm: Locator;
    readonly btnSubmit: Locator;


    constructor(page: Page){
        this.page = page;
        this.name = page.locator('[data-testid="nome"]');
        this.email = page.locator('[data-testid="email"]');
        this.password = page.locator('[data-testid="password"]');
        this.checkAdm = page.locator('[data-testid="checkbox"]');
        this.btnSubmit = page.locator('[data-testid="cadastrar"]');
    }

   async submitUser (name:string, email:string, password:string, adm:boolean)  {
    await this.name.click();
    await this.name.type(name);
    await this.email.click();
    await this.email.type(email);
    await this.password.click();
    await this.password.type(password);
    if(adm){
        await this.checkAdm.check();
    }
    await this.btnSubmit.click();
   }
}