import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaModule,RecaptchaFormsModule , RecaptchaV3Module, ReCaptchaV3Service } from 'ng-recaptcha';
import { environment } from '../../../../environments/environment';
import { CommonModule } from '@angular/common';
import { NgxCaptchaModule, ReCaptcha2Component } from 'ngx-captcha';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'pzs-captcha',
  standalone: true,
  providers: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxCaptchaModule 
    ],
  templateUrl: './captcha.component.html',
  styleUrl: './captcha.component.css'
})
export class CaptchaComponent implements OnInit {

  @ViewChild('captchaElem') captchaElem: ReCaptcha2Component | undefined;

  constructor(private readonly userService:UserService)
  {


  }

  resetCaptcha() {
    this.captchaElem?.resetCaptcha(); // Reset do reCAPTCHA
    this.captchaToken = ``; // Opcional: Resetar o token armazenado
  }


  ngOnInit(): void {
    this.captchaKey =  environment.recaptcha.siteKey;
  }

  captchaToken: string = ``;
  captchaKey:string = environment.recaptcha.siteKey;

  async onCaptchaSuccess(token: string) {
    this.captchaToken = token;
    await this.userService.verifyCaptcha(this.captchaToken).then(e=>{

          alert('captcha verify')
          console.log(e)
      
   }).catch(e=>{

          alert('captcha invalid')

   }).finally(()=>{
    this.resetCaptcha();

   })
   
   ;
    //console.log('reCAPTCHA resolved with token: ', this.captchaToken);
  }

  submitForm() {
    if (!this.captchaToken) {
      alert('Por favor, resolva o reCAPTCHA.');
      return;
    }
  }

}
