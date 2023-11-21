export type options = { display_listen_unit: string };
export type linkTypes = "facebook" | "amazon";
export type link = {
  type: string;
  url: string;
};

export interface IArtistData {
  thumb_url: string;
  mbid: string;
  facebook_page_url: string;
  image_url: string;
  tracker_count: number;
  tracking: string[];
  upcoming_event_count: number;
  url: string;
  support_url: string;
  show_multi_ticket: boolean;
  name: string;
  options: { [key in keyof options]: boolean };
  links: link[];
  artist_optin_show_phone_number: false;
  id: string;
}

export interface IVenue {
  location: string;
  name: string;
  latitude: string;
  longitude: string;
  street_address: string;
  postal_code: string;
  city: string;
  country: string;
  region: string;
}

export interface IEventsData {
  id: string;
  url: string;
  datetime: Date;
  title: string;
  description: string;
  artist: IArtistData;
  venue: IVenue;
  lineup: { [key: string]: any }[];
  offers: any[];
  artist_id: string;
  on_sale_datetime: string;
  festival_start_date: string;
  festival_end_date: string;
  festival_datetime_display_rule: string;
  starts_at: string;
  ends_at: string;
  datetime_display_rule: string;
  bandsintown_plus: boolean;
}
