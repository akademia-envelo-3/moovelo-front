import { Component } from '@angular/core';
import { Error404Component } from '@shared/error404/error404.component';

@Component({
  selector: 'app-theme',
  imports: [Error404Component],
  standalone: true,
  template: `
    <h1>Storybook-like route</h1>
    <app-error404></app-error404>
  `,
})
export default class ThemeComponent {}
