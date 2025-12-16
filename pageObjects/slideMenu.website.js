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
        return $('ol li:last-child span');
    }
    get banner(){
        return $('h1');
    }
    async exeAll(){
        let headers=0;
        let links=0;
        let linkLimit=0;
        let buttons=0;
        let buttonLimit=0;
        let subLinks=0;
        let subLinkLimit=0;
        do{
            do{
                await this.headerButtons[headers].click();
                //await expect(this.slideMenuLinks).toBeExisting();
                linkLimit=await this.slideMenuLinks.length;
                console.log('Link Limit: '+await this.slideMenuLinks.length);
                await this.slideMenuLinks[links].click();
                //await expect(this.breadCrumbs).toBeExisting();
                links++;
            }while(links<3);
            if(headers<2){
                do{
                    do{
                        console.log('Sublinks'+subLinks);
                        await this.headerButtons[headers].click();
                        //await expect(this.slideMenuSubButtons).toBeExisting();
                        buttonsLimit=await this.slideMenuSubButtons.length;
                        console.log('Button Limit: '+await this.slideMenuSubButtons.length);
                        await this.slideMenuSubButtons[buttons].click();
                        //await expect(this.slideMenuSubLinks).toBeExisting();
                        subLinkLimit=await this.slideMenuSubLinks.length;
                        await this.slideMenuSubLinks[subLinks].click();
                        //await expect(this.banner).toBeExisting();
                        subLinks++;
                    }while(subLinks<subLinkLimit);
                    buttons++;
                }while(buttons<buttonLimit);
            }
            headers++;
        }while(headers<await this.headerButtons.length);
    }
}
export default new SlideMenu();