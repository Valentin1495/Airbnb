import Image from "./Images";

export default function Home({
  name,
  price,
  url,
  beds,
  address,
  images,
  isSuperhost,
  lat,
  lng,
  reviewsCount,
  rating,
}: Home) {
  return (
    <article className="aspect-square">
      <Image images={images} />
    </article>
  );
}
