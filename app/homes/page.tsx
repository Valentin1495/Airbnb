import { format } from "date-fns";
import Homes from "./Homes";

async function getData(key: string) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY!,
      "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
    },
  };

  const res = await fetch(key, options);

  return res.json();
}

export default async function Page({
  searchParams,
}: {
  searchParams: {
    destination: string;
    checkin: string;
    checkout: string;
    guests: string;
  };
}) {
  const location = searchParams.destination;
  const checkin = format(new Date(searchParams.checkin), "yyyy-MM-dd");
  const checkout = format(new Date(searchParams.checkout), "yyyy-MM-dd");
  const guests = searchParams.guests;
  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
  };

  const randomPage = getRandomInt(1, 9);

  const url = `https://airbnb13.p.rapidapi.com/search-location?location=${location}&checkin=${checkin}&checkout=${checkout}&adults=${guests}&page=${randomPage}`;

  const data = await getData(url);

  return (
    <div>
      <div className="h-[1px] bg-gray-200" />
      <main className=" max-w-2xl mx-auto px-6 lg:max-w-[1400px] lg:px-8 py-5">
        <Homes homes={data?.results} />
      </main>
    </div>
  );
}
