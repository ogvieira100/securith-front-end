import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from "./shared/components/loader/loader.component";
import { ComponentsModule } from './shared/components/components.module';
import { MasterPageModule } from './shared/components/master-page/master-page.module';

@Component({
  selector: 'pzs-root',
  standalone: true,
  imports: [ComponentsModule, RouterOutlet, LoaderComponent,MasterPageModule,MasterPageModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portal-zuritch';
}
