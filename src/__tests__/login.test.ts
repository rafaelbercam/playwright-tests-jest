import loginFactory from "../factory/login.factory";
import { LoginPage } from "../pages/login.page";

describe("Login tests in Serverest Front", () => {
  const login =  new LoginPage(page);

  it("login succeeded", async () => {
    await login.goto();
    await login.login(loginFactory.loginSuccess.email, loginFactory.loginSuccess.password);
    await login.validateTitle("Bem Vindo Rafael Bercam");
    await login.logout();
  });

  it("Login Fail",async () => {
    await login.login(loginFactory.loginFail.email, loginFactory.loginFail.password);
    await login.validateMessageError("Email e/ou senha inválidos")
  })

});
