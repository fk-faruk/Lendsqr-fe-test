import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private route : Router) { }

  isLoggedIn : boolean = false



  loggedIn(authDetails: any) {

    console.log(authDetails)
    
    this.isLoggedIn = true
    this.route.navigate(['/dashboard/users'])
  }


  loggedOut() {
    this.route.navigate(['auth/signin'])
    this.isLoggedIn = false
    localStorage.clear()
  }



  isAuthenticated(){
    return this.isLoggedIn
  }

}
