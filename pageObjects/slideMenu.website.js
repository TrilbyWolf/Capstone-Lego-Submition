import { $ } from '@wdio/globals';
import { expect } from '@wdio/globals';
import Website from './website.js';
class SlideMenu extends Website {
    get headerButtons(){
        return $('button[data-test="menu-bar-item-button"]');
    }
    get slideMenuLinks(){
        return $('ul[aria-hidden="false"] a');
    }
    get slideMenuSubButtons(){
        return $('ul[aria-hidden="false"] button');
    }
    get slideMenuSubLinks(){
        return $('div[class*="ChildrenContainer"][aria-hidden="false"] a');
    }
    get breadCrumbs(){
        return $$('ol li:last-child a');
    }


    async breadCrumbsExist(){
        await expect(this.breadCrumbs).toBeExisting();
    }
}
export default new SlideMenu();