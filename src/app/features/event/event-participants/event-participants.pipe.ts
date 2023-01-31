import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'participantStatus',
})
export class ParticipantStatusPipe implements PipeTransform {
  transform(value: string): string {
    if (value === 'accepted') {
      return 'Weźmie udział';
    } else if (value === 'pending') {
      return 'Zastanawia się';
    } else return 'Zrezygnowało';
  }
}
