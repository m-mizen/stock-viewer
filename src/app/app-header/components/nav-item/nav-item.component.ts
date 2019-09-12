import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  template: `
    <p>
      nav-item works!
    </p>
  `,
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
