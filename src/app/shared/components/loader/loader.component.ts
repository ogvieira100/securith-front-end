import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../services/loader.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent implements OnInit {
 
  loading!:Observable<boolean> 
  constructor(private  loaderService:LoaderService)
  {


  }
  ngOnInit(): void {
   this.loading =  this.loaderService.loading$;
  }
   

}
