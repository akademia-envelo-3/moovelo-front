import { ChangeDetectionStrategy, Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav>
      <div class="nav__logo">
        <img src="./assets/logo.png" alt="logo aplikacji moovelo" />
        <p>Moovelo</p>
      </div>

      <button class="nav__btn">Zaloguj</button>
    </nav>

    <main>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fuga distinctio sequi dolore maiores suscipit
      nihil est vero ipsam error perspiciatis animi, et a quo voluptatem nesciunt exercitationem itaque harum. Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Accusantium fuga distinctio sequi dolore maiores suscipit nihil
      est vero ipsam error perspiciati Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fuga
      distinctio sequi dolore maiores suscipit nihil est vero ipsam error perspiciati Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Accusantium fuga distinctio sequi dolore maiores suscipit nihil est vero ipsam error
      perspiciati Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fuga distinctio sequi dolore
      maiores suscipit nihil est vero ipsam error perspiciati
    </main>
  `,
  styleUrls: ['./style.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.processOutsideOfAngularZone();
  }

  processOutsideOfAngularZone() {
    let currentPosition: number;

    this._ngZone.runOutsideAngular(() => {
      document.addEventListener('scroll', () => onContentScrolled());

      document.removeEventListener('scroll', () => onContentScrolled());

      function onContentScrolled() {
        const scroll = window.pageYOffset;

        if (scroll > currentPosition) {
          console.log('scrollDown');
        } else {
          console.log('scrollUp');
        }
        currentPosition = scroll;
      }
    });
  }
}
