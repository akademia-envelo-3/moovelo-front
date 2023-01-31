import { Component } from '@angular/core';
import {
  EventCard,
  EventCardComponent,
  EventParticipantsComponent,
  EventParticipant,
  EventParticipantsStatus,
} from '../features/event';
import { GroupItemComponent } from '../features/group';
import { CowLoaderComponent } from '../shared/loader/cow-loader.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { VisitorFormComponent } from '../features/visitor-form/visitor-form.component';
import { GroupListItem } from '../features/group';

@Component({
  selector: 'app-theme',
  imports: [
    GroupItemComponent,
    EventCardComponent,
    CowLoaderComponent,
    FooterComponent,
    VisitorFormComponent,
    EventParticipantsComponent,
  ],
  standalone: true,
  template: `
    <h1>Storybook-like route</h1>
    <h2>Loader</h2>
    <app-cow-loader></app-cow-loader>
    <h2>Pojedyncza grupa w liście</h2>
    <app-group-list-item [groupItem]="group"></app-group-list-item>

    <h2>Event Card Component</h2>
    <div style="padding: 8px 8px;">
      <app-event-card [eventCard]="event"></app-event-card>
    </div>

    <h2>Formularz zapisu dla visitora</h2>
    <app-visitor-form></app-visitor-form>

    <h2>Lista uczestników eventu</h2>
    <app-event-participants [eventParticipants]="eventParticipants" [eventVisitors]="visitor"> </app-event-participants>

    <h2>Footer</h2>
    <app-footer></app-footer>
  `,
})
export default class ThemeComponent {
  eventParticipants: Record<EventParticipantsStatus, EventParticipant[]> = {
    accepted: [
      {
        userId: 1,
        firstName: 'Janek',
        lastName: 'Kowalski',
      },
      {
        userId: 2,
        firstName: 'Janina',
        lastName: 'Kowalska',
      },
    ],
    pending: [
      {
        userId: 1,
        firstName: 'Zbigniew',
        lastName: 'Stonoga',
      },
    ],
    rejected: [
      {
        userId: 1,
        firstName: 'Tupac',
        lastName: 'Shakur',
      },
    ],
  };

  visitor: EventParticipant[] = [
    {
      userId: 1,
      firstName: 'Adam',
      lastName: 'Małysz',
    },
  ];

  group: GroupListItem = {
    groupOwner: {
      basicUserId: 1,
    },
    isUserMember: false,
    id: 1,
    name: 'Watykan',
    description: 'Grupa dla watykańczyków',
    numberOfMembers: 2137,
  };

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
