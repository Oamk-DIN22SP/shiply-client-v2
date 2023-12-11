const URL = `${process.env.NEXT_PUBLIC_API_URL}/driver/pick-up`;

const parcelPickUp = async (
  cabinet_id: String,
  parcel_id: String,
) => {
  const response = await fetch(`${URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cabinet_id,
      parcel_id,
    }),
  });
  const data = await response.json();
  return data;
};

export default parcelPickUp;
