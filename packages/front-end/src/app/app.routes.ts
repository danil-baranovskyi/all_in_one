import { Routes } from '@angular/router';
import {authRoutes} from './features/auth/auth.routes';
import {HomeComponent} from './features/home/home.component';
import {authGuard} from './core/guards/auth.guard';

export const routes: Routes = [
  ...authRoutes,
  {
    path: '',
    canActivate: [authGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: HomeComponent }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/home',
  }
];
