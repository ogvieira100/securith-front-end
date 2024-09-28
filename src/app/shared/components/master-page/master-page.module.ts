import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MasterPageComponent } from './master-page/master-page.component';
import { LoaderComponent } from "../loader/loader.component";
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MasterPageComponent
  ],
  imports: [
    CommonModule,
    LoaderComponent,
    FormsModule // Adicionar o FormsModule aqui
],
  exports:[
    
    MasterPageComponent
  ]
})
export class MasterPageModule { }
