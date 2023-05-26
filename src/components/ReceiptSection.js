import React from "react";
import AtmCard from "./AtmCard";
import { AiFillApple } from "react-icons/ai";
import { TbReceipt } from "react-icons/tb";

const ReceiptSection = () => {
  return (
    <section>
      <div className="mt-14 h-full w-[350px] rounded-lg bg-gray-200">
        <AtmCard />
        <ul className="space-y-3 px-7">
          <li className="flex justify-between gap-2">
            <span className="font-semibold text-gray-500">Company</span>
            <span className="text-black-500 flex items-center gap-2 text-center font-semibold">
              <AiFillApple className="inline-block" />
              Apple
            </span>
          </li>
          <li className="flex justify-between gap-2">
            <span className="font-semibold text-gray-500">Order Number</span>
            <span className="text-black-500 font-semibold">1266201</span>
          </li>
          <li className="flex justify-between gap-2">
            <span className="font-semibold text-gray-500">Product</span>
            <span className="text-black-500 font-medium">Macbook Air</span>
          </li>
          <li className="flex justify-between gap-2">
            <span className="font-semibold text-gray-500">VAT(20%)</span>
            <span className="text-black-500 font-medium">$100</span>
          </li>
        </ul>
        <div className="relative my-8">
          <span className="absolute inline-block h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></span>
          <p className="border border-dashed border-gray-500"></p>
          <span className="absolute right-0 inline-block h-8 w-8 w-8 -translate-y-1/2 translate-x-1/2 rounded-full bg-white"></span>
        </div>
        <div className="flex w-full items-center justify-between gap-3 px-7">
          <div>
            <p className="text-md font-semibold text-gray-600">
              You have to Pay
            </p>
            <h4>
              <span className="text-2xl font-bold">549</span>.
              <span className="text-gray-600">99</span>
              <span className="text-gray-600"> USD</span>
            </h4>
          </div>
          <div>
            <TbReceipt size={34} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReceiptSection;
