import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorhandlerService } from '@shared/Interceptor/errorhandler.service';
import { pattern } from '@shared/patterns/patterns';
import { trimValidator } from '@shared/validators/space-trim.validator';
import { CreateGroupResponse } from '../create-group.interface';
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
  private router = inject(Router);

  error$ = this.errorService.error$;

  createGroupForm = this.builder.group({
    name: this.builder.control('', {
      validators: [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(100),
        Validators.pattern(pattern.lettersNumbersDashesAndPolishLettersRegex),
        trimValidator,
      ],
    }),
    description: this.builder.control('', {
      validators: [Validators.required, Validators.minLength(20), Validators.maxLength(255), trimValidator],
    }),
  });

  get nameCtrl() {
    return this.createGroupForm.controls.name;
  }

  get descriptionCtrl() {
    return this.createGroupForm.controls.description;
  }

  handleCreateGroupSubmit() {
    this.createGroupForm.markAsTouched;
    if (this.createGroupForm.invalid) {
      return;
    }

    this.createGroupService.postNewGroup(this.createGroupForm.getRawValue()).subscribe(result => {
      this.router.navigate(['groups', result.id]);
    });
  }
}
