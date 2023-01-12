import { ChangeDetectionStrategy, Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="nav-bar">
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
      maiores suscipit nihil est vero ipsam error perspiciati Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Accusantium fuga distinctio sequi dolore maiores suscipit nihil est vero ipsam error perspiciatis animi, et a quo
      voluptatem nesciunt exercitationem itaque harum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Accusantium fuga distinctio sequi dolore maiores suscipit nihil est vero ipsam error perspiciati Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Accusantium fuga distinctio sequi dolore maiores suscipit nihil est vero
      ipsam error perspiciati Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fuga distinctio sequi
      dolore maiores suscipit nihil est vero ipsam error perspiciati Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Accusantium fuga distinctio sequi dolore maiores suscipit nihil est vero ipsam error perspiciatiLorem ipsum
      dolor sit amet consectetur adipisicing elit. Accusantium fuga distinctio sequi dolore maiores suscipit nihil est
      vero ipsam error perspiciatis animi, et a quo voluptatem nesciunt exercitationem itaque harum. Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Accusantium fuga distinctio sequi dolore maiores suscipit nihil est vero
      ipsam error perspiciati Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fuga distinctio sequi
      dolore maiores suscipit nihil est vero ipsam error perspiciati Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Accusantium fuga distinctio sequi dolore maiores suscipit nihil est vero ipsam error perspiciati Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Accusantium fuga distinctio sequi dolore maiores suscipit nihil est
      vero ipsam error perspiciati
    </main>
  `,
  styleUrls: ['./style.scss'],
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
