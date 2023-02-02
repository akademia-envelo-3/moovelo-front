import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EventComment } from '../../event.interfaces';

@Component({
  selector: 'app-event-comments-single',
  standalone: true,
  templateUrl: './event-comments-single.component.html',
  styleUrls: ['./event-comments-single.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventCommentsSingleComponent {
  @Input()
  comment!: EventComment;
}
