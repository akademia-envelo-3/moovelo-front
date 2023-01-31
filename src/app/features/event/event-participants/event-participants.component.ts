import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ActiveParticipantList, EventParticipant, EventParticipantsStatus } from '../event.interfaces';
import { EventParticipantsListComponent } from './event-participants-list/event-participants-list.component';
import { ParticipantStatusPipe } from './event-participants.pipe';

@Component({
  selector: 'app-event-participants[eventParticipants][eventVisitors]',
  imports: [MatButtonModule, CommonModule, EventParticipantsListComponent, ParticipantStatusPipe],
  standalone: true,
  templateUrl: './event-participants.component.html',
  styleUrls: ['./event-participants.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventParticipantsComponent implements OnInit {
  @Input() eventParticipants!: Record<EventParticipantsStatus, EventParticipant[]>;
  @Input() eventVisitors!: EventParticipant[];

  participantsStatuses: EventParticipantsStatus[] = [];

  activeList: ActiveParticipantList | null = null;

  showList(status: EventParticipantsStatus) {
    if (this.activeList?.type === status) {
      this.activeList = null;
      return;
    }
    this.activeList = {
      type: status,
      list: this.eventParticipants[status],
    };
  }

  ngOnInit() {
    this.participantsStatuses = Object.keys(this.eventParticipants) as EventParticipantsStatus[];
  }
}
