import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { SingleGroupService } from './single-group.service';
import { SingleGroup } from '../group.interface';

@Component({
  selector: 'app-single-group',
  templateUrl: './single-group.component.html',
  styleUrls: ['./single-group.component.scss'],
  providers: [SingleGroupService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleGroupComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private singleGroupService = inject(SingleGroupService);
  singleGroup$: Observable<SingleGroup> | null = null;

  ngOnInit() {
    this.singleGroup$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.singleGroupService.getGroupInfo(params.get('id') as string))
    );
  }
}
