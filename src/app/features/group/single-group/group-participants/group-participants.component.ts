import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupUsersService } from './group-participants.service';

@Component({
  standalone: true,
  selector: 'app-group-participants',
  imports: [CommonModule],
  templateUrl: './group-participants.html',
  styleUrls: ['./group-participants.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GroupParticipantsComponent {
  private route = inject(ActivatedRoute);
  private groupUsersService = inject(GroupUsersService);
  private groupId = this.route.snapshot.params['id'];
  users$ = this.groupUsersService.getParticipants(this.groupId);
}
