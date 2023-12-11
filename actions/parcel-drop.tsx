const URL = `${process.env.NEXT_PUBLIC_API_URL}/driver/drop-off`;

const parcelDrop = async (
  parcel_id: String,
  cabinet_id: String,
  location_id: String
) => {
  const response = await fetch(`${URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      parcel_id,
      cabinet_id,
      location_id,
    }),
  });
  const data = await response.json();
  return data;
};

export default parcelDrop;
