import { ChangeDetectionStrategy, Component, inject, OnDestroy } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Error404Component implements OnDestroy {
  private router = inject(Router);

  private timeout = setTimeout(() => {
    this.router.navigateByUrl('');
  }, 5000);

  ngOnDestroy() {
    clearTimeout(this.timeout);
  }
}
