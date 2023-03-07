import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { NavbarScrollService } from './services/navbar-scroll.service';
import users from './mock/users.config';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/authentication/auth.service';
import { EventListActions } from '../../event/event-list/store/event-list.actions';
import { selectUserType } from '../../auth/store/user.selectors';
import { useStore } from '@shared/inject-hooks/user-store';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  private store = useStore();
  private router = inject(Router);
  private navbarScroll = inject(NavbarScrollService);
  private authService = inject(AuthService);
  private userState = 'user';

  constructor() {
    this.store
      .select(selectUserType)
      .pipe(untilDestroyed(this))
      .subscribe(result => (this.userState = result));
  }

  menu = false;
  navbarList: string[][] = [[]];

  ngOnInit() {
    this.navbarScroll.scrollDetection();
    this.decideRole();
  }

  showMenu() {
    this.store.dispatch(EventListActions.hideFilters());
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
