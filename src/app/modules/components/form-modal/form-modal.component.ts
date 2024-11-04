import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent {

  constructor( private modal : ModalService) {}


  isOpen = false;

 

  closeModal() {
    this.modal.closeModal();
  }



  ngOnInit(): void {
    console.log('from the modal compoenent')
    this.modal.isOpen$.subscribe((state) => {
      this.isOpen = state;
      console.log('what is the state here >>>>', this.isOpen);
    });
  }
  
}
