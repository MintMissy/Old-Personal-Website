import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {MenuItemsComponent} from './menu-items/menu-items.component';
import {AppRoutingModule} from "../app-routing.module";
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    NavbarComponent,
    MenuItemsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
    exports: [
        NavbarComponent,
        FooterComponent
    ]
})
export class SharedModule {
}
