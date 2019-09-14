import { Component, Output, EventEmitter } from '@angular/core';
import { NavItemInterface } from 'src/app/shared/models/nav-item.interface';

@Component({
  selector: 'app-nav',
  template: `
  <nav class="nav">
    <ul>
      <li *ngFor="let item of items;">
        <a href="#" (click)="itemClicked($event, item)">
          {{ item.title }}
        </a>
      </li>
    </ul>
  </nav>
  `,
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  @Output()
  navigation: EventEmitter<NavItemInterface> = new EventEmitter<NavItemInterface>();

  items: NavItemInterface[] = [
    {
      path: '/',
      title: 'Home',
    },
    {
      path: '/securities',
      title: 'Securities',
    },
    {
      path: '/forex',
      title: 'Forex',
    },
  ];

  itemClicked(event: any, item: NavItemInterface) {
    event.preventDefault();
    this.navigation.emit(item);
  }



}
