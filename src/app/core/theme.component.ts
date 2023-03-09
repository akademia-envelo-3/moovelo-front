import { Component } from '@angular/core';
import { EventCard, EventCardComponent, EventComment, EventSurvey } from '../features/event';
import { GroupItemComponent } from '../features/group';
import { CowLoaderComponent } from '../shared/loader/cow-loader.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { VisitorFormComponent } from '../features/visitor-form/visitor-form.component';
import { GroupListItem } from '../features/group';
import { EventSurveyComponent } from '../features/event/event-survey/event-survey.component';
import CategoryListItemComponent from '../features/category/category-list-item/category-list-item.component';
import { CategoryItemResponse } from '../features/category/category.interface';
import { EventCommentsSingleComponent } from '../features/event/event-comment/event-comment-single/event-comments-single.component';

@Component({
  selector: 'app-theme',
  imports: [
    GroupItemComponent,
    EventCardComponent,
    CowLoaderComponent,
    FooterComponent,
    VisitorFormComponent,
    EventSurveyComponent,
    CategoryListItemComponent,
    EventCommentsSingleComponent,
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
    <app-event-survey></app-event-survey>
    <h2>Category list Item</h2>
    <app-category-list-item [categoryItem]="categoryList"></app-category-list-item>
    <h2>Footer</h2>
    <app-footer></app-footer>
    <h2>Komentarz</h2>
    <app-event-comments-single [comment]="comment"></app-event-comments-single>
  `,
})
export default class ThemeComponent {
  group: GroupListItem = {
    groupOwner: {
      userId: 1,
    },
    isUserMember: false,
    id: 1,
    name: 'Watykan',
    description: 'Grupa dla watykańczyków',
    numberOfMembers: 2137,
  };

  event: EventCard = {
    id: 1,
    eventOwner: {
      userId: 1,
    },
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

  surveys: EventSurvey[] = [
    {
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
    },
    {
      question: 'Mięso?',
      isMultipleChoice: true,
      answers: [
        {
          id: 1,
          value: 'Tak',
          voted: 20,
        },
        {
          id: 2,
          value: 'Nie',
          voted: 20,
        },
        {
          id: 3,
          value: 'Bardzo nie',
          voted: 20,
        },
      ],
      yourAnswersIds: [],
    },
  ];

  categoryList: CategoryItemResponse = {
    id: 1,
    isVisible: false,
    name: 'Modlitwa',
  };

  comment: EventComment = {
    id: 1,
    user: {
      firstname: 'K.',
      lastName: 'Wojkowski',
    },
    date: '23-12-22',
    text: 'Kocham jabłko, ajfony są da best!',
    attachments: [],
  };
}
