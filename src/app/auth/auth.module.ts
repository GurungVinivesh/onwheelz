import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { EntrepreneurComponent } from './entrepreneur/entrepreneur.component';
import { FirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
  ResetPasswordComponent,
  EntrepreneurComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FirestoreModule,
    AppRoutingModule
  ]
})
export class AuthModule { }
