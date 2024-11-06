import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  // ubaLogo: string = ''

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  constructor(private router: Router) {}

  adminName : string | null = ''

  routeToSignIn() {
    this.router.navigate(['/auth/signin']);
  }

  getBodyClass(): string {
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen'
    }
    return styleClass;
  }


  // ngOnit() {
  //  this.adminName = localStorage.getItem('adminName')
  //  console.log(this.adminName)
  // }

  ngOnInit() {
       this.adminName = localStorage.getItem('adminName')
   console.log(this.adminName)
  }
}
