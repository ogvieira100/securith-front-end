import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MasterPageModule } from "../../shared/components/master-page/master-page.module";

@Component({
  selector: 'app-access-denied',
  standalone: true,
  imports: [RouterOutlet, MasterPageModule],
  templateUrl: './access-denied.component.html',
  styleUrl: './access-denied.component.css'
})
export class AccessDeniedComponent {

}
