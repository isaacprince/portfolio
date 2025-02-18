"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Nav() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours() % 12 || 12;
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const period = now.getHours() >= 12 ? "PM" : "AM";
      setTime(`${hours}:${minutes} ${period}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="pt-[1rem] w-full">
      <div className=" px-[12.25rem]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[0.375rem]">
            <div className="h-[2rem] w-[2rem]">
              <Image
                src="/logo.png"
                alt=""
                className="h-full w-full object-contain"
                width={32}
                height={32}
              />
            </div>
            <div className="flex flex-col ">
              <span className="font-mono text-[0.75rem] text-[#AAAAAA] font-[800]">
                PRINCE
              </span>
              <span className="font-mono text-[0.75rem] text-[#AAAAAA] font-[800]">
                ISAAC
              </span>
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex items-center gap-2 border-[0.125rem] border-[#FF6600] rounded-full p-[0.75rem]">
              <span className="font-mono text-[1.125rem] font-[400] text-[#ff6600]">
                🇨🇦 {time}
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
