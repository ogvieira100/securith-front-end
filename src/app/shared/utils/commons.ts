import { AbstractControl } from "@angular/forms";

export class Commons {

    static   getBaseUrl():string {
        let baseUrl = document.getElementsByTagName('base')[0].href.slice(0, -1);
        return baseUrl.replace(/^http[s]{0,1}\:/, '');
      }


    static generateGUID   ():string
    {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });

    } 

}
