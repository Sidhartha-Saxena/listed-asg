"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const { data:session } = useSession();
  if (session) {
    router.push("/dashboard");
  } else {
    return (
      <div className="w-screen h-screen flex bg-[#F5F5F5]">
        <div className="grid h-full w-[40vw] place-items-center bg-black">
          <h1 className="font-bold text-[6rem] text-white font-mono">Board.</h1>
        </div>
        <div className="grid place-items-center w-[60vw]">
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-4xl font-bold font-mono mb-1">Sign In</h1>
              <h2 className="text-base font-sans">Sign in to your account</h2>
            </div>
            <div className="w-full flex gap-2">
              <button
                onClick={() => {
                  signIn();
                }}
                className="font-mono text-xs text-[#858585] bg-white w-48 rounded-xl h-8 flex items-center justify-center gap-1 hover:shadow-md btn"
              >
                <Image
                  src={"/google_icon.svg"}
                  width={14}
                  height={14}
                  className="btn-icon"
                />
                <span className="btn-text">Sign in with Google</span>
              </button>
              <button className="font-mono text-xs text-[#858585] bg-white w-48 rounded-xl h-8 flex items-center justify-center gap-1 hover:shadow-md btn">
                <Image
                  src={"/apple_icon.svg"}
                  width={11.5}
                  height={14}
                  className="btn-icon"
                />
                <span className="btn-text">Sign in with Apple</span>
              </button>
            </div>
            <div className="bg-white font-sans w-full rounded-[20px] flex flex-col items-center p-8 shadow-md">
              <div className="flex flex-col gap-[10px]">
                <div>
                  <h2 className="font-sans text-base self-start">
                    Email address
                  </h2>
                  <input
                    type="text"
                    placeholder="example@test.com"
                    className="font-sans w-80 rounded-lg h-10 bg-[#F5F5F5] outline-none flex items-center px-4"
                  />
                </div>
                <div>
                  <h2 className="font-sans text-base self-start">Password</h2>
                  <input
                    type="password"
                    className="font-sans w-80 rounded-lg h-10 bg-[#F5F5F5] outline-none flex items-center px-4"
                  />
                </div>
                <h2 className="font-sans hover:underline text-[#346BD4] text-base cursor-pointer">
                  Forgot Password?
                </h2>
                <button className="font-mono text-white bg-black rounded-xl h-10 font-bold text-base hover:shadow-md hover:text-black hover:bg-white border-[3px] border-black transition ease-in-out delay-[400] btn">
                  Sign In
                </button>
              </div>
            </div>
            <h2 className="texy-[#858585] font-sans text-base text-center">
              Don't have an account?{" "}
              <span className="text-[#346BD4] text-base cursor-pointer font-sans hover:underline">
                Register here
              </span>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}
