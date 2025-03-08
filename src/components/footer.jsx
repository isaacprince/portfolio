import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <section
      id="contact"
      className="flex justify-between items-start bg-[#111111] py-[100px] pt-[6.875rem] px-[6.25rem] mt-[12.375rem] relative"
    >
      <div className="absolute top-[9.55rem] right-[26.4375rem] w-[36.938rem] z-10">
        <img src="/line8.png" alt="" className="w-full" />
      </div>
      <div className="max-w-[37.875rem] flex flex-col items-start z-20">
        <h1 className="text-[#FF6600] text-[4rem] font-normal mb-[2.4375rem] font-neueMachina">
          Got a killer idea? Share it with me!
        </h1>
        <div className="flex gap-8 justify-center items-start ">
          <img src="/hello.png" alt="Hello" className="w-[9.813rem] h-auto" />
          <Link
            href="https://medium.com/@isaacprince002"
            target="_blank"
            className="flex justify-center items-center"
          >
            <img src="/tm.png" alt="Twitter" className="w-auto h-auto" />
          </Link>
        </div>
      </div>
      <div>
        <div
          initial={{ opacity: 0, x: 50 }}
          className="relative w-full lg:w-[23.0625rem] z-20"
        >
          <div className="relative">
            <Image
              src="/message.png"
              alt="Project Details"
              width={400}
              height={400}
              className="w-full h-auto"
            />
            <div className="absolute bottom-[12%] left-0 w-full flex justify-center">
              <Link
                href="mailto:isaacprince002@gmail.com"
                target="_blank"
                className="border-2 border-black px-[0.375rem] py-[0.09375rem] font-neueMachinaBold text-[#323334] rounded-md hover:bg-black hover:text-[#fef08a] transition-colors bg-[#fef08a] transform rotate-2 text-sm sm:text-base"
              >
                DROP A MESSAGE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
