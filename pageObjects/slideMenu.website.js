import { $$ } from '@wdio/globals';
import { expect } from '@wdio/globals';
import Website from './website.js';
class SlideMenu extends Website {
    get headerButtons(){
        return $$('button[data-test="menu-bar-item-button"]');
    }
    get slideMenuLinks(){
        return $$('ul[aria-hidden="false"] a');
    }
    get slideMenuSubButtons(){
        return $$('ul[aria-hidden="false"] button');
    }
    get slideMenuSubLinks(){
        return $$('div[class*="ChildrenContainer"][aria-hidden="false"] a');
    }
    get breadCrumbs(){
        return $('nav ol li:last-child');
    }
    get banner(){
        return $('h1');
    }
    async exeAll(){
        let headers=0;
        do{
            let links=0;
            await expect(this.headerButtons[headers]).toBeClickable();
            await this.headerButtons[headers].click();
            //console.log('Executed');
            //console.log('Link Limit: '+await this.slideMenuLinks.length);
            await expect(this.slideMenuLinks[links]).toBeClickable();
            await this.slideMenuLinks[links].click();
            await expect(this.breadCrumbs).toBeExisting();
            if(headers<2){
                let buttons=1;
                let subLinks=0;
                console.log('Sublinks'+subLinks);
                await expect(this.headerButtons[headers]).toBeClickable();
                await this.headerButtons[headers].click();
                await expect(this.slideMenuSubButtons[buttons]).toBeExisting();
                //console.log('Button Limit: '+await this.slideMenuSubButtons.length);
                await expect(this.slideMenuSubButtons[buttons]).toBeClickable();
                await this.slideMenuSubButtons[buttons].click();
                await expect(this.slideMenuSubLinks[subLinks]).toBeExisting();
                await expect(this.slideMenuSubLinks[subLinks]).toBeClickable();
                await this.slideMenuSubLinks[subLinks].click();
                await expect(this.breadCrumbs).toBeExisting();
            }
            headers++;
        }while(headers<await this.headerButtons.length);
    }
}
export default new SlideMenu();