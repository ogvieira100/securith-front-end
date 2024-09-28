import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MasterPageModule } from "../../shared/components/master-page/master-page.module";

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterOutlet, MasterPageModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

}
