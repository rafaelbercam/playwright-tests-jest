import { LoginPage } from "../pages/login.page";

describe("Login tests in Serverest Front", () => {
  const login =  new LoginPage(page);

  it("login succeeded", async () => {
    await login.goto();
    await login.login("fulano@qa.com", "teste");
    await login.validateTitle("Bem Vindo Fulano da Silva");
    await login.logout();
  });

  it("Login Fail",async () => {
    await login.login("fulano@qa.com", "anyPass");
    await login.validateMessageError("Email e/ou senha inválidos")
  })

});
