import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NavbarScrollService } from './navbar-scroll.service';
import users from './users.config';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule],
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
      <ul class="nav-menu__list" *ngFor="let value of navbarList[0]; let i = index">
        <li>
          <a class="nav-menu__link" routerLink="/{{ navbarList[1][i] }}">{{ value }} </a>
        </li>
      </ul>
      <div [ngClass]="menu ? 'nav-menu--blur' : ''" (click)="showMenu()"></div>
    </div>
  `,
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
