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

  show : boolean = false;

  input : string = 'password';

  display : string = ''


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


  showPassword() {
    
    this.show = !this.show;
    this.input = this.input === 'password' ? 'text' : 'password';
    // this.show = !this.show

    // if (this.show) {
    //   this.input = 'text'
    //   this.display = 'HIDE'
    // }else {
    //   this.input = 'password'
    //   this.display = 'SHOW'
    // }

  }
  

 

  ngOnInit() {
      this.formvalidation()
  }
}
