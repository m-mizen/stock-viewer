import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';
import { HeaderComponent } from './containers/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { SearchComponent } from './components/search/search.component';
import { RouterModule } from '@angular/router';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    MenuButtonComponent,
    HeaderComponent,
    NavComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class AppHeaderModule { }
