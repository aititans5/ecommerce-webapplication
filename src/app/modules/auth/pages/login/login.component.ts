import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { login_user } from 'src/app/core/models/login_user';
import { LoginService } from 'src/app/core/services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  messageerrors : string;

  messageloginerrors : string;

  isSubmitted = false;

  user: login_user;

  constructor(private loginservice : LoginService, private route : Router) {
  }

  validationMessage = {
    email : {
      required: 'username must be required',
    },
    password: {
      required: 'password must be required',
    }
  };

  formloginErrors = {
    email : '',
    password: ''
  };


  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(10)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

    this.loginForm.valueChanges.subscribe((data) => {
      this.logloginErrors();
   });

  }

  logloginErrors(): void {
    this.messageloginerrors = '';
    if (this.loginForm.get('email') &&  this.loginForm.get('email')?.errors) {
        if (this.loginForm.get('email')?.errors?.required) {
            this.messageloginerrors = 'email must be required';
        } else if (this.loginForm.get('email')?.errors?.minlength) {
          this.messageloginerrors = 'email must have minimum 10 character length';
        }
    } else if (this.loginForm.get('password') && this.loginForm.get('password')?.errors) {
      if (this.loginForm.get('password')?.errors?.required) {
        this.messageloginerrors = 'Password must be required';
      } else if (this.loginForm.get('password')?.errors?.minlength) {
        this.messageloginerrors = 'password must have minimum 6 character length';
      }
    }
  }


  onSubmit() {
    if (this.loginForm.valid) {
      // Perform login logic here

      this.user = new login_user(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value)

      this.loginservice.loginUser(this.user).subscribe((response)=>{
            if(response.user)
            {
               // set jwt token in session storage.
               var token = response.user.access;
               sessionStorage.setItem('jwt_token', token);
               console.log("user login successfully");
               this.route.navigate(['/ecommerce/inventory']);
            }
      });
      // Reset the form
      this.loginForm.reset();
        }
        else {
          this.isSubmitted = true
          this.logloginErrors();
        }
   }

   ngOnDestroy(): void {
    if (this.loginForm) {
      // this.loginForm.unsubscribe();
    }
  }
}
