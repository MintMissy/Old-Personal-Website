import {Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent {
  isClosed = true;

  toggleMenu() {
    this.isClosed = !this.isClosed;
  }
}
