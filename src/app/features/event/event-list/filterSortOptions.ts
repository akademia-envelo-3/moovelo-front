import { FilterOption, SortOption } from '../event.interfaces';

export const sortOptions: SortOption[] = [
  { name: 'Data: najnowsze', value: 'sortOrder=desc' },
  { name: 'Data: najstarsze', value: 'sortOrder=asc' },
  { name: 'Liczba uczestników: od najwyższej', value: 'participants=desc' },
  { name: 'Liczba uczestników: od najniższej', value: 'participants=asc' },
];

export const filterOptions: FilterOption[] = [
  { name: 'Wydarzenia grupowe', value: 'group=true' },
  { name: 'Wydarzenia w których uczestniczę', value: 'participating=true' },
];
