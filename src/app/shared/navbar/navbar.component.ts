import {Component, HostListener} from '@angular/core';

export interface NavLink {
  route: string;
  text: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent {
  isClosed = true;
  scrollOffset = 0;
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

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollOffset = window.scrollY;
  }

  toggleMenu() {
    this.isClosed = !this.isClosed;
  }
}
