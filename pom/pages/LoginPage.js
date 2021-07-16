import {Selector,t} from 'testcafe'

export class LoginPage
{
    constructor(){
        this.userField = Selector('#username')
        this.passwordField = Selector('#password')
        this.loginButton = Selector('#submit')
        this.postTitle = Selector('.post-title')
        this.errorMessage = Selector('#error')
    }

    async submitLoginForm(username,password)
    {
        await  t.typeText(this.userField,username)
        await t.typeText(this.passwordField,password)
        await t.click(this.loginButton)
    }
}

export default new LoginPage()