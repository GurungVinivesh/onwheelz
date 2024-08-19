import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../auth.service';
import { Firestore } from '@angular/fire/firestore';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';



interface User {
  uname: string;
  uemail: string;
  number: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  UsersIn: string[] = [];
  userDataObj: object[]=[];

  constructor(private Auth: AuthService, private firestore: Firestore){}

  signupForm = new FormGroup({
    fname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    phno: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    npassword: new FormControl('', [Validators.required, 
      Validators.pattern(/^(?=.*[A-Z])(?=.*[@#$%^&+=])(?=.*\d)[A-Za-z\d@#$%^&+=]{8,}$/) ]),
      cpassword: new FormControl('', [Validators.required])
    })
  successMessage: string | null = null;

  get fname() {
    return this.signupForm.get('fname');
  }
  get phno() {
    return this.signupForm.get('phno');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get npassword() {
    return this.signupForm.get('npassword');
  }
  get cpassword() {
    return this.signupForm.get('cpassword');
  }
  ngOnInit(){
  }
  signUp() {
    const email = this.email?.value!;
    const password = this.npassword?.value!;
    const name = this.fname?.value!;
    const phoneNumber = this.phno?.value!;
  
    this.Auth.isUserRegistered(email).then((isRegistered) => {
      if (isRegistered) {
        console.log("User is registered");
      } else {
        this.Auth.signUp(name, email, password).subscribe(() => {
          console.log("Signup successful");
          this.successMessage = 'Signup Successful';
        });
  
        const db = firebase.firestore();
        const userData = {
          uname: name,
          uemail: email,
          number: phoneNumber
        };
  
        // Generate a unique document ID for each user data entry
        const userRef = db.collection('users').doc();
  
        userRef.set(userData)
          .then(() => {
            console.log('User data saved in Firestore');
          })
          .catch((error) => {
            console.error('Error saving user data:', error);
          });
      }
    });
  }
  

  
  
  closePopup() {
    this.successMessage = null;
  }

 
}
