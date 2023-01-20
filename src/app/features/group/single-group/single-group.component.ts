import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleGroupService } from './single-group.service';

@Component({
  selector: 'app-single-group',
  templateUrl: './single-group.component.html',
  styleUrls: ['./single-group.component.scss'],
  providers: [SingleGroupService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleGroupComponent {
  private route = inject(ActivatedRoute);
  private singleGroupService = inject(SingleGroupService);

  private groupId = this.route.snapshot.params['id'];

  singleGroup$ = this.singleGroupService.getGroupInfo(this.groupId);
}
