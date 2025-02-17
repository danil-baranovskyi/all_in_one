import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {AuthRoutes} from '../auth.routes';

@Component({
  selector: 'app-login',
  imports: [
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  protected readonly AuthRoutes = AuthRoutes;
}
