import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartest';
  _ShowHead = true;
  _ShowFoot = true;
  constructor(private _Router: Router) {
    _Router.events.forEach((parameter: any) => {
      if (parameter instanceof NavigationStart) {
        if (
          parameter.url.startsWith('/admin') ||
          parameter.url.startsWith("/admin/") ||
          parameter.url.startsWith('/user') ||
          parameter.url.startsWith('/user/')
        ) {
          this._ShowHead = false;
          this._ShowFoot = false;
        } else {
          this._ShowHead = true;
          this._ShowFoot = true;
        }
      }
    })
  }
}
