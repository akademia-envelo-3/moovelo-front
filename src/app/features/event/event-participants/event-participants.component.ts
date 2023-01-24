import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { EventParticipationStats } from '../event.interfaces';
import { MatButtonModule } from '@angular/material/button';
import { EventParticipantsService } from './event-participants.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-participants',
  imports: [MatButtonModule, CommonModule],
  standalone: true,
  templateUrl: './event-participants.component.html',
  styleUrls: ['./event-participants.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventParticipantsComponent {
  private eventParticipantService = inject(EventParticipantsService);

  @Input() eventParticipants!: EventParticipationStats;

  userList = false;

  eventParticipants$ = this.eventParticipantService.getAccteptedParticipants();

  showUserList() {
    this.userList = !this.userList;
    console.log(this.userList);
  }
}
