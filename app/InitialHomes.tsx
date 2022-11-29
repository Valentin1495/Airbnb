import InitialHome from "./InitialHome";

export default function InitialHomes({ homes }: { homes: Home[] }) {
  return (
    <section
      className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 
    lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
    >
      {homes?.map((home) => (
        <InitialHome
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
// {data?.results.map((result: Movie) => (
//   <div key={result.id}>
//     <div>
//       <div className="w-full aspect-w-1 aspect-h-1 overflow-hidden rounded-xl">
//         <Image
//           src={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
//           alt="movie"
//           fill
//           priority
//           className="w-full object-cover"
//           sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px:) 33vw, 25vw"

//         />
//       </div>
//     </div>
//   </div>
// ))}
