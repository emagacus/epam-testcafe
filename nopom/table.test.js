import {Selector} from 'testcafe'


fixture('Login feature testing')
    .page(`https://practicetestautomation.com/practice-test-exceptions/`)


test('Users can add a new food', async t => {
        await t
        .click('#add_btn')
        .expect(Selector('#confirmation').innerText).eql('Row 2 was added')

})