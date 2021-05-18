const expect = require("chai").expect;
import {URLs} from "../../expected";
import PracticeForm from '../../pageobjects/practiceForm.page'


describe ('Validate Practice Form', () => {
    before(() => {
        browser.maximizeWindow();
    });
    
    it('Make a selection in State DD', () => {
        browser.url(URLs.practiceForm);
        if(!PracticeForm.ddState.isDisplayedInViewport()) PracticeForm.ddState.scrollIntoView();
        PracticeForm.ddState.click();
        PracticeForm.ddStateList[0].waitForExist({timeout: 10000});
        const stateList = PracticeForm.ddStateList.map(el => el.getText());
        console.log(stateList);
        const state = 'Haryana';
        const index = stateList.indexOf(state);
        PracticeForm.ddStateList[index].click();
        
    });

it('Get the list of cities per state', () => {
        let obj = {};
        PracticeForm.ddState.click();
        PracticeForm.ddStateList[0].waitForExist({ timeout: 10000 });
        for(let i = 0; i< PracticeForm.ddStateList.length; i++){
            const state = PracticeForm.ddStateList[i].getText();
            PracticeForm.ddStateList[i].click();
            PracticeForm.ddCity.click();
            PracticeForm.ddCityList[0].waitForExist({ timeout: 10000 });
            const cityList = PracticeForm.ddCityList.map(el => el.getText());
            obj[state] = [...cityList];
            PracticeForm.ddState.click();
        }
        console.log(obj);
    });
});
