import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error: string | null = null;
 constructor( private authService : AuthService, private router: Router){ 

 }
  checkbox: string = 'password';
  showpassword(){
return this.checkbox = this.checkbox === 'password' ? 'text' : 'password'
  }
   loginform = new FormGroup ({
  email: new FormControl('',[Validators.required]),
  password: new FormControl('',[Validators.required])
})
get email(){
  return this.loginform.get('email');
}
get password(){
  return this.loginform.get('password');
}

logIn() {
  const email = this.email?.value!;
  const password = this.password?.value!;
  if (this.loginform.valid) {
    // Check if the user is an admin
    if (email === 'admin' && password === 'Abc@1234') {
      this.router.navigate(['/admindash']); // Redirect to admin dashboard
    } else {
      this.authService.isUserRegistered(email)
        .then((isRegistered) => {
          if (isRegistered) {
            this.authService.login(email, password)
              .then(() => {
                this.router.navigate(['/intro']); // Redirect to home page
              })
              .catch((error) => {
                console.log('Error Logged');
              });
          } else {
            this.error = 'Either the username or password is wrong'; // Set custom error message
          }
        })
        .catch((error) => {
          console.log('Error Logged');
        });
    }
  } else {
    this.error = 'Invalid form data'; // Set custom error message
  }
}

  }

