import { LoginPage } from "../pages/login.page";

describe("Login tests in Serverest Front", () => {
  const login =  new LoginPage(page);

  it("login succeeded", async () => {
    await login.goto();
    await login.login();
    await login.validateTitle("Bem Vindo  ");
  });

});
