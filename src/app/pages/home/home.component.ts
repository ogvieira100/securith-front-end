import { Component } from '@angular/core';
import { ComponentsModule } from '../../shared/components/components.module';
import { RouterOutlet } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { LoaderService } from '../../shared/services/loader.service';
import { MasterPageModule } from "../../shared/components/master-page/master-page.module";
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { CaptchaComponent } from "../../shared/components/captcha/captcha.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ComponentsModule, MasterPageModule, NgbModalModule, CaptchaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  celciusVal:string  = ''

  async clickCelcius() {

    await    this.userService.celcius(100).then(e=>{
        this.celciusVal = e.data?.resposta ?? '';

    }).catch(e=>{}).finally(()=>{})
  }
  

  constructor(private readonly modalService: NgbModal, private readonly userService:UserService, private readonly loaderService:LoaderService){}


  openModal() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = 'Modal com Componente Personalizado';
    modalRef.componentInstance.customComponent = NotFoundComponent; // Passa o componente personalizado
  }


}
