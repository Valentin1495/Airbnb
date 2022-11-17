import dummyData from "../../dummyData";
import Home from "./Home";

// async function getHomes() {
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY!,
//       "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
//     },
//   };

// const res = await fetch(
//   `https://airbnb13.p.rapidapi.com/search-location?=${location}&checkin=${checkin}&checkout=${checkout}&adults=${guests}&page=4`,
//   options
// );

// if (!res.ok) {
//   throw new Error('Failed to fetch data')
// }

// return res.json();
// }

export default async function Page() {
  // const homes = await getHomes();

  // price.priceItems[0].amount

  return (
    <main>
      <section></section>
      <section>
        {dummyData.results.map((result) => (
          <Home
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
            price={result.price.priceItems[0].amount}
          />
        ))}
      </section>
    </main>
  );
}
