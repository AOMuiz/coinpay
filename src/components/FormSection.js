import React from "react";
import { BsPatchCheckFill, BsPencil, BsCreditCardFill } from "react-icons/bs";
import { TbGridDots } from "react-icons/tb";
import { RiMastercardFill } from "react-icons/ri";

const FormSection = () => {
  return (
    <section className="card-detail__section p flex-1">
      <nav className="flex justify-between">
        <div className="flex gap-3">
          <span className="inline-block flex h-9 w-9 items-center justify-center rounded-full bg-blue-700 text-center text-white">
            <BsCreditCardFill />
          </span>
          <p className="text-2xl font-bold">
            AceCoin<span className="font-normal">Pay</span>
          </p>
        </div>
        <div className="flex items-center gap-1 text-lg font-bold">
          <p className="space-x-[0.3rem]">
            <span className="rounded-[0.4rem] bg-black p-2 text-white">0</span>
            <span className="rounded-[0.4rem] bg-black p-2 text-white">1</span>
          </p>
          <span>:</span>
          <p className="space-x-[0.3rem]">
            <span className="rounded-[0.4rem] bg-black p-2 text-white">1</span>
            <span className="rounded-[0.4rem] bg-black p-2 text-white">9</span>
          </p>
        </div>
      </nav>
      <section className="my-7">
        <form className="space-y-7">
          <label className="mb-5">
            <div className="flex justify-between">
              <div>
                <p className="text-md mb-2 text-lg font-bold">Card Number</p>
                <p className="font-semibold text-gray-400">
                  Enter the 16-digit card number ons the card
                </p>
              </div>
              <p className="flex items-center gap-1 self-center text-blue-700">
                <BsPencil /> Edit
              </p>
            </div>
            <div class="relative">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-lg text-red-500">
                <RiMastercardFill />
              </div>
              <input
                className="my-3 w-full rounded-md border border-gray-300 bg-gray-50 p-4 placeholder:pl-4 focus:text-blue-700 focus:outline-blue-700"
                type="text"
                placeholder="2412 - 7512 - 3412 - 3456"
              />
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-600">
                <BsPatchCheckFill />
              </div>
            </div>
          </label>
          <label className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="mb-2 text-lg font-bold">CVV Number</p>
              <p className="font-semibold text-gray-400">
                Enter the 3 or 4 digit number on the card
              </p>
            </div>
            <div className="relative">
              <input
                className="rounded-md border border-gray-300 p-4 text-center font-bold focus:text-blue-700 focus:outline-blue-700"
                type="number"
                max={5}
              />
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <TbGridDots />
              </div>
            </div>
          </label>
          <label className="mb-5 flex justify-between gap-3">
            <div className="flex-1">
              <p className="mb-2 text-lg font-bold">Expiry Date</p>
              <p className="font-semibold text-gray-400">
                Enter the expiration date of the card
              </p>
            </div>
            <div className="flex  items-center">
              <input
                className="rounded-md border border-gray-300 p-4 text-center font-bold focus:border focus:text-blue-700 focus:outline-blue-700"
                type="number"
              />
              <span className="mx-2 font-bold"> / </span>
              <input
                className="rounded-lg border border-gray-300 p-4 text-center font-bold focus:text-blue-700 focus:outline focus:outline-blue-700"
                type="number"
              />
            </div>
          </label>
          <label className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="mb-2 text-lg font-bold">Password</p>
              <p className="font-semibold text-gray-400">
                Enter your Dynamic password
              </p>
            </div>
            <div className="relative">
              <input
                className="w-full rounded-md border border-gray-300 p-4 focus:text-blue-700 focus:outline-blue-700"
                type="password"
              />
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <TbGridDots />
              </div>
            </div>
          </label>
          <button
            type="submit"
            className="block w-full rounded-md bg-blue-800 p-4 font-bold text-white"
          >
            Pay Now
          </button>
        </form>
      </section>
    </section>
  );
};

export default FormSection;
