import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NavbarScrollService } from './services/navbar-scroll.service';
import users from './mock/users.config';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./style.scss'],
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
