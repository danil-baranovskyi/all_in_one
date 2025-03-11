import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {RouterOutlet} from '@angular/router';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-auth',
  imports: [
    RouterOutlet
  ],
  templateUrl: 'auth.component.html',
  styleUrl: 'auth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  isLogin = signal(true);
  title = 'test';

  httpClient = inject(HttpClient);

  constructor() {
    try {
      this.httpClient.get(`${environment.apiUrl}/hello/date`, { responseType: 'text'})
        .pipe(
          catchError((e) => {
            console.log(e);
            return of(e);
          })
        )
        .subscribe(res => {
        console.log(res)
        // this.title = res;
      });
    } catch(err) {
      console.log(err)
    }
  }
}
