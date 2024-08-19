import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  UserCredential,
  sendPasswordResetEmail,
  authState,
  
} from '@angular/fire/auth';
import { updateProfile } from 'firebase/auth';
import {  from, switchMap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
currentuser = authState(this.auth);


  constructor(private auth: Auth) { }
  isUserRegistered(email: string): Promise<boolean> {
    return fetchSignInMethodsForEmail(this.auth, email)
      .then(signInMethods => {
        // If signInMethods is empty, it means the user is not registered
        return signInMethods.length > 0;
      })
      .catch(error => {
        console.error(error);
        // Handle the error appropriately
        throw error;
      });
  }


  // Sign up with email and password
  signUp(name:string, email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(switchMap(({user})=> updateProfile(user, {displayName:name})));
  }

  // Login with email and password
  login(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  //reset password
  resetPassword(email: string){
    return sendPasswordResetEmail(this.auth, email);
  }

  // Logout the currently authenticated user
  logout(){
    return from(this.auth.signOut());
  }
  joinUs(email:string, phno:number){
    return 
  }

  }
