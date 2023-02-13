import { EventCard } from '../event.interfaces';

export interface EventListState {
  events: EventCard[];
  isFiltersHidden: boolean;
}

export interface GetEventPayload {
  sort: SortValue;
  filter: FilterValue[];
  category: string | null;
}

export type SortValue = 'sortOrder=desc' | 'sortOrder=asc' | 'participants=asc' | 'participants=desc';

export type FilterValue = 'participating=true' | 'group=true';

export interface SortOption {
  name: string;
  value: SortValue;
}

export interface FilterOption {
  name: string;
  value: FilterValue;
}
