import { format } from "date-fns";
import Header from "./Header";
import InitialHomes from "./InitialHomes";

async function getData(key: string) {
  const res = await fetch(key, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
      "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
    },
    cache: "no-store",
  });
  return res.json();
}

export default async function HomePage() {
  const checkin = format(new Date(), "yyyy-MM-dd");
  const checkout = format(
    new Date().getTime() + 7 * 24 * 60 * 60 * 1000,
    "yyyy-MM-dd"
  );
  const guests = "2";
  const address = "Seoul";
  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
  };

  const randomPage = getRandomInt(1, 9);
  const url = `https://airbnb13.p.rapidapi.com/search-location?location=${address}&checkin=${checkin}&checkout=${checkout}&adults=${guests}&page=${randomPage}`;

  const data = await getData(url);

  return (
    <div>
      <Header />
      <div className="h-[1px] bg-gray-200" />
      <main className=" max-w-2xl mx-auto px-6 lg:max-w-[1400px] lg:px-8 py-5">
        <InitialHomes homes={data?.results} />
      </main>
    </div>
  );
}
