import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NavbarScrollService } from './navbar-scroll.service';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="nav-bar">
      <div class="nav__logo">
        <img src="./assets/cow-grey.svg" alt="logo aplikacji moovelo" class="nav__logo__image" />
        <p class="nav__logo__padding">Moovelo</p>
      </div>
      <div class="nav__icons">
        <mat-icon
          aria-hidden="false"
          aria-label="notyfikacje"
          fontIcon="notifications"
          class="nav__icons__notifications"></mat-icon>
        <mat-icon
          aria-hidden="false"
          aria-label="menu"
          class="nav__icons__menu"
          [fontIcon]="menu ? 'clearSharp' : 'menu'"
          (click)="showMenu()"></mat-icon>
      </div>
    </nav>
    <div [ngClass]="menu ? 'nav__menu' : 'nav__menu--hide'">
      <ul class="nav__menu__list">
        <li>Wydarzenia</li>
      </ul>
      <ul class="nav__menu__list">
        <li>Moje Wydarzenia</li>
      </ul>
      <ul class="nav__menu__list">
        <li>Wydarzenia</li>
      </ul>
      <ul class="nav__menu__list">
        <li>Wydarzenia</li>
      </ul>
      <ul class="nav__menu__list">
        <li>Wydarzenia</li>
      </ul>
    </div>
  `,
  styleUrls: ['./style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  menu = false;
  private navbarScroll = inject(NavbarScrollService);

  showMenu() {
    this.menu = !this.menu;
  }

  ngOnInit() {
    this.navbarScroll.processOutsideOfAngularZone();
  }
}
