"use client";
import React from "react";
import Image from "next/image";

export default function Tiles() {
  return (
    <div className=" grid grid-cols-4 justify-between">
      <div className=" rounded-xl bg-[#DDEFE0] flex flex-col justify-center px-6 py-3 shadow-sm w-[15.3vw] box-border justify-self-start ">
        <Image
          src={"/cashin.svg"}
          width={26.4}
          height={24}
          className="self-end "
        />
        <div className="flex flex-col">
          <h2 className="text-sm font-sans leading-4">Total Revenues</h2>
          <h1 className="text-2xl font-bold font-sans leading-6">${"2,129,364"}</h1>
        </div>
      </div>
      <div className=" rounded-xl bg-[#F4ECDD] flex flex-col justify-center px-6 py-3 shadow-sm  w-[15.3vw] box-border justify-self-center">
        <Image
          src={"/transactions.svg"}
          width={20.4}
          height={24}
          className="self-end "
        />
        <div className="flex flex-col">
          <h2 className="text-sm font-sans leading-4">Total Transaction</h2>
          <h1 className="text-2xl font-bold font-sans leading-6">{"1,520"}</h1>
        </div>
      </div>
      <div className=" rounded-xl bg-[#EFDADA] flex flex-col justify-center px-6 py-3 shadow-sm  w-[15.3vw] box-border justify-self-center">
        <Image src={"/likes.svg"} width={23} height={24} className="self-end " />
        <div className="flex flex-col">
          <h2 className="text-sm font-sans leading-4">Total Likes</h2>
          <h1 className="text-2xl font-bold font-sans leading-6">${"9,721"}</h1>
        </div>
      </div>
      <div className=" rounded-xl bg-[#DEE0EF] flex flex-col justify-center px-6 py-3 shadow-sm  w-[15.3vw] box-border justify-self-end">
        <Image
          src={"/users.svg"}
          width={36.4}
          height={24}
          className="self-end "
        />
        <div className="flex flex-col">
          <h2 className="text-sm font-sans leading-4">Total Users</h2>
          <h1 className="text-2xl font-bold font-sans leading-6">${"892"}</h1>
        </div>
      </div>
    </div>
  );
}
