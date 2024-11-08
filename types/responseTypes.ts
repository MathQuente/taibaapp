export interface HomeResponse {
  events: Events[];
  places: Places[];
}

export interface EventsResponse {
  events: Events[];
}

export interface PlacesReponse {
  places: Places[];
}

export interface Events {
  id: string;
  name: string;
  address: string;
  description: string;
  date: Date;
  realized_by: string;
}

export interface Places {
  id: string;
  name: string;
  address: string;
  working_hours: string;
  working_days: string;
}
