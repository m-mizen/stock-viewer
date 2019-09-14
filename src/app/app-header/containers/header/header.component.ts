import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { NavItemInterface } from 'src/app/shared/models/nav-item.interface';

@Component({
  selector: 'app-header',
  template: `
    <div class="app-header" (click)="$event.stopPropagation()">
      <div class="container">

        <app-menu-button (click)="toggleMenu()">
          <span>Menu</span>
        </app-menu-button>

        <a routerLink="/">
        <svg width="32" height="32" viewbox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <rect y="0" x="0" height="100%" width="100%" background=""/>
        </svg>
        </a>

        <app-menu-button (click)="toggleSearch()">
          <span>Search</span>
        </app-menu-button>
      </div>

      <app-nav
        (navigation)="handleNavigation($event)"
        [ngClass]="{'visible': menuOpen, 'hidden': !menuOpen}"
      ></app-nav>

      <app-search [ngClass]="{'visible': searchOpen, 'hidden': !searchOpen}"></app-search>

    </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  // Store the open states
  menuOpen = false;
  searchOpen = false;

  body: HTMLBodyElement;
  routeSubscription: Subscription;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.routeSubscription = this.router.events
      .subscribe(() => this.close());

    // Adds a
    this.body = document.querySelector('body');
    this.body.addEventListener(
      'click',
      (event) => {
        console.log(event);
        this.close();
      }
    );
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
    this.body.removeEventListener(
      'click',
      this.close
    );
  }

  handleNavigation(location: NavItemInterface) {
    this.close();
    this.router.navigate([location.path]);
  }

  toggleMenu() {
    this.searchOpen = false;
    this.menuOpen = !this.menuOpen;
  }

  toggleSearch() {
    this.menuOpen = false;
    this.searchOpen = !this.searchOpen;
  }

  close() {
    this.searchOpen = this.menuOpen = false;
  }

}
