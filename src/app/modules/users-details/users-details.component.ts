import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent {

  constructor(private route : Router) {}


  userInfo : any 



  routeTo() {
    this.route.navigate(['/dashboard/users']);
  }


  getUserInfo() {
   const dataFromLS = localStorage.getItem('user-profile')
   const parsedData =  dataFromLS ? JSON.parse(dataFromLS) : null;

   this.userInfo = parsedData

   console.log('User info:', this.userInfo);
  //  console.log(`User info: ${this.userInfo}`);
  }












ngOnInit() {
    this.getUserInfo()
}





}
