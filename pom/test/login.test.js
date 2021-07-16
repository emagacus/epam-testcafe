
import {CREDENTIALS,URL} from '../data/Constants'
import PracticePage from '../pages/PracticePage'
import LoginPage from '../pages/LoginPage'


fixture('Login feature testing')
    .page(URL)
    .beforeEach(async t => {
        await PracticePage.clickLoginTests()
     })


test('Users can login using valid credentials', async t => {
        await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)
        await t.expect(LoginPage.postTitle.innerText).eql('Logged In Successfully')

})

test('Users gets an error when using incorrect credentials', async t => {
   
    await LoginPage.submitLoginForm(CREDENTIALS.INVALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)
    await t
    .expect(LoginPage.errorMessage.visible).eql(true)
    .expect(LoginPage.errorMessage.innerText).eql('Your username is invalid!')
    
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.INVALID_USER.PASSWORD)
    await t
    .expect(LoginPage.errorMessage.innerText).eql('Your password is invalid!')

})