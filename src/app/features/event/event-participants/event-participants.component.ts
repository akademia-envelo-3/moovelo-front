import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { EventParticipation } from '../event.interfaces';
import { EventParticipantsListComponent } from './event-participants-list/event-participants-list.component';

@Component({
  selector: 'app-event-participants',
  imports: [MatButtonModule, CommonModule, EventParticipantsListComponent],
  standalone: true,
  templateUrl: './event-participants.component.html',
  styleUrls: ['./event-participants.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventParticipantsComponent {
  @Input() eventParticipants!: EventParticipation;

  showAcceptedList = false;
  showPendingList = false;
  showRejectedList = false;

  showList(status: string) {
    switch (status) {
      case 'accepted':
        this.showAcceptedList = !this.showAcceptedList;
        this.showPendingList = false;
        this.showRejectedList = false;
        break;
      case 'pending':
        this.showAcceptedList = false;
        this.showPendingList = !this.showPendingList;
        this.showRejectedList = false;
        break;
      case 'rejected':
        this.showAcceptedList = false;
        this.showPendingList = false;
        this.showRejectedList = !this.showRejectedList;
        break;
    }
  }
}
