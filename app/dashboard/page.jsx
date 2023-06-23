"use client"
import React from "react";
import {
  ChartPieIcon,
  TagIcon,
  CalendarIcon,
  Cog8ToothIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Charts from "../Charts";
import { useSession } from "next-auth/react";
export default function Page() {
  const {data:session}=useSession();

  return (
    <div className="w-full h-full flex bg-[#F5F5F5] p-6 gap-8 items-center">
      <div className="bg-black rounded-[30px] h-[92vh] w-[19.4vw] px-12 py-14 text-white flex flex-col gap-8 justify-between shadow-sm">
        <div className="flex flex-col gap-10">
          <h1 className="text-4xl font-bold font-mono">Board.</h1>
          <ul className="text-lg flex flex-col gap-4 font-mono">
            <li className="flex items-center justify-start text-lg gap-4">
              <ChartPieIcon className="w-5" />
              Dashboard
            </li>
            <li className="flex items-center justify-start text-lg gap-4">
              <TagIcon className="w-5" />
              Transactions
            </li>
            <li className="flex items-center justify-start text-lg gap-4">
              <CalendarIcon className="w-5" />
              Schedules
            </li>
            <li className="flex items-center justify-start text-lg gap-4">
              <UserCircleIcon className="w-5" />
              Users
            </li>
            <li className="flex items-center justify-start text-lg gap-4">
              <Cog8ToothIcon className="w-5" />
              Settings
            </li>
          </ul>
        </div>
        <ul className="text-sm flex flex-col gap-4 font-mono">
          <li>Home</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="w-[69.4vw] h-[92vh] rounded-[30px] p-2">
        <Charts session={session}/>
      </div>
    </div>
  );
}
