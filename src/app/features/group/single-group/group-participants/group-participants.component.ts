import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErrorComponent } from '@shared/error.component';
import { ErrorhandlerService } from '@shared/Interceptor/errorhandler.service';
import { CowLoaderComponent } from '@shared/loader/cow-loader.component';
import { GroupUsersService } from './group-participants.service';

@Component({
  standalone: true,
  selector: 'app-group-participants',
  imports: [CommonModule, CowLoaderComponent, ErrorComponent],
  templateUrl: './group-participants.html',
  styleUrls: ['./group-participants.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GroupParticipantsComponent {
  private route = inject(ActivatedRoute);
  private groupUsersService = inject(GroupUsersService);
  private groupId = this.route.snapshot.params['id'];
  private errorService = inject(ErrorhandlerService);

  errorClientServer$ = this.errorService.error$;
  users$ = this.groupUsersService.getParticipants(this.groupId);
}
