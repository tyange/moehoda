import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'main', component: MainComponent },
];
