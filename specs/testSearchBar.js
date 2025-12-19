import MainPage from "../pageObjects/mainPage.website.js";
import SearchBar from "../pageObjects/searchbar.website.js";
describe("Testing the search bar",()=>{
    it('should test the functionality of the search bar function',async()=>{
        const input=['Ghost Rider','Avengers Tower','Pirate Ship'];
        await MainPage.open();
        await MainPage.bypassGates();
        await SearchBar.exeTests();
    })
})
