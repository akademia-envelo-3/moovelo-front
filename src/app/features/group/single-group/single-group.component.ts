import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-single-group',
  templateUrl: './single-group.component.html',
  styleUrls: ['./single-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleGroupComponent {}
