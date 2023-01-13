import { SingleEventStateInterface } from '../single-event.interface';
export const initialSingleEventState: SingleEventStateInterface = {
  eventId: '',
  eventInfo: {
    isConfirmationRequired: true,
    limitedPlaces: 0,
    eventParticipationStats: {
      accepted: 0,
      pending: 0,
      rejected: 0,
    },
    isPrivate: false,
    group: {
      id: '',
      name: '',
    },
    cycleLenght: 0,
    name: '',
    category: {
      id: '',
      name: '',
    },
    startDate: '',
    hour: '',
    location: {
      id: '',
      altitude: 0,
      latitude: 0,
      postCode: '',
      city: '',
      street: '',
      streetNumber: '',
      apartmentNumber: '',
    },
    description: '',
    hashtags: [],
  },
};
