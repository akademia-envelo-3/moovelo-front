import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute } from '@angular/router';
import { ErrorComponent } from '@shared/error.component';
import { ErrorhandlerService } from '@shared/Interceptor/errorhandler.service';
import { CowLoaderComponent } from '@shared/loader/cow-loader.component';
import { SettingsComponent } from '@shared/settings/settings.component';
import { EventCardComponent } from '../../event';
import { SingleGroupService } from './single-group.service';

@Component({
  selector: 'app-single-group',
  standalone: true,
  imports: [CommonModule, MatButtonModule, EventCardComponent, CowLoaderComponent, ErrorComponent, SettingsComponent],
  templateUrl: './single-group.component.html',
  styleUrls: ['./single-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SingleGroupComponent {
  private route = inject(ActivatedRoute);
  private singleGroupService = inject(SingleGroupService);
  private errorService = inject(ErrorhandlerService);
  private groupId = this.route.snapshot.params['id'];

  errorClientServer$ = this.errorService.error$;

  singleGroup$ = this.singleGroupService.getGroupInfo(this.groupId);
}
