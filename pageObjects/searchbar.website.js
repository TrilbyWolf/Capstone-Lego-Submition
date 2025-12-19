import { $ } from '@wdio/globals';
import { expect } from '@wdio/globals';
import { browser } from '@wdio/globals';
import Website from './website.js';
class SearchBar extends Website {
    get searchBar(){
        return $('input#desktop-search-search-input');
    }
    get magnifyingGlassButton(){
        return $('input+button');
    }
    get results(){
        return $('span[class*="SearchResults"] span');
    }
    get xClearButton(){
        return $('button[data-test="close-search"]');
    }
    get keepSearching(){
        return $('div[data-test="no-results"] h3');
    }
    get error(){
        return $('main h2');
    }
    async clickSearchBar(){
        await this.searchBar.click();
    }
    async enterText(input){
        await this.searchBar.setValue(input);
    }
    async clickMagnifyingGlass(){
        await this.magnifyingGlassButton.click();
    }
    async resultsReturn0(input){
        await expect(this.results).toBeExisting();
        await expect(this.results).toHaveText(expect.stringContaining(input));
    }
    async resultsReturn0_2(input){
        await expect(this.results).toBeExisting();
    }
    async clickXClear(){
        await this.xClearButton.click();
    }
    async clickEnterKey(){
        await browser.keys('Enter');
    }
    async clickSpaceBar(){
        await browser.keys('Space');
    }
    async keepSearchingReturn1half(input){
        await expect(this.keepSearching).toBeExisting()
        await expect(this.keepSearching).toHaveText(expect.stringContaining('Oops, we couldn'+"'"+'t find anything for'+input+', but don'+"'"+'t give up'));
    }
    async errorReturn1(){
        await expect(this.error).toBeExisting();
        await expect(this.error).toHaveText(expect.stringContaining("Page Not Found"));
    }
    async clickSearch(input){
        await this.clickSearchBar();
        await this.enterText(input);
    }
    async exeTests(){
        const input=['Ghost Rider','Avengers Tower','Pirate Ship'];
        await this.clickSpaceBar();
        await this.enterText(input[0]);
        await this.clickMagnifyingGlass();
        await this.resultsReturn0(input[0]);
        await this.clickSearch(input[1]);
        await this.clickXClear();
        await this.clickSearch(input[2]);
        await this.clickEnterKey();
        await this.resultsReturn0(input[2]);
        for(let cycleThroughChars=33;cycleThroughChars<127;cycleThroughChars++){
            await this.clickSearch(String.fromCharCode(cycleThroughChars));
            await this.clickEnterKey();
        }
        let characterBuild='';
        let step=0
        do{
            characterBuild=characterBuild+'aaaaa';
            await this.clickSearch(characterBuild);
            await this.clickEnterKey();
            await this.resultsReturn0_2(characterBuild);
            step++;
        }while(step<20);
        await this.clickSearchBar();
        await this.clickSpaceBar();
        await this.clickEnterKey();
        await this.errorReturn1();
        const code='public class Main {public static void main(String[] args) {System.out.println("LegoBuilder4ver");}}';
        await this.clickSearch(code);
        await this.clickEnterKey();
        await this.resultsReturn0(code);
    }
}
export default new SearchBar();