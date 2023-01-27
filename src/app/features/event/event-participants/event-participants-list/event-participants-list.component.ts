import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { EventParticipant } from '../../event.interfaces';

@Component({
  selector: 'app-event-participants-list[participantsList]',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './event-participants-list.component.html',
  styleUrls: ['./event-participants-list.component.scss'],
})
export class EventParticipantsListComponent {
  @Input() participantsList!: EventParticipant[];
  @Input() visitorList?: EventParticipant[];
}
