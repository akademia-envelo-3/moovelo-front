import { ChangeDetectionStrategy, Component, inject, Input, OnInit } from '@angular/core';
import { EventParticipants, EventParticipationStats } from '../event.interfaces';
import { MatButtonModule } from '@angular/material/button';
import { EventParticipantsService } from './event-participants.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

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
  @Input() eventId!: number;

  userList = false;

  eventParticipants$: Observable<EventParticipants> | null = null;

  showAcceptedUserList(listStatus: string) {
    if (this.userList === false) {
      this.eventParticipants$ = this.eventParticipantService.getParticipants(listStatus, this.eventId);
      this.userList = !this.userList;
    } else {
      this.eventParticipants$ = null;
      this.userList = !this.userList;
    }
  }
}
