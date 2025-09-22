import { Routes } from '@angular/router';
import { CoursComponent } from './cours/cours.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cours', component: CoursComponent },
  { path: 'exercices', component: ExercicesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];
