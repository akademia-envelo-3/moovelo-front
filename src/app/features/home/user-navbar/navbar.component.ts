import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { NavbarScrollService } from './services/navbar-scroll.service';
import users from './mock/users.config';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/authentication/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  private router = inject(Router);

  private userState = 'user';

  menu = false;
  navbarList: string[][] = [[]];

  private navbarScroll = inject(NavbarScrollService);
  private authService = inject(AuthService);

  ngOnInit() {
    this.navbarScroll.scrollDetection();
    this.decideRole();
  }

  showMenu() {
    this.menu = !this.menu;
  }

  navigateAndHideMenu(route: string) {
    this.menu = !this.menu;
    this.router.navigate([`/${route}`]);
  }

  decideRole() {
    if (this.userState === 'user') {
      this.navbarList = [users['user'].titles, users['user'].routes];
    } else {
      this.navbarList = [users['admin'].titles, users['admin'].routes];
    }
  }

  handleLogout() {
    this.menu = !this.menu;
    this.authService.logout();
  }
}
