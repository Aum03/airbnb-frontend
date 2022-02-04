import Image from "next/image";
import React, { useState } from "react";
import {
  GlobeAltIcon,
  MenuIcon,
  UserAddIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import DateRangePicker from "react-date-range/dist/components/DateRangePicker";
import { useRouter } from "next/router";

function Header({ pHolder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuest, setNoOfGuest] = useState(1);
  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const resetInput = (e) => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuest: noOfGuest

      }
    })
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <header className="sticky top-0 z-50 p-4 bg-white shadow-md grid grid-cols-3 md:px-10">
      {/* left */}
      <div className="relative flex h-10 items-center cursor-pointer" onClick={() => router.push('/')}>
        <Image
        alt="logo-image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle */}
      <div className="flex items-center  md:border-2 md:rounded-full md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow px-4 bg-transparent outline-none"
          type="text"
          placeholder={pHolder || "Start your search"}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="hidden md:inline-flex bg-red-400 h-8 p-2 cursor-pointer text-white rounded-full md:mx-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {/* right */}
      <div className="flex items-center space-x-4 text-gray-500 justify-end">
        <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>

      {searchInput && (
        <div className=" mx-auto flex flex-col col-span-3">
          {" "}
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center">
            <h2 className="text-2xl font-semibold flex-grow">
              Number of guest
            </h2>
            <UsersIcon className="h-5" />
            <input
              className="w-14 pl-2 text-red-400 outline-none text-lg"
              onChange={(e) => setNoOfGuest(e.target.value)}
              min={1}
              type="number"
              value={noOfGuest}
            />
          </div>
          <div className="flex mt-4">
            <button className="flex-1" onClick={resetInput}>
              Cancel
            </button>
            <button onClick={search} className="flex-1 text-red-400">Search</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
