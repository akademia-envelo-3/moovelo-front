import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.module';
import { CommonModule } from '@angular/common';
import { tap } from 'rxjs';
import { menuVariants } from './menuVariants';

type Role = 'admin' | 'eventOwner' | 'groupOwner' | 'user';

@Component({
  standalone: true,
  selector: 'app-settings[eventOwnerId], app-settings[groupOwnerId]',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  imports: [MatMenuModule, MatIconModule, MatButtonModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent {
  @Input() eventOwnerId?: number;
  @Input() groupOwnerId?: number;

  private store = inject<Store<AppState>>(Store);

  user$$ = this.store
    .select(state => state.user)
    .pipe(
      tap(result => {
        this.setRole(result.type, result.id);
      })
    );

  role: Role = 'user';
  menuVariants = menuVariants;
  isSettingsVisible = true;

  private isGroupOwner(userId: number) {
    return userId === this.groupOwnerId;
  }

  private isEventOwner(userId: number) {
    return userId === this.eventOwnerId;
  }

  private setRole(role: string, userId: number) {
    if (role === 'admin') {
      this.role = 'admin';
    } else if (role === 'user') {
      if (this.isGroupOwner(userId)) {
        this.role = 'groupOwner';
      } else if (this.isEventOwner(userId)) {
        this.role = 'eventOwner';
      } else if (this.groupOwnerId) {
        this.role = 'user';
      } else {
        this.isSettingsVisible = false;
      }
    } else {
      this.isSettingsVisible = false;
    }
  }
}
