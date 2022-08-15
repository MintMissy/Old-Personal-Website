import {Component} from '@angular/core';

export interface NavLink {
  route:string;
  text:string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent {
  isClosed = true;
  links: NavLink[] = [
    {
      route: '/',
      text: 'Home'
    },
    {
      route: '/projects',
      text: 'Projects'
    },
    {
      route: '/contact',
      text: 'Contact'
    },
    {
      route: 'resume',
      text: 'Resume'
    }
  ]

  toggleMenu() {
    this.isClosed = !this.isClosed;
  }
}
