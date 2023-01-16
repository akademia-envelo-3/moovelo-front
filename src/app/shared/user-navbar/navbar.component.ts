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
        <mat-icon aria-hidden="false" aria-label="menu" class="nav__icons__menu" fontIcon="menu"></mat-icon>
      </div>
      <div class="nav__menu"></div>
    </nav>
  `,
  styleUrls: ['./style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  private navbarScroll = inject(NavbarScrollService);

  ngOnInit() {
    this.navbarScroll.processOutsideOfAngularZone();
  }
}
