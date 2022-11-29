import { format } from "date-fns";
import Header from "./Header";
import InitialHomes from "./InitialHomes";

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

export default async function Page() {
  const checkin = format(new Date(), "yyyy-MM-dd");
  const checkout = format(
    new Date().getTime() + 7 * 24 * 60 * 60 * 1000,
    "yyyy-MM-dd"
  );
  const guests = "2";
  const address = "Seoul";

  const url = `https://airbnb13.p.rapidapi.com/search-location?location=${address}&checkin=${checkin}&checkout=${checkout}&adults=${guests}&page=3`;
  // const url =
  //   "https://api.themoviedb.org/3/discover/tv?api_key=35e5468abfe0da7d51f2d2d364c3d636&with_networks=213&page=20";

  // const timeout = Math.floor(Math.random() * 5 + 1) * 1000;
  // await new Promise((resolve) => setTimeout(resolve, timeout));

  const data = await getData(url);
  console.log(data);
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
