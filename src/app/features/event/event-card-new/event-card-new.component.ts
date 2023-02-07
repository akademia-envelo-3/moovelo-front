import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EventCard } from '../event.interfaces';
import { MatIconModule } from '@angular/material/icon';

export interface GroupItem {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-event-card-new[eventCard]',
  standalone: true,
  templateUrl: './event-card-new.component.html',
  imports: [CommonModule, MatIconModule],
  styleUrls: ['./event-card-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventCardNewComponent {
  @Input() eventCard!: EventCard;
}
