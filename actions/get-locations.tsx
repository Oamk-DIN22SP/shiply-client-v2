const URL = `${process.env.NEXT_PUBLIC_API_URL}/locations`;

const getLocation = async () => {
  const res = await fetch(`${URL}`);
  return res.json();
};

export default getLocation;
