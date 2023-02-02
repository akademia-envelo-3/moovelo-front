import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EventCommentsSingleComponent } from './event-comment-single/event-comments-single.component';

@Component({
  selector: 'app-event-comments',
  standalone: true,
  imports: [EventCommentsSingleComponent],
  templateUrl: `./event-comments.component.html`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventCommentsComponent {}
