import { Selector,t } from "testcafe"

class PracticePage{
    constructor()
    {
        this.loginTestsLink = Selector('a').withText('Test Login Page')
        this.exceptionsTestsLink = Selector('a').withText('Test Exceptions')
    }

    async clickLoginTests()
    {
        await t.click(this.loginTestsLink)
    }

    async clickExceptionsTests()
    {
        await t.click(this.exceptionsTestsLink)
    }
}
export default new PracticePage()