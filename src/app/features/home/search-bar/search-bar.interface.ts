export interface SearchResult {
  events: Event[];
  groups: Group[];
}

export interface Event {
  id: number;
  name: string;
}

export interface Group {
  id: number;
  name: string;
}
