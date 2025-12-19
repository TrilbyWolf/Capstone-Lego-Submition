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
    exe_Lego(){
        return super.exe_Lego('');
    }
    async bypassGates(){
        await this.ageGateAdultButton.click();
        await this.stateGateRejectButton.click();
    }
}
export default new MainPage();