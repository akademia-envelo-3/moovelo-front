import { Component } from '@angular/core';
import { EventCard, EventCardComponent } from '../features/event';
import { GroupItemComponent } from '../features/group';
import { FooterComponent } from '@shared/footer/footer.component';
import { SearchBarComponent } from '@shared/search-bar/search-bar.component';

@Component({
  selector: 'app-theme',
  imports: [GroupItemComponent, EventCardComponent, FooterComponent, SearchBarComponent],
  standalone: true,
  template: `
    <h1>Storybook-like route</h1>
    <app-search-bar></app-search-bar>
    <h2>Loader</h2>

    <h2>Pojedyncza grupa w liście</h2>
    <app-group-list-item
      [groupItem]="{ id: 0, name: 'Nowa grupa', description: 'Bardzo fajna nowa grupa' }"></app-group-list-item>

    <h2>Event Card Component</h2>
    <div style="padding: 8px 8px;">
      <app-event-card [eventCard]="event"></app-event-card>
    </div>

    <h2>Footer</h2>
    <app-footer></app-footer>
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
