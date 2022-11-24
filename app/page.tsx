"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Search from "./Search";

export default function Page() {
  const [address, setAddress] = useState<string>("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          const current = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          new google.maps.Geocoder()
            .geocode({ location: current })
            .then((res) => res.results[8].formatted_address)
            .then(setAddress);
        }
      );
    }
  }, []);

  return (
    <div className="relative">
      <header className="sticky top-0 flex items-center border-b py-7 md:py-5 px-10 sm:justify-between">
        <Logo />
        <Link
          href="/host/homes"
          className="hover:bg-gray-100 p-3 rounded-full font-bold hidden md:inline-flex duration-500"
        >
          Airbnb your home
        </Link>
      </header>
      <Search />
      <main></main>
    </div>
  );
}
