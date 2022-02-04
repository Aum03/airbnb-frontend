import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="flex py-7 px-2 border-b hover:opacity-80 hover:shadow-lg
    tranform transition duration-200 ease-out">
      <div className="relative h-24 w-40 md:h-52 md:w-80">
        <Image src={img} layout="fill" className="rounded-2xl" objectFit="cover" />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <p className="pt-2 text-sm text-gray-500 flex-grow"> {description} </p>
        <div className="flex justify-between pt-5 items-end">
          <p className="flex item-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>
          <div>
            <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
