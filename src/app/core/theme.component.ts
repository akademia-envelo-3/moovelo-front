import { Component } from '@angular/core';
import { EventCard, EventCardComponent, EventSurvey } from '../features/event';
import { GroupItemComponent } from '../features/group';
import { CowLoaderComponent } from '../shared/loader/cow-loader.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { VisitorFormComponent } from '../features/visitor-form/visitor-form.component';
import { GroupListItem } from '../features/group';
import { EventSurveyComponent } from '../features/event/event-survey/event-survey.component';

@Component({
  selector: 'app-theme',
  imports: [
    GroupItemComponent,
    EventCardComponent,
    CowLoaderComponent,
    FooterComponent,
    VisitorFormComponent,
    EventSurveyComponent,
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

    <h2>Widok ankiety dla usera</h2>
    <app-event-survey [eventSurvey]="survey"></app-event-survey>

    <h2>Footer</h2>
    <app-footer></app-footer>
  `,
})
export default class ThemeComponent {
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

  survey: EventSurvey = {
    question: 'test',
    isMultipleChoice: false,
    answers: [
      {
        id: 1,
        value: 'Hello',
        voted: 20,
      },
      {
        id: 2,
        value: 'Yo',
        voted: 20,
      },
      {
        id: 3,
        value: 'Help',
        voted: 20,
      },
    ],
    yourAnswersIds: [],
  };
}
