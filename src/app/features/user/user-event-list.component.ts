import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-user-event-list',
  standalone: true,
  template: ` <p>user-event-list works!</p> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEventListComponent {}
