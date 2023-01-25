import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NavbarScrollService } from './services/navbar-scroll.service';
import users from './mock/users.config';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  private userState = 'user';
  menu = false;
  navbarList: string[][] = [[]];

  private navbarScroll = inject(NavbarScrollService);

  showMenu() {
    this.menu = !this.menu;
  }

  decideRole() {
    if (this.userState === 'user') {
      this.navbarList = [users['user'].titles, users['user'].routes];
    } else {
      this.navbarList = [users['admin'].titles, users['admin'].routes];
    }
  }

  ngOnInit() {
    this.navbarScroll.scrollDetection();
    this.decideRole();
  }
}
