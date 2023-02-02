import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { EventCommentsSingleComponent } from './event-comment-single/event-comments-single.component';
import { EventCommentService } from './event-comment.service';

@Component({
  selector: 'app-event-comments',
  standalone: true,
  imports: [EventCommentsSingleComponent, CommonModule],
  templateUrl: `./event-comments.component.html`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [EventCommentService],
})
export class EventCommentsComponent {
  private service = inject(EventCommentService);

  eventComments$ = this.service.getComments();
}
