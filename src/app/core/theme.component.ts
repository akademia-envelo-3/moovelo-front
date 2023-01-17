import { Component } from '@angular/core';
import { NavbarComponent } from '@shared/user-navbar/navbar.component';

@Component({
  selector: 'app-theme',
  standalone: true,
  template: `<app-navbar> </app-navbar>`,
  imports: [NavbarComponent],
  providers: [],
})
export default class ThemeComponent {}
