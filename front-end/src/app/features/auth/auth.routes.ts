import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

export enum AuthRoutes {
  Login = 'login',
  Registration = 'registration',
}

export const authRoutes: Routes = [
  { path: AuthRoutes.Login, component: LoginComponent },
  { path: AuthRoutes.Registration, component: RegistrationComponent },
];
