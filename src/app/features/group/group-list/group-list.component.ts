import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GroupListService } from './group-list.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss'],
  providers: [GroupListService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupListComponent {
  private groupListService = inject(GroupListService);

  groupList$ = this.groupListService.getAllGroups();
}
