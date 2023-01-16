import { inject, Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavbarScrollService {
  private ngZone = inject(NgZone);

  processOutsideOfAngularZone() {
    let currentPosition: number;

    this.ngZone.runOutsideAngular(() => {
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
