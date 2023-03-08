import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ErrorhandlerService } from '@shared/Interceptor/errorhandler.service';
import { AppState } from 'src/app/app.module';
import { GroupListService } from './group-list.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss'],
  providers: [GroupListService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupListComponent {
  private store = inject<Store<AppState>>(Store);
  private groupListService = inject(GroupListService);
  private errorService = inject(ErrorhandlerService);
  private router = inject(Router);

  errorClientServer$ = this.errorService.error$;
  groupList$ = this.groupListService.getAllGroups();
  userType$ = this.store.select(state => state.user.type);

  navToCreateGroup() {
    this.router.navigate(['create-group']);
  }
}
