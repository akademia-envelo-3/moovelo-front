import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ErrorhandlerService } from './Interceptor/errorhandler.service';

@Component({
  selector: 'app-error',
  imports: [CommonModule],
  standalone: true,
  template: `<div class="smth-went-wrong"><p *ngIf="errorService.error$ | async">Ups coś poszło nie tak...</p></div> `,
  styles: ['.smth-went-wrong {  text-align: center }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorComponent {
  errorService = inject(ErrorhandlerService);
}
