import { Component } from '@angular/core';
import { EventCard, EventCardComponent } from '../features/event';

@Component({
  selector: 'app-theme',
  imports: [EventCardComponent],
  standalone: true,
  template: `
    <h1>Storybook-like route</h1>
    <h2>Event Card Component</h2>
    <div style="padding: 8px 8px;">
      <app-event-card [eventCard]="event"></app-event-card>
    </div>
  `,
})
export default class ThemeComponent {
  event: EventCard = {
    id: 1,
    eventInfo: {
      name: 'Giga Koks Turbo Event',
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
        {
          id: 1,
          value: 'GigaTurboEssaKoks',
        },
      ],
      isConfirmationRequired: true,
      isPrivate: true,
      group: true,
      cycleLength: 0,
      city: 'Warszawa',
      acceptedStatusUsers: 10,
    },
  };
}
