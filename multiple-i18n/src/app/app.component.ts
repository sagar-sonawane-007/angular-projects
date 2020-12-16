import { Component } from '@angular/core';
import { NavigationEnd, Route, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'multiple-i18n';
  private static myUrl = "/";
  isMe = false;

  constructor(private router: Router) {
    router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        console.log('prev:', event.url);
        this.isMe = AppComponent.myUrl === event.url;
        console.log('this.isMe: ', this.isMe);
      });
    // console.log('URL: ', this.router.url);
    console.log('configured routes: ', this.router.config);
  }
}
