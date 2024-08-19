import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { SharedModule } from './shared/shared.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { NotfoundComponent } from './notfound/notfound.component';
import { IntroComponent } from './home/intro/intro.component';
import { BlogComponent } from './home/blog/blog.component';
import { ProfileComponent } from './home/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentGatewayModule } from './payment-gateway/payment-gateway.module';
import { SearchComponent } from './home/search/search.component';
import { CommonModule } from '@angular/common';
import { GuidedComponent } from './home/guided/guided.component';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    IntroComponent,
    BlogComponent,
    ProfileComponent,
    SearchComponent,
    GuidedComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AuthRoutingModule,
    CommonModule,
    SharedModule,
    PaymentGatewayModule,
    FirestoreModule,
    ReactiveFormsModule,
    AdminModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage())
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
