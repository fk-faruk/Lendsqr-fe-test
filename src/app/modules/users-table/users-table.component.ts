import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ViewChild, ViewContainerRef } from '@angular/core';
import { FormModalComponent } from '../components/form-modal/form-modal.component';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Users } from '../models/users';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent {
  @ViewChild('modalContainer', { read: ViewContainerRef })
  modalContainer!: ViewContainerRef;

  show: boolean = false;
  openForm: boolean = false;
  userData: Users[] = [];

  constructor(
    private modal: ModalService,
    private route: Router,
    private api: ApiService
  ) {}

  getUserdetails(){
    this.api.getUserDetails().subscribe({
      next: (data: any) => {
        this.userData = data
        console.log('data from mocky api>>>>>>>', this.userData);
      },
      error: (err) => {
        console.log('error gotten >>>>', err);
      },
    });
  }

  open() {
    this.openForm = !this.openForm;
    // this.modal.openModal()
    // console.log('modal has been clicked')
  }

  openModal() {
    this.modalContainer.clear(); // Clear any previously loaded component
    this.modalContainer.createComponent(FormModalComponent); // Directly create the component
  }

  routeTo() {
    this.route.navigate(['/dashboard/user-profile']);
  }

  showCard() {
    this.show = !this.show;
  }

  closeModal() {
    this.openForm = false;
  }

  ngOnInit() {
    this.getUserdetails();
  }
}
