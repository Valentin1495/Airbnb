"use client";

import { Fragment, useState } from "react";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Transition, Dialog } from "@headlessui/react";
import Link from "next/link";
import SearchInput from "./SearchInput";
import CheckinDate from "./CheckinDate";
import CheckoutDate from "./CheckoutDate";
import Guests from "./Guests";

export default function Search() {
  const [destination, setDestination] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="outline-none hover:shadow-lg duration-500
                  shadow-md border rounded-full border-gray-300
                  px-5 py-1 flex items-center gap-x-2 w-max"
      >
        <h2>
          Anywhere <span className="text-gray-500 font-light mx-2">|</span>{" "}
          Anyweek <span className="text-gray-500 font-light mx-2">|</span>{" "}
          <span className="text-gray-500 font-light">Add guests</span>
        </h2>
        <MagnifyingGlassCircleIcon className="h-10 w-10 text-[#FF385C] -mr-4" />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            setIsOpen(false);
            setDestination("");
            setGuests(1);
            setCheckin("");
            setCheckout("");
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="transform rounded-2xl bg-white 
                  p-6 w-full max-w-xl md:max-w-2xl shadow-xl transition-all 
                  h-[228px] space-y-5"
                >
                  <div className="flex item-center justify-center sm:justify-evenly gap-x-2">
                    <div className="w-1/2 flex flex-col items-center justify-center gap-y-3">
                      <SearchInput
                        destination={destination}
                        setDestination={setDestination}
                      />
                      <CheckinDate setCheckin={setCheckin} />
                    </div>
                    <div className="w-1/2 flex flex-col items-center justify-center gap-y-5">
                      <Guests guests={guests} setGuests={setGuests} />
                      <CheckoutDate setCheckout={setCheckout} />
                    </div>
                  </div>
                  <Link
                    href={{
                      pathname: "/homes",
                      query: {
                        destination,
                        checkin,
                        checkout,
                        guests,
                      },
                    }}
                    className={`${
                      (!destination || !checkin || !checkout) &&
                      "pointer-events-none opacity-50"
                    } 
                      gap-x-1 outline-none flex items-center 
                      hover:cursor-pointer w-fit mx-auto
                    bg-[#FF385C] text-white rounded-full p-2
                  `}
                  >
                    <MagnifyingGlassIcon className="w-8 h-8" />
                    <h2 className="text-lg font-bold">Search</h2>
                  </Link>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
