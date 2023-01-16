import { ChangeDetectionStrategy, Component, inject, NgZone } from '@angular/core';

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
          aria-label="menu"
          fontIcon="notifications"
          class="nav__icons__notifications"></mat-icon>
        <mat-icon aria-hidden="false" aria-label="menu" class="nav__icons__menu" fontIcon="menu"></mat-icon>
      </div>
    </nav>
  `,
  styleUrls: ['./style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  _ngZone = inject(NgZone);

  ngOnInit() {
    this.processOutsideOfAngularZone();
  }

  processOutsideOfAngularZone() {
    let currentPosition: number;

    this._ngZone.runOutsideAngular(() => {
      const navbar = document.querySelector('.nav-bar');
      document.addEventListener('scroll', () => onContentScrolled());

      document.removeEventListener('scroll', () => onContentScrolled());

      function onContentScrolled() {
        const scroll = window.pageYOffset;

        if (scroll > currentPosition) {
          navbar?.classList.add('nav-bar--visi');
        } else {
          navbar?.classList.remove('nav-bar--visi');
        }
        currentPosition = scroll;
      }
    });
  }
}
