import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private localStorage?: Storage;
  private readonly tokenCookieName = 'portal-zuritch-fornecedor-token';
  

  constructor(@Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object) {

    if (isPlatformBrowser(this.platformId)) this.localStorage = document.defaultView?.localStorage;

  }

  logout() {
    this.cleanStorageData();
  }
  isLoggedIn(): Boolean {
    return (this.getToken() != null);
  }
  getToken(): string {
    return this.localStorage!.getItem(this.tokenCookieName)!;
  }
  setToken(token: string) {
    this.localStorage!.setItem(this.tokenCookieName, token);
  }
  cleanStorageData() {
    this.localStorage!.removeItem(this.tokenCookieName);
  }

}
