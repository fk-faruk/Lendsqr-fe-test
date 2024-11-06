import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent {

  constructor(private route : Router,  private spinner : NgxSpinnerService) {}


  userInfo : any 



  routeTo() {
    this.route.navigate(['/dashboard/users']);
  }


  getUserInfo() {

    setTimeout(() => {
      this.spinner.hide();
      const dataFromLS = localStorage.getItem('user-profile')
      const parsedData =  dataFromLS ? JSON.parse(dataFromLS) : null;
   
      this.userInfo = parsedData
    }, 3000);
  

   console.log('User info:', this.userInfo);
  //  console.log(`User info: ${this.userInfo}`);
  }












ngOnInit() {
  this.spinner.show();
    this.getUserInfo()

}





}
