import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorhandlerService } from '@shared/Interceptor/errorhandler.service';
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
  private errorService = inject(ErrorhandlerService);
  private router = inject(Router);

  errorClientServer$ = this.errorService.error$;
  groupList$ = this.groupListService.getAllGroups();

  navToCreateGroup() {
    this.router.navigate(['create-group']);
  }
}
