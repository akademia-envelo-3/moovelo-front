import { Component } from '@angular/core';
import { FooterComponent } from '@shared/footer/footer.component';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [FooterComponent],
  template: ` <h1>Storybook-like route</h1>
    <app-footer></app-footer>`,
})
export default class ThemeComponent {}
