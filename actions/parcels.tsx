const URL = `${process.env.NEXT_PUBLIC_API_URL}/parcels`;

const sendParcel = async (data: any) => {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      lockerID: data.lockerID,
      lockerNumber: data.lockerNumber,
      packageDepth: data.packageDepth,
      packageHeight: data.packageHeight,
      packageMass: data.packageMass,
      packageWidth: data.packageWidth,
      receiverAddress: data.receiverAddress,
      receiverEmailAddress: data.receiverEmailAddress,
      receiverName: data.receiverName,
      receiverPhoneNumber: data.receiverPhoneNumber,
      senderAddress: data.senderAddress,
      senderEmailAddress: data.senderEmailAddress,
      senderID: data.senderID,
      senderLocationId: data.senderLocationId,
      senderName: data.senderName,
      senderPhoneNumber: data.senderPhoneNumber,
      senderDropOffPoint: data.senderDropOffPoint,
    }),
  });

  return response.json();
};

const parcelHistory = async (email: string) => {
  const response = await fetch(`${URL}/email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  return response.json();
};

const trackParcel = async (trackingNumber: string) => {
  const response = await fetch(`${URL}/trackParcel/${trackingNumber}`);
  return response.json();
};

const getParcelByID = async (parcelID: string) => {
  const response = await fetch(`${URL}/${parcelID}`);
  return response.json();
};

export { sendParcel, getParcelByID, trackParcel, parcelHistory };
