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
        for(let cycleThroughChars=33;cycleThroughChars<127;cycleThroughChars++){
            await SearchBar.clickSearch(String.fromCharCode(cycleThroughChars));
            await SearchBar.clickEnterKey();
        }
        let characterBuild='';
        let step=0
        do{
            characterBuild=characterBuild+'aaaaa';
            console.log('Current Build: '+characterBuild);
            await SearchBar.clickSearch(characterBuild);
            await SearchBar.clickEnterKey();
            await SearchBar.resultsReturn0_2(characterBuild);
            console.log('Executed');
            console.log('Boolean: '+characterBuild==await SearchBar.results.getText());
            step++;
        }while(step<20);

        await SearchBar.clickSearchBar();
        await SearchBar.clickSpaceBar();
        await SearchBar.clickEnterKey();
        await SearchBar.errorReturn1();
        const code='public class Main {public static void main(String[] args) {System.out.println("LegoBuilder4ver");}}';
        await SearchBar.clickSearch(code);
        await SearchBar.clickEnterKey();
        await SearchBar.resultsReturn0(code);
    })
})
