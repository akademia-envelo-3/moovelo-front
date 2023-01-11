import { Component } from '@angular/core';
import { GroupItemComponent } from '../features/group';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [GroupItemComponent],
  template: `
    <h1>Storybook-like route</h1>
    <h2>Pojedyncza grupa w liście</h2>
    <app-group-list-item
      [groupItem]="{ id: 0, name: 'Nowa grupa', description: 'Bardzo fajna nowa grupa' }"></app-group-list-item>
  `,
})
export default class ThemeComponent {}
