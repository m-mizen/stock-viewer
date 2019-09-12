import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';
import { HeaderComponent } from './containers/header/header.component';
import { NavComponent } from './containers/nav/nav.component';
import { SearchComponent } from './containers/search/search.component';



@NgModule({
  declarations: [
    NavItemComponent,
    MenuButtonComponent,
    HeaderComponent,
    NavComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class AppHeaderModule { }
