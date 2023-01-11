import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-single-event',
  templateUrl: './singleEvent.component.html',
  styleUrls: ['./singleEvent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleEventComponent {}
