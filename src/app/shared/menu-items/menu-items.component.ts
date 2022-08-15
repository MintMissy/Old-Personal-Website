import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NavLink} from "../navbar/navbar.component";

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: []
})
export class MenuItemsComponent {
  @Output() closeMenu = new EventEmitter();
  @Input() isClosed!: boolean;
  @Input() links!: NavLink[];

  close() {
    this.closeMenu.emit();
  }
}
