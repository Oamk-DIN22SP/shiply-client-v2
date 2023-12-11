export interface Location {
  id: string;
  title: string;
  address: string;
};

export interface Cabinets {
  id: string;
  number: string;
  status: string;
  location_id: string;
  parcel_id: string;
  code: string;
  tracking_number: string;
  parcel_destination: string;
};

export interface Parcel {
  parcelID: string;
  status: string;
  trackingNumber: string;
};

export interface Client {
  clientId: string;
  clientName: string;
  clientEmail: string;
};