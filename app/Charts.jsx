"use client";
import Tiles from "./Tiles";
import React from "react";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Graph from "./Graph";
import Image from "next/image";
import PieChart from "./Pie";

export default function Charts({ session }) {
  return (
    <div className=" flex flex-col gap-4 h-[92vh] p-2">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-mono font-bold">Dashoard</h1>
        <div className="flex gap-2 items-center justify-end">
          <div className="bg-white flex items-center justify-end rounded-xl px-2">
            <input
              type="text"
              placeholder="Search"
              className="font-sans w-80 rounded-lg h-10 bg-white outline-none flex items-center px-4 text-lg"
            />
            <MagnifyingGlassIcon className="w-6" />
          </div>
          <BellIcon className="w-6 text-black" />
          {session ? (
            <div className="rounded-full">
              <Image
                src={session.user.image}
                width={32}
                height={32}
                style={{ objectFit: "contain", borderRadius: "100px" }}
              />
            </div>
          ) : (
            <div className="w-8 h-8 rounded-full bg-lime-400"></div>
          )}
        </div>
      </div>
      <div>
        <Tiles />
      </div>
      <div className="w-full h-full bg-white rounded-2xl shadow-sm">
        <Graph />
      </div>
      <div className=" grid grid-cols-2 w-full h-full gap-6">
        <div className="h-full">
          <PieChart />
        </div>
        <div className="bg-white flex flex-col shadow-sm rounded-3xl w-full h-full p-4 gap-4">
          <div className="flex justify-between items-center px-4">
            <h1 className="font-bold text-lg w-full font-mono capitalize">
              Today&apos;s Schedule
            </h1>
            <h2 className="text-xs font-mono w-full text-[#858585] cursor-pointer text-end">
              See All {">"}
            </h2>
          </div>
          <div className="flex flex-col px-4 gap-4 h-full">
            <div className="border-l-4 border-green-400 py-1 pl-2">
              <h1 className="text-sm font-sans text-[#666] font-bold">
                Meeting with suppliers from Kuta Bali
              </h1>
              <h1 className="text-xs font-sans text-[#999]">14.00-15.00</h1>
              <h1 className="text-xs font-sans text-[#999]">
                at Sunset Road, Kuta, Bali{" "}
              </h1>
            </div>
            <div className="border-l-4 border-blue-700 py-1 pl-2">
              <h1 className="text-sm font-sans text-[#666] font-bold">
                Meeting with suppliers from Kuta Bali
              </h1>
              <h1 className="text-xs font-sans text-[#999]">14.00-15.00</h1>
              <h1 className="text-xs font-sans text-[#999]">
                at Sunset Road, Kuta, Bali{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
