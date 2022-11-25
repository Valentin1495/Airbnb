export default async (key: string) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY!,
      "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
    },
  };
  const res = await fetch(key, options);

  return res.json();
};
