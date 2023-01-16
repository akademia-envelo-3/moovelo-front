import { ChangeDetectionStrategy, Component, inject, NgZone } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="nav-bar">
      <div class="nav__logo">
        <img src="./assets/cow-grey.svg" alt="logo aplikacji moovelo" class="nav__logo__image" />
        <p class="nav__logo__padding">Moovelo</p>
      </div>
      <button class="nav__btn">Zaloguj</button>
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
