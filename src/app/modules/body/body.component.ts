import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  ubaLogo: string = '/assets/uba-logo.png'

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  constructor(private router: Router) {}

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
}
