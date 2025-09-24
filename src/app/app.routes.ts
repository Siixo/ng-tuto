import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursComponent } from './cours/cours.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { PropertyBindingComponent } from './exercices/property-binding/property-binding.component';
import { TextInterpolationComponent } from './exercices/text-interpolation/text-interpolation.component';
import { FriendComponent } from './exercices/friend/friend.component';
import { TpComponent } from './exercices/tp/tp.component';
import { MeteoApiComponent } from './exercices/meteo-api/meteo-api.component';
import { ParentComponent } from './exercices/parent/parent.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cours', component: CoursComponent },
  {
    path: 'exercices',
    component: ExercicesComponent,
    children: [
      { path: 'property-binding', component: PropertyBindingComponent },
      { path: 'text-interpolation', component: TextInterpolationComponent },
      { path: 'friend', component: FriendComponent },
      { path: 'tp', component: TpComponent },
      { path: 'meteo-api', component: MeteoApiComponent },
      { path: 'parent', component: ParentComponent },
    ],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];
