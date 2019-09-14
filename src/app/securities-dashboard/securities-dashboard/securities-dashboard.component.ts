import { Component } from '@angular/core';

@Component({
  selector: 'app-securities-dashboard',
  template: `
  <div class="app-securities-dashboard">
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['./securities-dashboard.component.scss']
})
export class SecuritiesDashboardComponent{

  constructor() { }

}
