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
        return $('span[class*="SearchResults"]');
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
        ////Problem Str.1
        //await expect(this.results).toHaveText(expect.stringContaining("Search results for ""+input+"""));
    }
    async clickXClear(){
        await this.xClearButton.click();
    }
    async clickEnterKey(){
        //Problem Key.1.E
        //await browser.keys([Key.Ctrl,'Enter']);
    }
    async clickSpaceBar(){
        //Problem Key.1.S
        //await browser.keys([Key.Ctrl,'Space']);
    }
    async keepSearchingReturn1half(input){
        await expect(this.keepSearching).toBeExisting()
        //Problem Str.1
        //await expect(this.keepSearching).toHaveText(expect.stringContaining("Oops, we couldn't find anything for""+input+"", but don't give up"));
    }
    async errorReturn0(input){
        await expect(this.error).toBeExisting();
        await expect(this.error).toHaveText(expect.stringContaining("Page Not Found"));
    }
    async clickSearch(input){
        await this.clickSearchBar();
        await this.enterText(input);
    }
}
export default new SearchBar();