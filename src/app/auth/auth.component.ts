import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
  EmailValidator,
  FormBuilder,
} from '@angular/forms';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  ubaIcon: string = '/assets/UBA_icon.png';

  userAuth!: FormGroup 



  constructor(private router: Router, private fb : FormBuilder, private auth : AuthserviceService) {}
  
  submitForm()   {

    const {email , password} = this.userAuth.value
    localStorage.setItem('adminName', email)

    this.auth.loggedIn(this.userAuth.value)

    // this.router.navigate(['/dashboard/users']);
  }



  formvalidation() {
    this.userAuth = this.fb.group({
      email: ['', [Validators.required, Validators.email ]], // Email control
      password: ['', [Validators.required]] // Password control
    });
  }

  

 

  ngOnInit() {
      this.formvalidation()
  }
}
