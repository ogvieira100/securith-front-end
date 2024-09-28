import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { StyleComponent } from '../../../store/models/style-components';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  style$: Observable<StyleComponent>;
  constructor(private store:Store<{ style: StyleComponent }>){
   
    this.style$ = this.store.select('style');

  }

}
