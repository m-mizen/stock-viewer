import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <div id="app" class="app-component">
      <app-header></app-header>
      <div class="container">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent {}
