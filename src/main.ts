import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

firebase.initializeApp(environment.firebase);



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
