import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Participants } from '../../event.interfaces';

@Component({
  selector: 'app-event-participants-list[participantsList][participantType]',
  standalone: true,
  imports: [NgFor],
  templateUrl: './event-participants-list.component.html',
  styleUrls: ['./event-participants-list.component.scss'],
})
export class EventParticipantsListComponent {
  @Input() participantsList!: Participants[];
  @Input() participantType!: string;
}
