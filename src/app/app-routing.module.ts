import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './home/intro/intro.component';
import { EntrepreneurComponent } from './auth/entrepreneur/entrepreneur.component';
import { BlogComponent } from './home/blog/blog.component';
import { ProfileComponent } from './home/profile/profile.component';
import { PaymentFormComponent } from './payment-gateway/payment-form/payment-form.component';
import { SearchComponent } from './home/search/search.component';
import { GuidedComponent } from './home/guided/guided.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ServiceComponent } from './admin/service/service.component';
import { BikesComponent } from './admin/bikes/bikes.component';
import { UsersComponent } from './admin/users/users.component';
import { OrdersComponent } from './admin/orders/orders.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: 'intro', component:IntroComponent},
  {path: 'joinus', component: EntrepreneurComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'userdash', component:ProfileComponent},
  {path: 'addride', component:ServiceComponent},
  {path: 'guide', component:GuidedComponent},
  {path: 'payment', loadChildren: ()=> import('./payment-gateway/payment-gateway.module').then(m => m.PaymentGatewayModule)},
  {path: 'processingpay', component:PaymentFormComponent},
  {path: 'search', component:SearchComponent},
  {path: 'admindash', component:DashboardComponent},
  {path: 'bikes', component:BikesComponent},
  {path: 'userdetail', component: UsersComponent},
  {path: 'orderdetail', component: OrdersComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
  ]
})
export class AppRoutingModule { }
