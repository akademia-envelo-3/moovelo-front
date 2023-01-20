import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-event-list',
  standalone: true,
  templateUrl: `./event-list.component.html`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventListComponent {}
