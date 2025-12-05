import { $ } from '@wdio/globals';
import { expect } from '@wdio/globals';
import { browser} from '@wdio/globals';
import Website from './website.js';
class MainPage extends Website {
    get ageGateAdultButton(){
        return $('button#age-gate-grown-up-cta');
    }
    get stateGateRejectButton(){
        return $('button#cookie-necessary-button');
    }
    open(){
        return super.open('');
    }
    async bypassGates(){
        //console.log("[Wolf]- Exe Code(100.1)");
        await this.ageGateAdultButton.click();
        await this.stateGateRejectButton.click();
    }
}
export default new MainPage();