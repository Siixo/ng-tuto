import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursComponent } from './cours/cours.component';
import { ExercicesComponent } from './exercices/exercices.component';

import { FriendComponent } from './exercices/friend/friend.component';
// import { ParentComponent } from './exercices/parent/parent.component';
import { TaskListFirebaseComponent } from './exercices/task-list-firebase/task-list-firebase.component';
import { RegisterComponent } from './exercices/auth/register/register.component';
import { LoginComponent } from './exercices/auth/login/login.component';
import { Exercice1Component } from './exercices/exercice1/exercice1.component';
import { Exercice2Component } from './exercices/exercice2/exercice2.component';
import { Exercice3Component } from './exercices/exercice3/exercice3.component';
import { Exercice4Component } from './exercices/exercice4/exercice4.component';
import { Exercice5Component } from './exercices/exercice5/exercice5.component';
import { Exercice6Component } from './exercices/exercice6/exercice6.component';
import { Exercice7Component } from './exercices/exercice7/exercice7.component';
import { Exercice8Component } from './exercices/exercice8/exercice8.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cours', component: CoursComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'exercice1', component: Exercice1Component },
  { path: 'exercice2', component: Exercice2Component },
  { path: 'exercice3', component: Exercice3Component },
  { path: 'exercice4', component: Exercice4Component },
  { path: 'exercice5', component: Exercice5Component },
  { path: 'exercice6', component: Exercice6Component },
  { path: 'exercice7', component: Exercice7Component },
  { path: 'exercice8', component: Exercice8Component },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];
