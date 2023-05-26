import React from "react";
import { RiMastercardFill } from "react-icons/ri";
import { BsWifi } from "react-icons/bs";
import { FcSimCardChip } from "react-icons/fc";

const AtmCard = () => {
  return (
    <div className="mx-auto grid min-h-[300px] w-[240px]  -translate-y-14 grid-cols-1 content-between  rounded-xl border border-gray-200 bg-white bg-opacity-60 bg-clip-padding p-5 shadow-md backdrop-blur-xl backdrop-filter">
      <div className="flex w-full justify-between text-2xl">
        <FcSimCardChip />
        <BsWifi />
      </div>
      <div className="h-fit space-y-5">
        <div>
          <p className="text xl text-black-300 mb-2 ">Jonathan Micheal</p>
          <div className="flex items-center gap-5 text-xl font-semibold">
            <p className="">....</p> <p>3456</p>
          </div>
        </div>
        <div className="flex items-center justify-between font-semibold">
          <p>09/22</p>
          <RiMastercardFill className="text-red-500" size={34} />
        </div>
      </div>
    </div>
  );
};

export default AtmCard;
