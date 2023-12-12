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
  receiverID: string;
  driverID: string;
  status: string;
  parcelDescription: string;
  pickupAddress: string;
  deliveryAddress: string;
  deliveryDate: string;
  deliveryNotes: string;
  trackingNumber: string;
  pinCode: string;
  senderName: string;
  senderEmailAddress: string;
  senderAddress: string;
  senderPhoneNumber: string;
  receiverName: string;
  receiverEmailAddress: string;
  receiverAddress: string;
  receiverPhoneNumber: string;
  senderDropOffPoint: string;
  packageWidth: string;
  packageHeight: string;
  packageMass: string;
  packageWeight: string;
  pickedUpDateTime: string;
  readyForPickupDateTime: string;
  receiverDropOffPoint: string;
  senderID: string;
  receiverLocationId: string;
  senderLocationId: string;
  lockerID: string;
  lockerNumber: string;
};

export interface Client {
  clientId: string;
  clientName: string;
  clientEmail: string;
};