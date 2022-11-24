"use client";

import { Combobox } from "@headlessui/react";
import Script from "next/script";
import usePlacesAutocomplete from "use-places-autocomplete";

export default function SearchInput({
  destination,
  setDestination,
}: Destination) {
  const {
    value,
    suggestions: { status, data },
    setValue,
  } = usePlacesAutocomplete();

  return (
    <div>
      <div className="text-center">
        <Combobox value={destination} onChange={setDestination}>
          <Combobox.Input
            className="bg-gray-200 rounded-lg border-none 
                      font-bold outline-none w-4/5 sm:w-full
                      p-2 text-lg text-gray-900"
            placeholder="Search destinations"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            autoFocus
            required
          />
          <Combobox.Options
            className="outline-none mt-1 max-h-60 overflow-auto rounded-md
                    bg-white w-60 fixed z-50"
          >
            {status === "OK" &&
              data.map(({ place_id, description }) => (
                <Combobox.Option
                  key={place_id}
                  value={description}
                  className="truncate select-none font-bold outline-none py-2 px-4
                             ui-active:bg-[#FF385C] ui-active:text-white"
                >
                  {description}
                </Combobox.Option>
              ))}
          </Combobox.Options>
        </Combobox>
      </div>
    </div>
  );
}
