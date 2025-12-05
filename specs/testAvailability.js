import MainPage from "../pageObjects/mainPage.website.js";
import AvailabilityFilter from "../pageObjects/availabilityFilter.website.js";
import Searchbar from "../pageObjects/searchbar.website.js";
describe("Testing the availability section of the filter function",()=>{
    it('should test the functionality of the availability section of the filter function',async()=>{
        await MainPage.open();
        await MainPage.bypassGates();
        await Searchbar.clickSearch('Ghost Rider');
        await Searchbar.clickMagnifyingGlass();
        await Searchbar.resultsReturn0('Ghost Rider');
    })
})