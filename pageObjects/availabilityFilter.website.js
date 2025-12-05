import { $ } from '@wdio/globals';
import { expect } from '@wdio/globals';
import Website from './website.js';
class AvailabilityFilter extends Website {
    get availabilityDropdown(){
        return $(button[id*="availability-accordion"]);
    }
    get availabilityOptions(){
        return $('div[id*="availability-accordion"] label');
    }
    get setAvailabilites(){
        return $('ul#product-listing-grid div[class*="ProductLeaf"] a');
    }
    get check(){
        return 
    }
    async clickAvailability(){
        await this.availabilityDropdown.click();
    }
    async clickAvailabilityOption(index){
        await this.availabilityOptions[index].click();
    }
}
export default new AvailabilityFilter();