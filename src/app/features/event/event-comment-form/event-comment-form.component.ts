import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-event-comment-form',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, ReactiveFormsModule, CommonModule, MatButtonModule],
  templateUrl: `./event-comment-form.component.html`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventCommentFormComponent {
  private builder = inject(NonNullableFormBuilder);

  commentForm = this.builder.group({
    comment: this.builder.control('', {
      validators: [Validators.required, Validators.maxLength(254)],
    }),
  });

  get commentCtrl() {
    return this.commentForm.controls;
  }

  submitForm() {
    this.commentForm.markAllAsTouched();

    if (this.commentForm.invalid) {
      return;
    }
    console.log({
      text: this.commentForm.value.comment,
      attachments: [{}],
    });
  }
}
