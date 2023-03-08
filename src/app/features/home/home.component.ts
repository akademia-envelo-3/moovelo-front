import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-navbar></app-navbar>
    <div class="wrapper">
      <router-outlet></router-outlet>
    </div>
    <app-footer></app-footer>
  `,
  styles: [
    `
      .wrapper {
        /* 167,5px is the sum of the header and footer heights for desktop*/
        min-height: calc(100vh - 167.5px);
      }

      @media only screen and (max-width: 480px) {
        /* 215,5px is the sum of the header and footer heights for mobile*/
        .wrapper {
          min-height: calc(100vh - 215.5px);
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
