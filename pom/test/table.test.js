import {Selector} from 'testcafe'
import {URL} from '../data/Constants'
import PracticePage from '../pages/PracticePage'
import ExceptionsPage from '../pages/ExceptionsPage'
import exceptionsPage from '../pages/ExceptionsPage'

fixture('Food table feature testing')
    .page(URL)
    .beforeEach(async t => {
        await PracticePage.clickExceptionsTests()
     })


test('Users can add a new food', async t => {
        await 
        exceptionsPage.addFood()
        await t.expect(Selector('#confirmation').innerText).eql('Row 2 was added')

})

test('Users can remove a food', async t => {
    await exceptionsPage.removeFood()
    await t
    .expect(Selector('#confirmation').innerText).eql('Row 2 was removed')

})