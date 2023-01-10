import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="footer">
      <h3>Kontakt: mootech@cowmail.com</h3>
      <h2>Moovelo</h2>
      <p class="watermark">@2022 Mootech all rights reserved</p>
    </div>
  `,
  styleUrls: ['./style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
