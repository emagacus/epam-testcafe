import {Selector} from 'testcafe'


fixture('Login feature testing')
    .page(`https://practicetestautomation.com/practice-test-login/`)


test('Users can login using valid credentials', async t => {
        await t
        .typeText('input#username','student')
        .typeText('#password','Password123')
        .click('#submit')
        .expect(Selector('.post-title').innerText).eql('Logged In Successfully')

})

test('Users gets an error when using incorrect credentials', async t => {
    await t
    .click('#submit')
    .expect(Selector('#error').visible).eql(true)
    .expect(Selector('#error').innerText).eql('Your username is invalid!')
    .typeText('input#username','student')
    .click('#submit')
    .expect(Selector('#error').innerText).eql('Your password is invalid!')

})