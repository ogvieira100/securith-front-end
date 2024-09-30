import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { AuthService } from '../../shared/services/auth.service';
import { LoaderService } from '../../shared/services/loader.service';
import { LoaderComponent } from "../../shared/components/loader/loader.component";
import { CaptchaComponent } from "../../shared/components/captcha/captcha.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, LoaderComponent, CaptchaComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
 public loginForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private loaderService:LoaderService,
    private readonly authService:AuthService,
    private readonly userService:UserService,
    private router: Router) {

    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get userName() 
  {

       return this.loginForm.get('userName')?.value

  }

  get password() 
  {

       return this.loginForm.get('password')?.value

  }

  async login() {

  

    if (this.loginForm.valid)
    {
     await  this.userService.logar({userName:this.userName,password:this.password})
       .then(e=>{
        
        this.authService.setToken(e.data?.accessToken ?? '')
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.router.navigateByUrl(returnUrl);


       }).catch(e=>{

          console.log(e)

       }).finally(()=>{})

     
     

    }

   
  }

}
