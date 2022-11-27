"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Skeleton from "../Skeleton";

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

  if (isLoading) return <Skeleton />;
  return (
    <div className="group" onClick={() => router.push(`${url}`)}>
      <div className="relative">
        <div className="w-full aspect-w-1 aspect-h-1 overflow-hidden rounded-xl">
          {images.map((image, idx) => (
            <Image
              alt="home"
              fill
              className={` 
                ${
                  idx === page
                    ? "opacity-1 z-50 delay-[0ms]"
                    : "opacity-0 duration-200 ease-in-out delay-200"
                }
                w-full object-cover duration-700 ease-in-out `}
              src={image}
              // onLoadingComplete={() => setIsLoading(false)}
            />
          ))}
        </div>
        <button
          type="button"
          title="prev"
          onClick={prev}
          className="btn left-2"
        >
          <ChevronLeftIcon className="icon" />
        </button>

        <button
          type="button"
          title="next"
          className="btn right-2"
          onClick={next}
        >
          <ChevronRightIcon className="icon" />
        </button>
      </div>
      <h1>{name}</h1>
    </div>
  );
}
