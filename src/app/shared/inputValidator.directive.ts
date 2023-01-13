import { Directive, HostBinding } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  standalone: true,
  selector: '[error][formControlName], [error][formControl]',
})
export class InputValidatorDirective {
  constructor(private control: NgControl) {}
  @HostBinding('class.error') get valid() {
    return this.control.errors && this.control.touched ? true : false;
  }
}
