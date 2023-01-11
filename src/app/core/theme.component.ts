import { Component } from '@angular/core';
import { EventCard } from '../features/events/events.interfaces';
import { EventCardComponent } from '../features/events/shared/event-card/event-card.component';

@Component({
  selector: 'app-theme',
  imports: [EventCardComponent],
  standalone: true,
  template: ` <h1>Storybook-like route</h1>
    <h2>Event Card Component</h2>
    <app-event-card [eventCard]="event"></app-event-card>`,
})
export default class ThemeComponent {
  event: EventCard = {
    id: 1,
    eventInfo: {
      name: 'Kozacki Event',
      category: {
        id: 1,
        name: 'Piwo',
      },
      startDate: '20.01.2023',
      hashtags: [
        {
          id: 1,
          value: 'piwo',
        },
      ],
      isConfirmationRequired: false,
      isPrivate: true,
      group: false,
      cycleLength: 0,
      city: 'Warszawa',
      acceptedStatusUsers: 10,
    },
  };
}
