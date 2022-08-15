import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: []
})
export class MenuItemsComponent {
  @Output() closeMenu = new EventEmitter();
  @Input() isClosed!: boolean;

  close(){
    this.closeMenu.emit();
  }

}
