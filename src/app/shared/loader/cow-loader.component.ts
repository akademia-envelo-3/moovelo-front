import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'app-cow-loader',
  template: `
    <div class="loader">
      <img src="/assets/logo.png">
      <p> Ładowanie... </p>
    </div>
  `,
  styleUrls: ['./style.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CowLoaderComponent {

}
