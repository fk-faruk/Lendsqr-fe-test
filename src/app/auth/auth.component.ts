import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  ubaIcon: string = '/assets/UBA_icon.png';

  constructor(private router: Router) {}
  
  routeToDashboard() {
    this.router.navigate(['/dashboard/home']);
  }
}
