import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-entrepreneur',
  templateUrl: './entrepreneur.component.html',
  styleUrls: ['./entrepreneur.component.css']
})
export class EntrepreneurComponent {
  constructor(private Auth: AuthService){}
  joinForm = new FormGroup({
    fname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    storen: new FormControl('',[Validators.required]),
    phno: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
    email: new FormControl('', [Validators.required, Validators.email])

  })
  get fname() {
    return this.joinForm.get('fname');
  }
  get storen(){
    return this.joinForm.get('storen');
  }
  get phno() {
    return this.joinForm.get('phno');
  }
  get email() {
    return this.joinForm.get('email');
  }
  get npassword() {
    return this.joinForm.get('npassword');
  }
  joinUs(){
    const email = this.email?.value!;
    const password = this.npassword?.value!;
    const name = this.fname?.value!;
    this.Auth.isUserRegistered(email).then((isRegistered)=>{
      if(isRegistered){
        console.log("user is registered")
      } else {
        this.Auth.signUp(name,email, password).subscribe(()=>{
          console.log('signup Successful')
        });
      }
    })
  }
}
