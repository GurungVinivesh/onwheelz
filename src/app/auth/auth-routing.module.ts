import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NotfoundComponent } from '../notfound/notfound.component';
import { IntroComponent } from '../home/intro/intro.component';
import { EntrepreneurComponent } from './entrepreneur/entrepreneur.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path: 'signup', component:SignupComponent},
  {path: 'reset-password', component:ResetPasswordComponent},
  {path:'**', component: NotfoundComponent},
  {path:'intro', component:IntroComponent},
  {path: 'joinus', component: EntrepreneurComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
