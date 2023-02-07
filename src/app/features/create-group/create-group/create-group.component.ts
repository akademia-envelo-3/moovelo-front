import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { ErrorhandlerService } from '@shared/Interceptor/errorhandler.service';
import { pattern } from '@shared/patterns/patterns';
import { CreateGroupService } from '../create-group.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss'],
})
export class CreateGroupComponent {
  private builder = inject(NonNullableFormBuilder);
  private createGroupService = inject(CreateGroupService);
  private errorService = inject(ErrorhandlerService);

  error$ = this.errorService.error$;

  createGroupForm = this.builder.group({
    name: this.builder.control('', {
      validators: [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(100),
        Validators.pattern(pattern.lettersNumbersDashesAndPolishLettersRegex),
      ],
    }),
    description: this.builder.control('', {
      validators: [Validators.required, Validators.minLength(20), Validators.maxLength(255)],
    }),
  });

  get nameCtrl() {
    return this.createGroupForm.controls.name;
  }

  get descriptionCtrl() {
    return this.createGroupForm.controls.description;
  }

  handleSubmit() {
    this.createGroupForm.markAsTouched;
    if (this.createGroupForm.invalid) {
      return;
    }

    this.createGroupService.postNewGroup(this.createGroupForm.getRawValue());
  }
}
