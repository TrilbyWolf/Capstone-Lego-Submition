import MainPage from "../pageObjects/mainPage.website.js";
import SearchBar from "../pageObjects/searchbar.website.js";
describe("Testing the search bar",()=>{
    it('should test the functionality of the search bar function',async()=>{
        await MainPage.exe_Lego();
        await MainPage.bypassGates();
        await SearchBar.exeTests();
    })
})
