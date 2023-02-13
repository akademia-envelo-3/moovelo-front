import { EventCard, FilterValue, SortValue } from '../event.interfaces';

export interface EventListState {
  events: EventCard[];
  isFiltersHidden: boolean;
}

export interface GetEventPayload {
  sort: SortValue;
  filter: FilterValue[];
  category: string | null;
}
