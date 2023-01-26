import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
<<<<<<< HEAD
    application shell

=======
    <app-navbar></app-navbar>
>>>>>>> 632c082787524eea2c6483c0ac14a34f1ffac87c
    <router-outlet></router-outlet>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
