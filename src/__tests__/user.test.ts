import UserFactory from "../factory/user.facoty";
import { LoginPage } from "../pages/login.page";
import { UserPage } from "../pages/user.page"

describe('User functional tests', ()=>{
    const user = new UserPage(page);
    const login = new LoginPage(page);

    it('create user succeeded',async () => {
        let userdata = UserFactory.createUser();

        await login.goto();
        await login.signUp();
        await user.submitUser(
            userdata.nome, 
            userdata.email, 
            userdata.password, 
            userdata.administrador);
    })
})