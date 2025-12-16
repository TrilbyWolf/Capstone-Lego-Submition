import MainPage from "../pageObjects/mainPage.website.js";
import SlideMenu from "../pageObjects/slideMenu.website.js";
describe("Testing slide menu function",()=>{
    it('should test the functionality of the slide menu',async()=>{
        await MainPage.open();
        await MainPage.bypassGates();
        await SlideMenu.exeAll();
    })
})