import { Directive, HostListener } from '@angular/core';

@Directive({
  standalone: true,
  selector: 'button[stopEventPropagation], a[stopEventPropagation]',
})
export class StopEventPropagationDirective {
  @HostListener('click', ['$event']) onClick($event: Event) {
    $event.stopPropagation();
  }
}
