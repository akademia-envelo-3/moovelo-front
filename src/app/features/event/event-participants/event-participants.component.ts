import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ActiveParticipantList, Participant, ParticipantsStatus } from '../event.interfaces';
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
  @Input() eventParticipants!: Record<ParticipantsStatus, Participant[]>;
  @Input() eventVisitors!: Participant[];

  participantsStatuses: ParticipantsStatus[] = [];

  activeList: ActiveParticipantList | null = null;

  showList(status: ParticipantsStatus) {
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
    this.participantsStatuses = Object.keys(this.eventParticipants) as ParticipantsStatus[];
  }
}
