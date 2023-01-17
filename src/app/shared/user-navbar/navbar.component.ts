import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NavbarScrollService } from './navbar-scroll.service';
import users from './users.config';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <nav class="nav-bar">
      <div class="nav-bar__logo">
        <img src="./assets/cow-grey.svg" alt="logo aplikacji moovelo" class="nav-bar__image" />
        <p class="nav-bar__padding">Moovelo</p>
      </div>
      <div class="nav-icons">
        <mat-icon
          aria-hidden="false"
          aria-label="notyfikacje"
          fontIcon="notifications"
          class="nav-icons__notifications"></mat-icon>
        <mat-icon
          aria-hidden="false"
          aria-label="menu"
          class="nav-icons__menu"
          [fontIcon]="menu ? 'clearSharp' : 'menu'"
          (click)="showMenu()"></mat-icon>
      </div>
    </nav>
    <div [ngClass]="menu ? 'nav-menu' : 'nav-menu--hide'">
      <ul class="nav-menu__list" *ngFor="let listValue of navbarList">
        <li>{{ listValue }}</li>
      </ul>
      <div [ngClass]="menu ? 'nav-menu--bluring' : ''" (click)="showMenu()"></div>
    </div>
  `,
  styleUrls: ['./style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  private userState = 'user';
  menu = false;
  navbarList: Array<string> = [];
  private navbarScroll = inject(NavbarScrollService);

  showMenu() {
    this.menu = !this.menu;
  }

  decideRole() {
    if (this.userState === 'user') {
      this.navbarList = users['user'];
    } else {
      this.navbarList = users['admin'];
    }
  }

  ngOnInit() {
    this.navbarScroll.processOutsideOfAngularZone();
    this.decideRole();
  }
}
