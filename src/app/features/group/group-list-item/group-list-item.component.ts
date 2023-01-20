import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GroupListItem } from '../group.interface';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-group-list-item[groupItem]',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './group-list-item.component.html',
  styleUrls: ['./group-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupItemComponent {
  @Input() groupItem!: GroupListItem;
  store = inject(Store);

  showRole() {
    this.store.select(state => {
      return state.user;
    });
  }
}
