import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { registerUser } from 'src/app/core/models/register';
import { RegisterUserService } from 'src/app/core/services/register-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationForm : FormGroup;

  user : registerUser;

  showresponse : boolean = false;

  responsemsg : string;

  constructor(private registerService : RegisterUserService) { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      username: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  closeDiv(){
    this.showresponse = false;
  }

  onSubmit() {
    if (this.registrationForm.valid) {


      this.user = new registerUser(this.registrationForm.get('email')?.value,  this.registrationForm.get('name')?.value,this.registrationForm.get('password')?.value,this.registrationForm.get('username')?.value);

      // Perform registration logic here
      this.registerService.registerUser(this.user).subscribe((response)=>{
        this.responsemsg = response['message'];
        this.showresponse = true;
      });
      // Reset the form
      this.registrationForm.reset();
    }
}

}
