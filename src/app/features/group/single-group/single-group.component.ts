import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute } from '@angular/router';
import { EventCardComponent } from '../../event';
import { SingleGroupService } from './single-group.service';

@Component({
  selector: 'app-single-group',
  standalone: true,
  imports: [CommonModule, MatButtonModule, EventCardComponent],
  templateUrl: './single-group.component.html',
  styleUrls: ['./single-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SingleGroupComponent {
  private route = inject(ActivatedRoute);
  private singleGroupService = inject(SingleGroupService);

  private groupId = this.route.snapshot.params['id'];

  singleGroup$ = this.singleGroupService.getGroupInfo(this.groupId);
}
