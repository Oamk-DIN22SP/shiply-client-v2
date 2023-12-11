const URL = `${process.env.NEXT_PUBLIC_API_URL}/notifications`;

const getAll = async () => {
  const response = await fetch(`${URL}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};


export { getAll };
