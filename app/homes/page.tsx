"use client";

import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();

  const destination = searchParams.get("destination");

  return <div>{destination}</div>;
}
