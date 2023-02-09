import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, inject, Output } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators, FormGroup, FormGroupDirective } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EventCommentService } from '../event-comment.service';

@Component({
  selector: 'app-event-comment-form',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, ReactiveFormsModule, CommonModule, MatButtonModule],
  templateUrl: `./event-comment-form.component.html`,
  styleUrls: ['./event-comment-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventCommentFormComponent {
  @Output() sentComment = new EventEmitter();

  private builder = inject(NonNullableFormBuilder);

  private service = inject(EventCommentService);

  commentForm = this.builder.group({
    user: this.builder.group({
      firstName: this.builder.control(''),
      lastName: this.builder.control(''),
    }),
    date: this.builder.control(''),
    text: this.builder.control('', {
      validators: [Validators.required, Validators.maxLength(255), Validators.minLength(1)],
    }),
    attachments: this.builder.control([]),
  });

  get commentCtrl() {
    return this.commentForm.controls;
  }

  private clearForm(form: FormGroup, formGroupDirective: FormGroupDirective) {
    form.reset;
    formGroupDirective.resetForm();
  }

  submitForm(form: FormGroup, formGroupDirective: FormGroupDirective) {
    this.commentForm.markAllAsTouched();

    if (this.commentForm.invalid) {
      return;
    }
    this.service.postComment(this.commentForm.getRawValue()).subscribe(() => {
      this.clearForm(form, formGroupDirective);
      this.sentComment.emit();
    });
  }
}
