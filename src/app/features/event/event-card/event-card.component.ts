import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EventCard } from '../event.interfaces';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

export interface GroupItem {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-event-card[eventCard]',
  standalone: true,
  templateUrl: './event-card.component.html',
  imports: [CommonModule, MatIconModule, RouterModule],
  styleUrls: ['./event-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventCardComponent {
  @Input() eventCard!: EventCard;
}
