const URL = `${process.env.NEXT_PUBLIC_API_URL}/locations`;

const reserveByLocationId = async (location_id: string) => {
  const response = await fetch(`${URL}/reserve`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ location_id }),
  });

  return response.json();
};


export { reserveByLocationId };
