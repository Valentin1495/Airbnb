"use client";

import { UsersIcon } from "@heroicons/react/24/solid";

export default function Guests({ guests, setGuests }: Guests) {
  return (
    <div>
      <div className="justify-center flex items-center gap-x-2">
        <UsersIcon className="h-6 w-6" />
        <input
          type="number"
          className="bg-gray-100 font-bold text-lg rounded-md w-12 outline-none text-center py-1"
          min={1}
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
        />
      </div>
    </div>
  );
}
