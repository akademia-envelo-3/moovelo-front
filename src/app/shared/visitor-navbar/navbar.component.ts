import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

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
  /*
  currentPosition!: number;
  constructor(@Inject(DOCUMENT) private _document: Document) {
    this._document.addEventListener('scroll', this.onContentScrolled);
  }

  ngOnDestroy() {
    this._document.removeEventListener('scroll', this.onContentScrolled);
  }

  onContentScrolled = () => {
    let scroll = window.pageYOffset;
    if (scroll > this.currentPosition) {
      console.log('scrollDown');
    } else {
      console.log('scrollUp');
    }
    this.currentPosition = scroll;
  };
  */
}
