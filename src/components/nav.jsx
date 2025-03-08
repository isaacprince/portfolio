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

          <div className="flex items-center gap-8">
            {["Projects", "About", "Contact"].map((item) => (
              <div key={item} className="relative group">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="font-neueMachina text-[1rem] text-[#FF6600] hover:font-neueMachinaBold transition duration-300 z-10 relative"
                >
                  {item}
                </a>
                <div className="absolute -top-2 -left-2 w-[120%] h-[120%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10">
                  <img
                    src="/note.png"
                    alt=""
                    className="w-full h-full object-contain animate-pulse"
                  />
                </div>
              </div>
            ))}
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
