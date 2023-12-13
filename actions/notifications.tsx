const URL = `${process.env.NEXT_PUBLIC_API_URL}/notifications`;

const getAllNotification = async (email: String) => {
  const response = await fetch(`${URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userEmail: email,
    }),
  });
  const data = await response.json();
  return data;
};

export { getAllNotification };
