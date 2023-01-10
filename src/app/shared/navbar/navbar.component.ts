import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav>
      <div class="nav-logo">
        <img src="./assets/logo.png" alt="logo aplikacji moovelo" />
        <p>Moovelo</p>
      </div>

      <button class="btn-login">Zaloguj</button>
    </nav>
  `,
  styleUrls: ['./style.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {}
