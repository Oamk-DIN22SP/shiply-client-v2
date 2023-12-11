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
     }),
  });

  return response.json();
}


export { sendParcel };
