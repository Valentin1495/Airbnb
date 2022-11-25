import { format } from "date-fns";
import useSWR from "swr";
import mockData from "../mockData";
import fetcher from "../utils/fetcher";
import Home from "./homes/Home";

export default function InitialHomes({ address }: { address: string }) {
  const checkin = format(new Date(), "yyyy-MM-dd");
  const checkout = format(
    new Date().getTime() + 7 * 24 * 60 * 60 * 1000,
    "yyyy-MM-dd"
  );
  const guests = "2";

  const url = `https://airbnb13.p.rapidapi.com/search-location?location=${address}&checkin=${checkin}&checkout=${checkout}&adults=${guests}&page=8`;

  // const url2 =
  //   "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10";

  // const { data } = useSWR(url, fetcher);

  return (
    <section className="grid grid-cols-13 gap-3">
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
  );
}
