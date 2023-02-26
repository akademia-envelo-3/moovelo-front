import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { EventCommentFormComponent } from './event-comment-form/event-comment-form.component';
import { EventCommentsSingleComponent } from './event-comment-single/event-comments-single.component';
import { EventCommentService } from './event-comment.service';

@Component({
  selector: 'app-event-comments',
  standalone: true,
  imports: [EventCommentsSingleComponent, CommonModule, EventCommentFormComponent, EventCommentFormComponent],
  templateUrl: `./event-comments.component.html`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [EventCommentService],
})
export class EventCommentsComponent {
  private service = inject(EventCommentService);

  getNewComments() {
    this.eventComments$ = this.service.getComments();
  }

  eventComments$ = this.service.getComments();
}
