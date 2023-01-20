import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-search-bar></app-search-bar>
    <router-outlet></router-outlet>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
