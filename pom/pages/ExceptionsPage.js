import { Selector,t } from "testcafe"

class ExceptionsPage{

    constructor(){
       this.confirmationMessage = Selector('#confirmation')
       this.removeButton = Selector('#remove_btn')
       this.addButton = Selector('#add_btn')
       this.secondRow = Selector('label').withExactText('Row 2')
    }

    async addFood()
    {
        await t.click(this.addButton)
    }

    async removeFood()
    {
        await t
        .click(this.removeButton)
    }
}

export default new ExceptionsPage()