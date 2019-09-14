import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  template: `
  <button>
    <ng-content></ng-content>
  </button>
  `,
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
