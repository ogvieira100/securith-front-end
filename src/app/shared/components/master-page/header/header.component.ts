import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { StyleComponent } from '../../../../store/models/style-components';
import { changeStyle } from '../../../../store/action/style-action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  selectedOption: string = 'blue'; // Valor padrão

  constructor(private readonly authService:AuthService,
    private readonly router: Router,private store:Store<{ style: StyleComponent }>){


    }

    onOptionChange(newValue: StyleComponent['typeStyled']): void {
     
        this.store.dispatch(changeStyle({typeStyled: newValue}));        

    }

  public logoff()
  {
      this.authService.logout();
      this.router.navigate(['/login'])
  }

}
