import { $$ } from '@wdio/globals';
import { expect } from '@wdio/globals';
import Website from './website.js';
class AvailabilityFilter extends Website {
    get availabilityDropdown(){
        return $('button[id*="availability"]');
    }
    get availabilityOptions(){
        return $$('div[id*="availability-accordion"] label');
    }
    get setAvailabilites(){
        return $$('ul#product-listing-grid div[class*="ProductLeaf"] a');
    }
    async clickAvailability(){
        await this.availabilityDropdown.click();
        await console.log("Exe-"+this.availabilityOptions.length);
    }
    async clickAvailabilityOption(index){
        await this.availabilityOptions[index].click();
    }
    async executeAllAvailabilityCombinations(){
        for(let selected=0;selected<await this.availabilityOptions.length;selected++){
            await this.clickAvailabilityOption(selected);
            await this.executingCombinationRoute(selected);
            await this.clickAvailabilityOption(selected);
        }
    }
    async executingCombinationRoute(selected){
        console.log('Selecting Option Index: '+await selected);
        if(selected<await this.availabilityOptions.length-1){
            for(let afterSelected=selected+1;afterSelected<await this.availabilityOptions.length;afterSelected++){
                await this.clickAvailabilityOption(afterSelected);
                await this.executingCombinationRoute(afterSelected);
                await this.clickAvailabilityOption(afterSelected);
            }
        }
    }
}
export default new AvailabilityFilter();