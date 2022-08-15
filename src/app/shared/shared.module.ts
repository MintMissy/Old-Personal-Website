import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {MenuItemsComponent} from './menu-items/menu-items.component';
import {AppRoutingModule} from "../app-routing.module";


@NgModule({
  declarations: [
    NavbarComponent,
    MenuItemsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule {
}
