"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import InitialHomes from "./InitialHomes";
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
    <div>
      <header className="sticky top-0 z-50 bg-white">
        <div className="relative">
          <div className="flex items-center py-7 md:py-5 sm:justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 lg:max-w-[1400px]">
            <Logo />
            <Link
              href="/host/homes"
              className="hover:bg-gray-100 p-3 rounded-full font-bold hidden lg:inline-flex duration-500"
            >
              Airbnb your home
            </Link>
          </div>
          <Search />
        </div>
      </header>
      <div className="h-[1px] bg-gray-200" />
      <main className="max-w-2xl mx-auto px-6 lg:max-w-[1400px] lg:px-8 py-5">
        <InitialHomes address={address} />
      </main>
    </div>
  );
}
