import MainPage from "../pageObjects/mainPage.website.js";
import SlideMenu from "../pageObjects/slideMenu.website.js";
describe("Testing slide menu function",()=>{
    it('should test the functionality of the slide menu',async()=>{
        await MainPage.open();
        await MainPage.bypassGates();
        let headers=0;
        do{
            for(let links=0;links<7;links++){
                await SlideMenu.clickLink(headers,links);
                links++;
            }
            if(headers<2){
                let buttons=0;
                do{
                    let subLinks=0;
                    do{
                        await SlideMenu.clickSubLink(headers,buttons,subLinks);
                        subLinks++;
                    }while(subLinks<await SlideMenu.slideMenuSubLinks.length);
                    buttons++;
                }while(buttons<await SlideMenu.slideMenuSubButtons.length);
            }
            headers++;
        }while(headers<await SlideMenu.headerButtons.length);
    })
})