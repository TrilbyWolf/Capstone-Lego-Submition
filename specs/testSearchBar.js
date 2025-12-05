import MainPage from "../pageObjects/mainPage.website.js";
import SearchBar from "../pageObjects/searchbar.website.js";
describe("Testing the search bar",()=>{
    it('should test the functionality of the search bar function',async()=>{
        const input=['Ghost Rider','Avengers Tower','Pirate Ship'];
        await MainPage.open();
        await MainPage.bypassGates();
        await SearchBar.clickSpaceBar();
        await SearchBar.enterText(input[0]);
        await SearchBar.clickMagnifyingGlass();
        await SearchBar.resultsReturn0(input[0]);
        await SearchBar.clickSearch(input[1]);
        await SearchBar.clickXClear();
        await SearchBar.clickSearch(input[2]);
        await SearchBar.clickEnterKey();
        await SearchBar.resultsReturn0(input[2]);
        for(const cycleThroughChars=33;cycleThroughChars<127;cycleThroughChars++){
            await SearchBar.clickSearch(String.fromCharCode(cycleThroughChars));
            await SearchBar.resultsReturn0(String.fromCharCode(cycleThroughChars));
            await SearchBar.keepSearchingReturn1half(String.fromCharCode(cycleThroughChars));
        }
        const characterBuild="";
        const increaseStr=1;
        ///do{

            ///increaseStr++;
        ///}while(characterBuild.equals);
        await SearchBar.clickSearchBar();
        await SearchBar.clickSpaceBar();
        await SearchBar.errorReturn0();
        await SearchBar.clickSearchBar();
        await SearchBar.clickEnterKey()
        const code='public class Main {public static void main(String[] args) {int digit=77031;int tick=1;do{if(digit%2==0){digit=digit/2;}else{digit=(digit*3)+1;}System.out.println(tick+": "+digit);tick++;}while(digit>1);}}';
        await SearchBar.clickSearch(code);
        await SearchBar.resultsReturn0(code);
    })
})
