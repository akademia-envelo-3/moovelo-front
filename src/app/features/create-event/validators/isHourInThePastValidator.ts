import { AbstractControl, ValidatorFn } from '@angular/forms';

export const isHourInThePastValidator: ValidatorFn = (control: AbstractControl) => {
  const today = new Date();
  const startDateRaw = control.get('startDate')?.value as string | undefined;
  const hour = control.get('hour')?.value as string | undefined;
  if (startDateRaw && hour) {
    const startDate = new Date(startDateRaw);
    if (startDate.toDateString() === today.toDateString()) {
      const hourSplitted = hour.split(':');
      return today.getHours() < +hourSplitted[0] ||
        (today.getHours() === +hourSplitted[0] && today.getMinutes() < +hourSplitted[1])
        ? null
        : { isHourInThePast: true };
    }
  }
  return null;
};
