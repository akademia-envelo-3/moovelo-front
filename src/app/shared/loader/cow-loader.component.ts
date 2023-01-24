import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LoaderService } from '@shared/Interceptor/loaderhandler.service';

@Component({
  selector: 'app-cow-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="loaderService.isLoading$ | async">
      <div class="loader">
        <img src="/assets/cow-grey.svg" alt="ładowanie, proszę czekać" />
        <p>Ładowanie...</p>
      </div>
    </div>
  `,
  styleUrls: ['./style.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CowLoaderComponent {
  loaderService = inject(LoaderService);
}
