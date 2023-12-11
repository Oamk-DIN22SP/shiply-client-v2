const URL = `${process.env.NEXT_PUBLIC_API_URL}/parcels`;

const getAllByClient = async (id: string) => {
  const response = await fetch(`${URL}/client/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};


export { getAllByClient };
