import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { UserResponse } from '../models/user-response';
import { catchError, delay, firstValueFrom, of, throwError } from 'rxjs';
import { UserRequest } from '../models/user-request';
import { ReturnHttp } from '../models/return-http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {


  constructor(
    private readonly http: HttpClient) {
    super()

  }


  protected override getController(): string {
    return `user`;

  }


  public async celcius(celcius:number):Promise<ReturnHttp<{resposta:string}>>{
    return await firstValueFrom(
      this.http.get<ReturnHttp<{resposta:string}>>(`${this.getUrl()}/celcius/${celcius}`)
      .pipe(
        catchError(error => {
          this.TreateErrorHttp(error);
          return throwError(() => error); // Repropaga o erro se necessário
        })
      )
    );
  }


  public async verifyCaptcha(token:string):Promise<ReturnHttp<object>>{
    return await firstValueFrom(this.http.get<ReturnHttp<object>>(`${this.getUrl()}/verifyCaptcha?captchaToken=${token}`)
      .pipe(
        catchError(error => {
          this.TreateErrorHttp(error);
          return throwError(() => error); // Repropaga o erro se necessário
        })
      )
  );

  }


  public async logar(user: UserRequest): Promise<ReturnHttp<UserResponse>> {
    return await firstValueFrom(
      this.http.get<ReturnHttp<UserResponse>>(`${this.getUrl()}/?username=${user.userName}&password=${user.password}`)
      .pipe(
        catchError(error => {
          this.TreateErrorHttp(error);
          return throwError(() => error); // Repropaga o erro se necessário
        })
      )
    );
  }
}
