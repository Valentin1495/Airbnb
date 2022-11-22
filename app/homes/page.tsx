import { format } from "date-fns";
import mockData from "../../mockData";
import Home from "./Home";

async function getHomes(url: string) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY!,
      "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
    },
  };

  const res = await fetch(`${url}`, options);

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

  const url = `https://airbnb13.p.rapidapi.com/search-location?location=${location}&checkin=${checkin}&checkout=${checkout}&adults=${guests}&page=8`;

  // const homes = await getHomes(url);

  return (
    <main>
      <section></section>
      <section>
        {mockData.results?.map((result) => (
          <Home
            id={result.id}
            key={result.id}
            name={result.name}
            url={result.url}
            beds={result.beds}
            address={result.address}
            images={result.images}
            isSuperhost={result.isSuperhost}
            lat={result.lat}
            lng={result.lng}
            reviewsCount={result.reviewsCount}
            rating={result.rating!}
            price={result.price}
          />
        ))}
      </section>
    </main>
  );
}
