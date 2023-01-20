import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GroupListItem } from '../group.interface';
import { Store } from '@ngrx/store';
import { BehaviorSubject, map } from 'rxjs';
import { UserState } from '../../auth/store/user.interface';
import { AuthService } from '../../auth/authentication/auth.service';
import { User } from 'src/app/app.module';

@Component({
  selector: 'app-group-list-item[groupItem]',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './group-list-item.component.html',
  styleUrls: ['./group-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupItemComponent {
  @Input() groupItem!: GroupListItem;
  store = inject<Store<User>>(Store);
  user$ = this.store.select(state => state.User.type);
  authService = inject(AuthService);
  showRole() {
    this.user$.subscribe(res => {
      console.log(res);
    });
  }
}
