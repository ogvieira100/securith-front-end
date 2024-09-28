import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'pzs-modal',
  standalone: true,
  imports: [CommonModule,NgbModalModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  @Input() showCancel: boolean = true;
  @Input() showYes: boolean = false;
  @Input() showNo: boolean = false;

  @Output() YesClicked = new EventEmitter();
  @Output() NoClicked = new EventEmitter();

  @Input() title: string = '';

  @Input() customComponent!: any;


  onYesClicked() {

    this.YesClicked.emit()
    
    }

  onNoClicked() {

    this.NoClicked.emit()
    
  }

  constructor(public activeModal: NgbActiveModal) {}

}
