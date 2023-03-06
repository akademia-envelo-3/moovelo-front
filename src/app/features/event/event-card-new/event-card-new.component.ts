import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  Input,
  ViewChild,
} from '@angular/core';
import { EventCard } from '../event.interfaces';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

export interface GroupItem {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-event-card-new[eventCard]',
  standalone: true,
  templateUrl: './event-card-new.component.html',
  imports: [CommonModule, MatIconModule, MatTooltipModule],
  styleUrls: ['./event-card-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventCardNewComponent {
  @Input() eventCard!: EventCard;
  @ViewChild('card') card!: ElementRef<HTMLDivElement>;
  @ViewChild('hashtagsContainer') hashtagsContainer!: ElementRef<HTMLUListElement>;

  private ref = inject(ChangeDetectorRef);

  isFullWidth = true;

  ngAfterViewInit() {
    const card = this.card.nativeElement;
    const hashtagsContainer = this.hashtagsContainer.nativeElement;

    if (hashtagsContainer.offsetWidth > card.offsetWidth) {
      this.isFullWidth = false;
      this.ref.detectChanges();
    }
  }
}
