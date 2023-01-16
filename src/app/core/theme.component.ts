import { Component } from '@angular/core';
import { EventCard, EventCardComponent } from '../features/event';
import { GroupItemComponent } from '../features/group';
import { CowLoaderComponent } from '@shared/loader/cow-loader.component';

@Component({
  selector: 'app-theme',
  imports: [GroupItemComponent, EventCardComponent, CowLoaderComponent],
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
          id: 2,
          value: 'GigaTurboEssaKoks',
        },
      ],
      isConfirmationRequired: false,
      isPrivate: false,
      group: false,
      isCyclic: true,
      city: 'Warszawa',
      acceptedStatusUsers: 10,
    },
  };
}
