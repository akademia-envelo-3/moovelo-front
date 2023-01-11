import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VisitorFormComponent } from '../features/visitor-form/visitor-form.component';

@Component({
  selector: 'app-theme',
  imports: [CommonModule, VisitorFormComponent],
  standalone: true,
  template: ` <h1>Storybook-like route</h1>
    <app-visitor-form></app-visitor-form>`,
})
export default class ThemeComponent {}
