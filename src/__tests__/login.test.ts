import { AppPage } from "../pages/app.page";


describe("Login tests in Serverest Front", () => {
  const home =  new AppPage(page);

  it("home app", async () => {
    await home.goto('O banco com bugs e falhas do seu jeito');
  });

  it('login success',async () => {
    await home.login('rafael@email.com','Rafael');
  })

});
