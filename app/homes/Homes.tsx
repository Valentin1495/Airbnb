import Home from "./Home";

export default function Homes({ homes }: { homes: Home[] }) {
  return (
    <section
      className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 
    lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
    >
      {homes?.map((home) => (
        <Home
          id={home.id}
          key={home.id}
          name={home.name}
          url={home.url}
          beds={home.beds}
          address={home.address}
          images={home.images}
          isSuperhost={home.isSuperhost}
          rareFind={home.rareFind}
          lat={home.lat}
          lng={home.lng}
          reviewsCount={home.reviewsCount}
          rating={home.rating!}
          price={home.price}
        />
      ))}
    </section>
  );
}
