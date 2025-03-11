import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  isLogin = signal(true);
  title = 'test';

  httpClient = inject(HttpClient);

  constructor() {
    // this.httpClient.get(`${environment.apiUrl}/hello/date`, { responseType: 'text'}).subscribe(res => {
    //   console.log(res)
    //   // this.title = res;
    // });
  }
}
