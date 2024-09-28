import { HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";

export abstract class BaseService {

  protected controller: string = '';

  protected abstract getController(): string;

  protected url: string = environment.api;

  protected getUrl(): string {
      return this.url + this.controller;
  }

  constructor() {
      this.controller = this.getController();
  }


  protected TreateErrorHttp(returnHttp: any) {

      let messaSend: string | null = null;
      if (!returnHttp.error?.errors) {
          console.log(`${returnHttp.message}`)
          return
      }
      let countTotalMessages = returnHttp.error.errors.length;
      if (countTotalMessages > 0) {
          returnHttp.error.errors.map((mp: any) => {
              if (!messaSend)
                  messaSend = '';
              messaSend += mp.message + '\n'
          })
          if (messaSend) {
              console.log(`${messaSend}`)
          }
      }

  }

  protected GetHeaderJson() {
      return {
          headers: new HttpHeaders({
              'Content-Type': 'application/json'
          })
      };
  }

}