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

  users: Users[] = [];

  itemsPerPage = 10;  

  currentPage = 0; 

  totalPages = 0;


  constructor(
    private modal: ModalService,
    private route: Router,
    private api: ApiService
  ) {}






  // getUserdetails(){
  //   this.api.getUserDetails().subscribe({
  //     next: (data: any) => {
  //       this.users = data
  //       this.api.setUserData(data)
  //       console.log('data from mocky api>>>>>>>', this.users);
  //     },
  //     error: (err) => {
  //       console.log('error gotten >>>>', err);
  //     },
  //     complete:() => {
  //       this.userDataObservable()
  //     }
  //   });
  // }



  userDataObservable() {
      this.api.getUserData().subscribe({
        next: ((data) => {
          this.userData = data
          console.log('data from mocky api>>>>>>>', this.userData)
          this.totalPages = Math.ceil(this.userData.length / this.itemsPerPage);
          this.loadPage()
        }) ,
        error: ((err) => {
          console.log(err)
        })
      })
  }




  loadPage() {
    const startIndex = this.currentPage * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.users = this.userData.slice(startIndex, endIndex);
    
  }

  nextPage() {

    console.log('nextPage', this.currentPage)
    console.log('total pages', this.totalPages)
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage = this.currentPage + 1;
      this.loadPage();
    }
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadPage();
    }
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
    // this.getUserdetails();
  }
}
