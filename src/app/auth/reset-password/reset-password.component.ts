import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  constructor(private Auth: AuthService){  }
resetPassForm = new FormGroup ({
  remail: new FormControl('', [Validators.required, Validators.email])
})
get remail(){
  return this.resetPassForm.get('remail');
}
reset(){
  const remail = this.remail?.value!;
  this.Auth.resetPassword(remail).then(()=>{
    console.log('reset');
  })
}
}

