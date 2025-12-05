import MainPage from "../pageObjects/mainPage.website.js";
describe("Testing all functions",()=>{
    it('should test all test cases at once',async()=>{
        await MainPage.open();
        await MainPage.bypassGates();
    }) 
})