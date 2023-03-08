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
import { RouterModule } from '@angular/router';

export interface GroupItem {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-event-card[eventCard]',
  standalone: true,
  templateUrl: './event-card.component.html',
  imports: [CommonModule, MatIconModule, MatTooltipModule, RouterModule],
  styleUrls: ['./event-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventCardComponent {
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
