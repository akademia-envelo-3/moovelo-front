import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface GroupItem {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-group-item',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './group-item.component.html',
  styleUrls: ['./group-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupItemComponent {
  @Input() groupItem!: GroupItem;
}
