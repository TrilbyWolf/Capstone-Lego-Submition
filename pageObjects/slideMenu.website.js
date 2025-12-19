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
        return $('ol li:last-child');
    }
    get banner(){
        return $('h1');
    }
    async exeAll(){
        let headers=0;
        do{
            for(let links=0;links<7;links++){
                await expect(this.headerButtons[headers]).toBeClickable();
                await this.headerButtons[headers].click();
                await expect(this.slideMenuLinks[links]).toBeClickable();
                await this.slideMenuLinks[links].click();
                await expect(this.breadCrumbs).toBeExisting();
            }
            if(headers<2){
                let buttons=0;
                do{
                    let subLinks=0;
                    do{
                        await expect(this.headerButtons[headers]).toBeClickable();
                        await this.headerButtons[headers].click();
                        await expect(this.slideMenuSubButtons[buttons]).toBeExisting();
                        await expect(this.slideMenuSubButtons[buttons]).toBeClickable();
                        await this.slideMenuSubButtons[buttons].click();
                        await expect(this.slideMenuSubLinks[subLinks]).toBeExisting();
                        await expect(this.slideMenuSubLinks[subLinks]).toBeClickable();
                        await this.slideMenuSubLinks[subLinks].click();
                        if(headers==0||headers==1&&(buttons==1&&subLinks<2||subLinks==0&&buttons<3&&buttons>0)){
                            await expect(this.breadCrumbs).toBeExisting();
                        }else if(buttons<3){
                            await expect(this.banner).toBeExisting();
                        }else{
                            await expect(this.pokemonBanner).toBeExisting();
                        }
                        subLinks++;
                    }while(subLinks<await this.slideMenuSubLinks.length);
                    buttons++;
                }while(buttons<await this.slideMenuSubButtons.length);
            }
            headers++;
        }while(headers<await this.headerButtons.length);
    }
    async clickLink(headers,links){
        await expect(this.headerButtons[headers]).toBeClickable();
        await this.headerButtons[headers].click();
        await expect(this.slideMenuLinks[links]).toBeClickable();
        await this.slideMenuLinks[links].click();
        if(headers<2||links<5){
            await expect(this.breadCrumbs).toBeExisting();
        }else{
            await expect(this.banner).toBeExisting();
        }
        
    }
    async clickSubLink(headers,buttons,subLinks){
        await expect(this.headerButtons[headers]).toBeClickable();
        await this.headerButtons[headers].click();
        await expect(this.slideMenuSubButtons[buttons]).toBeExisting();
        await expect(this.slideMenuSubButtons[buttons]).toBeClickable();
        await this.slideMenuSubButtons[buttons].click();
        await expect(this.slideMenuSubLinks[subLinks]).toBeExisting();
        await expect(this.slideMenuSubLinks[subLinks]).toBeClickable();
        await this.slideMenuSubLinks[subLinks].click();
        if(headers==0||headers==1&&(buttons==1&&subLinks<2||subLinks==0&&buttons<3&&buttons>0)){
            await expect(this.breadCrumbs).toBeExisting();
        }else{
            await expect(this.banner).toBeExisting();
        }
        subLinks++;
    }
}
export default new SlideMenu();