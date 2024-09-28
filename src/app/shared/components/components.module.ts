import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextFieldComponent } from './text-field/text-field.component';
import { ButtonComponent } from './button/button.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [TextFieldComponent,ButtonComponent],
  imports: [
    CommonModule,
    FormsModule 
  ], 
  exports:[TextFieldComponent,ButtonComponent]
})
export class ComponentsModule { }
