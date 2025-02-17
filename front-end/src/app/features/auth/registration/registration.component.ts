import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {AuthRoutes} from '../auth.routes';

@Component({
  selector: 'app-registration',
  imports: [
    RouterLink
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

  protected readonly AuthRoutes = AuthRoutes;
}
