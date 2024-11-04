import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent {

  constructor(private route : Router) {}



  routeTo() {
    this.route.navigate(['/dashboard/users']);
  }
}
