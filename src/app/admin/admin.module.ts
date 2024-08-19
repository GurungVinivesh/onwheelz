import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Route } from '@angular/router';
import { ServiceComponent } from './service/service.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BikesComponent } from './bikes/bikes.component';
import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './orders/orders.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ServiceComponent,
    BikesComponent,
    UsersComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
