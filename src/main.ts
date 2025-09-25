import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app'; // notice path to app.ts
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'fir-angular-4feb4',
        appId: '1:1097452641415:web:966fa980a9012707ef2c22',
        databaseURL: 'https://fir-angular-4feb4-default-rtdb.europe-west1.firebasedatabase.app',
        storageBucket: 'fir-angular-4feb4.firebasestorage.app',
        apiKey: 'AIzaSyDsL8GC7eNyGW_Vlp36aMN3BhHKNbUUwZo',
        authDomain: 'fir-angular-4feb4.firebaseapp.com',
        messagingSenderId: '1097452641415',
      })
    ),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
  ],
});
