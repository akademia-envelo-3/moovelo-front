import { AbstractControl, ValidatorFn } from '@angular/forms';

export const hashtagMinLengthValidator: ValidatorFn = (control: AbstractControl) => {
  const value = control.value as string[];
  return value.some(hashtag => hashtag.length < 2) ? { minSingleHashtagLength: true } : null;
};

export const hashtagMaxLengthValidator: ValidatorFn = (control: AbstractControl) => {
  const value = control.value as string[];
  console.log(value);
  return value.some(hashtag => hashtag.length > 40) ? { maxSingleHashtagLength: true } : null;
};
