export interface HomeResponse {
  events: Events[];
  places: Places[];
}

export interface EventsResponse {
  events: Events[]
}

export interface PlacesReponse {
  places: Places[]
}

interface Events {
  id: string;
  name: string;
  address: string;
  description: string;
  date: Date;
  realized_by: string;
}

interface Places {
  id: string;
  name: string;
  address: string;
  working_hours: string;
  working_days: string;
}
