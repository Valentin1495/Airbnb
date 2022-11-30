"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { StarIcon } from "@heroicons/react/20/solid";

export default function InitialHome({
  id,
  name,
  price,
  url,
  beds,
  address,
  images,
  isSuperhost,
  rareFind,
  lat,
  lng,
  reviewsCount,
  rating,
}: Home) {
  const [page, setPage] = useState(0);

  const paginate = (newDirection: number) => {
    setPage(page + newDirection);
  };

  const next = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (page === images.length - 1) {
      setPage(0);
    } else {
      paginate(1);
    }
    e.stopPropagation();
  };

  const prev = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (page === 0) {
      setPage(images.length - 1);
    } else {
      paginate(-1);
    }
    e.stopPropagation();
  };

  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  return (
    <div
      className="group space-y-2 hover:cursor-pointer"
      onClick={() => router.push(`${url}`)}
    >
      <div className="relative">
        <div className="w-full aspect-w-1 aspect-h-1 overflow-hidden rounded-xl">
          {images.map((image, idx) => (
            <Image
              // priority
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px:) 33vw, 25vw"
              key={idx}
              alt="home"
              className={` 
                ${
                  idx === page
                    ? "opacity-1 delay-[0ms]"
                    : "opacity-0 duration-200 ease-in-out delay-200"
                }
                ${
                  isLoading
                    ? "grayscale blur-2xl scale-110"
                    : "grayscale-0 blur-0 scale-100"
                }
                w-full object-cover duration-700 ease-in-out `}
              src={image}
              onLoadingComplete={() => setIsLoading(false)}
            />
          ))}
        </div>

        <button
          type="button"
          title="prev"
          onClick={prev}
          className="z-0 btn left-2"
        >
          <ChevronLeftIcon className="icon" />
        </button>

        <button
          type="button"
          title="next"
          className="z-0 btn right-2"
          onClick={next}
        >
          <ChevronRightIcon className="icon" />
        </button>

        {isSuperhost && (
          <span className="absolute left-4 top-4 bg-white px-2 py-1 rounded-md text-sm font-bold">
            Superhost
          </span>
        )}

        {rareFind && (
          <span className="absolute left-4 top-4 bg-white px-2 py-1 rounded-md text-sm font-bold">
            Rare find
          </span>
        )}
      </div>
      <div className="flex flex-col w-full">
        <div className="flex items-center gap-x-3 justify-between">
          <span className="truncate inline-block">{name}</span>
          {rating && reviewsCount && (
            <span className="flex items-center font-light">
              <StarIcon className="h-5 w-5" /> {`${rating}(${reviewsCount})`}
            </span>
          )}
          {rating && !reviewsCount && (
            <span className="flex items-center font-light">
              <StarIcon className="h-5 w-5" /> {rating}
            </span>
          )}
        </div>
        <p className="truncate font-light text-gray-500">{address}</p>
        {beds && <p className="font-light text-gray-500">{`${beds} beds`}</p>}
        <p>
          {`$${price.priceItems[0].amount}`}{" "}
          <span className="font-light text-gray-500">/ night</span>
        </p>
      </div>
    </div>
  );
}
