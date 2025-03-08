/* eslint-disable @next/next/no-img-element */
"use client";
import Nav from "@/components/nav";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const isProject1InView = useInView(project1Ref, {
    once: true,
    margin: "-100px",
  });
  const isProject2InView = useInView(project2Ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <div className="min-h-screen h-full bg-[#111111]">
      {/* hero */}
      <main className="min-h-screen h-full bg-[#111111] relative">
        <Nav />

        <AnimatePresence mode="wait">
          <div className="relative pt-0 mt-10 bg-[#111111] h-full">
            {/* About Section */}
            <motion.div
              className="absolute top-[13.1875rem] left-[12.3125rem] w-[18.5625rem] z-20"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src="/about.png" alt="" className="w-full" />
              <p className="absolute w-[15.125rem] top-[3.75rem] left-[1.875rem] text-[#333435] font-neueMachinaBold font-[800] text-sm leading-[1rem]">
                Prince operates at the intersection of two critical domains: the
                pursuit of enjoyment and the pragmatic resolution of business
                challenges through design.
                <br /> This approach enables Prince to deliver exceptional user
                experiences while effectively addressing the needs of the
                business.
              </p>
            </motion.div>

            {/* Center Profile */}
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0 }}
            >
              <img src="/prince.png" alt="" className="w-[31rem] mx-auto" />
            </motion.div>

            {/* Links Section */}
            <motion.div
              className="relative  top-[43.625rem] left-[9.9375rem] z-20"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <img src="/links.png" alt="" className="w-[37.914rem]" />
              <div className="absolute top-8 left-0 flex ml-20 gap-2">
                <a
                  target="_blank"
                  href=":https://www.linkedin.com/in/prince-isaac/"
                  className="text-white"
                >
                  <span className="bg-none w-[90px] h-[70px] inline-block rotate-12"></span>
                </a>
                <a
                  target="_blank"
                  href="https://dribbble.com/princeisaac"
                  className="text-white"
                >
                  <span className="bg-none w-[90px] h-[70px] inline-block rotate-12"></span>
                </a>
                <a
                  target="_blank"
                  href="https://www.behance.net/princeisaac"
                  className="text-white"
                >
                  <span className="bg-none w-[90px] h-[70px] inline-block rotate-12"></span>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/isaacprince"
                  className="text-white"
                >
                  <span className="bg-none w-[90px] h-[70px] inline-block rotate-12"></span>
                </a>
                <a
                  href="mailto:isaacprince002@gmail.com"
                  className="text-white"
                  target="_blank"
                >
                  <span className="bg-none w-[90px] h-[70px] inline-block rotate-12"></span>
                </a>
              </div>
            </motion.div>

            {/* Right Side Notes - Each with absolute positioning */}
            {/* CV Note */}
            <motion.div
              className="absolute top-[11.375rem] right-[15.375rem] w-[8.708rem] z-20"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Link
                href="https://docs.google.com/document/d/1V71I5XEU6sNjQYbbp_OR01lRsljHkSKBH_HKVLuB3Gk/edit?tab=t.0"
                target="_blank"
              >
                <img src="/cv.png" alt="" className="w-full h-[9.72875rem]" />
              </Link>
            </motion.div>

            {/* Likes Note */}
            <motion.div
              className="absolute top-[25.0625rem] right-[14.0625rem] w-[9.0625rem] z-20"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <img src="/likes.png" alt="" className="w-full" />
            </motion.div>

            {/* Selected Work Note */}
            <motion.div
              className="absolute top-[38.6875rem] right-[9.875rem] w-[10.9375rem] z-20"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <img src="/work.png" alt="" className="w-full" />
            </motion.div>

            {/* Playground Note */}
            <motion.div
              className="absolute top-[42.9375rem] right-[24.75rem] w-[10.9375rem] z-20"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <img src="/playground.png" alt="" className="w-full" />
            </motion.div>

            {/* lines */}
            <motion.div
              className="absolute top-[14.875rem] left-[24.0625rem] w-[53.4375rem] z-10"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              <img src="/line1.png" alt="" className="w-full" />
            </motion.div>
            <motion.div
              className="absolute top-[14.375rem] left-[20.9375rem] w-[57.3125rem] z-10"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <img src="/line2.png" alt="" className="w-full" />
            </motion.div>
            <motion.div
              className="absolute top-[14.625rem] right-[18.875rem] h-[17.1875rem] z-10"
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
            >
              <img src="/line3.png" alt="" className="h-full" />
            </motion.div>
            <motion.div
              className="absolute top-[27.75rem] right-[17.5625rem] h-[15.1875rem] z-10"
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              <img src="/line4.png" alt="" className="h-full" />
            </motion.div>
            <motion.div
              className="absolute top-[39.125rem] right-[17rem] w-[15.1875rem] z-10"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <img src="/line5.png" alt="" className="w-full" />
            </motion.div>

            {/* scroll down */}
            <motion.div
              className="absolute top-[50rem] left-1/2 w-[3.1875rem] -translate-x-1/2 z-20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.7,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <img src="/scroll.png" alt="" className="w-full" />
            </motion.div>
          </div>
        </AnimatePresence>
      </main>
      {/* selected projects */}
      <section
        id="projects"
        className="min-h-screen flex flex-col items-center bg-[#111111] pt-[6.875rem] px-[6.25rem] mt-[12.375rem]"
      >
        <div className="flex justify-start w-full">
          <h1 className="text-[#FF6600] text-[2.5rem] font-normal mb-[2.4375rem] ml-[5rem] font-neueMachina">
            Selected Projects
          </h1>
        </div>

        {/* Project 1 */}
        <div
          ref={project1Ref}
          className="relative w-fit flex flex-row items-center justify-center mb-[2rem] gap-[11.875rem]"
        >
          {/* lines */}
          <motion.div
            className="absolute top-[8.55rem] right-[18.4375rem] w-[21.4375rem] z-10"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={
              isProject1InView
                ? { opacity: 1, scaleX: 1 }
                : { opacity: 0, scaleX: 0 }
            }
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img src="/line6.png" alt="" className="w-full" />
          </motion.div>
          <motion.div
            className="absolute top-[13rem] h-[38.5rem] right-[18.125rem] z-10"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={
              isProject1InView
                ? { opacity: 1, scaleX: 1 }
                : { opacity: 0, scaleX: 0 }
            }
            transition={{ duration: 1, delay: 0.7 }}
          >
            <img src="/line7.png" alt="" className="h-full" />
          </motion.div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={
              isProject1InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.6 }}
            className="relative w-full lg:w-[43.4375rem] z-20"
          >
            <Image
              src="/project1.png"
              alt="Afro Eats Mobile App"
              width={695}
              height={450}
              className="rounded-lg w-full h-auto"
            />
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={
              isProject1InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full lg:w-[23.0625rem] z-20"
          >
            <div className="relative">
              <Image
                src="/details1.png"
                alt="Project Details"
                width={400}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute bottom-[12%] left-0 w-full flex justify-center">
                <Link
                  href="/case-studies/cravings/"
                  className="border-2 border-black px-[0.375rem] py-[0.09375rem] font-neueMachinaBold text-[#323334] rounded-md hover:bg-black hover:text-[#fef08a] transition-colors bg-[#fef08a] transform rotate-2 text-sm sm:text-base"
                >
                  VIEW PROJECT
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Project 2 */}
        <div
          ref={project2Ref}
          className="relative flex flex-row items-center justify-center gap-[11.875rem]"
        >
          {/* lines */}
          <motion.div
            className="absolute top-[8.55rem] right-[18.4375rem] w-[21.4375rem] z-10"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={
              isProject2InView
                ? { opacity: 1, scaleX: 1 }
                : { opacity: 0, scaleX: 0 }
            }
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img src="/line6.png" alt="" className="w-full" />
          </motion.div>
          <motion.div
            className="absolute top-[13rem] h-[38.5rem] right-[18.125rem] z-10"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={
              isProject1InView
                ? { opacity: 1, scaleX: 1 }
                : { opacity: 0, scaleX: 0 }
            }
            transition={{ duration: 1, delay: 0.7 }}
          >
            <img src="/line7.png" alt="" className="h-full" />
          </motion.div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={
              isProject2InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.6 }}
            className="relative w-full lg:w-[43.4375rem] z-20"
          >
            <Image
              src="/project2.png"
              alt="InDAO Mobile App"
              width={650}
              height={450}
              className="rounded-lg w-full h-auto"
            />
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={
              isProject2InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full lg:w-[23.0625rem] z-20"
          >
            <div className="relative">
              <Image
                src="/details2.png"
                alt="Project Details"
                width={400}
                height={400}
                className="w-full h-auto"
              />
              {/* Yellow overlay to cover the existing button */}
              <div className="absolute bottom-[12%] left-0 w-full flex justify-center">
                <div className="absolute -bottom-5 left-2/4 -translate-x-1/2 w-2/4 h-[50px] bg-[#fef08a]" />
                <Link
                  href="/case-studies/indao/"
                  className="relative border-2 border-black px-[0.375rem] py-[0.09375rem] font-neueMachinaBold text-[#323334] rounded-md hover:bg-black hover:text-[#fef08a] transition-colors bg-[#fef08a] transform rotate-2 text-sm sm:text-base"
                >
                  VIEW PROJECT
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Project 3 */}
        <div
          ref={project2Ref}
          className="relative flex flex-row items-center justify-center gap-[11.875rem]"
        >
          {/* lines */}
          <motion.div
            className="absolute top-[8.55rem] right-[18.4375rem] w-[21.4375rem] z-10"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={
              isProject2InView
                ? { opacity: 1, scaleX: 1 }
                : { opacity: 0, scaleX: 0 }
            }
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img src="/line6.png" alt="" className="w-full" />
          </motion.div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={
              isProject2InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.6 }}
            className="relative w-full lg:w-[43.4375rem] z-20"
          >
            <Image
              src="/project2.png"
              alt="InDAO Mobile App"
              width={650}
              height={450}
              className="rounded-lg w-full h-auto"
            />
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={
              isProject2InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full lg:w-[23.0625rem] z-20"
          >
            <div className="relative">
              <Image
                src="/details3.png"
                alt="Project Details"
                width={400}
                height={400}
                className="w-full h-auto"
              />
              {/* Yellow overlay to cover the existing button */}
              <div className="absolute bottom-[12%] left-0 w-full flex justify-center">
                <Link
                  href="/case-studies/nds/"
                  className="relative border-2 border-black px-[0.375rem] py-[0.09375rem] font-neueMachinaBold text-[#323334] rounded-md hover:bg-black hover:text-[#fef08a] transition-colors bg-[#fef08a] transform rotate-2 text-sm sm:text-base"
                >
                  VIEW PROJECT
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Playground */}
      <section className=" flex flex-col items-center bg-[#111111] pt-[6.875rem]  mt-[12.375rem]">
        <div className="flex justify-center w-full">
          <h1 className="text-[#FF6600] text-[2.5rem] font-black mb-[2.4375rem] ml-[5rem] font-neueMachina">
            Playground
          </h1>
        </div>

        {/* Film Strip Container */}
        <div className="relative w-full">
          {/* Top Film Strip */}
          <div className="w-full h-[2rem]  flex items-center justify-between px-4 mb-2">
            <span className="text-white text-xs">
              1600 NEGATIVE REVERSAL A4
            </span>
            <div className="flex gap-8">
              <span className="text-white text-xs">→ 1</span>
              <span className="text-white text-xs">→ 2A</span>
              <span className="text-white text-xs">→ 3A</span>
            </div>
            <span className="text-[#918D8D] text-xs">DUAL STND FILM</span>
          </div>
          <div className="w-full h-[2rem] flex items-center justify-start gap-6  mb-2">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-[3.5625rem] h-[2rem] bg-[#918D8D]" />
            ))}
          </div>

          {/* Images Container */}
          <div className="relative overflow-hidden w-full">
            <div className="flex animate-scroll">
              {/* First set of images */}
              <div className="flex gap-4 shrink-0">
                <div className="w-[36.5rem] h-[26.25rem] relative p-4">
                  <img
                    src="/banner1.png"
                    alt="Banner 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[36.5rem] h-[26.25rem] relative p-4">
                  <img
                    src="/banner2.png"
                    alt="Banner 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[36.5rem] h-[26.25rem] relative p-4">
                  <img
                    src="/banner3.png"
                    alt="Banner 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[36.5rem] h-[26.25rem] relative p-4">
                  <img
                    src="/banner4.png"
                    alt="Banner 1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex gap-4 shrink-0 ml-4">
                <div className="w-[36.5rem] h-[26.25rem] relative p-4">
                  <img
                    src="/banner1.png"
                    alt="Banner 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[36.5rem] h-[26.25rem] relative p-4">
                  <img
                    src="/banner2.png"
                    alt="Banner 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[36.5rem] h-[26.25rem] relative p-4">
                  <img
                    src="/banner3.png"
                    alt="Banner 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[36.5rem] h-[26.25rem] relative p-4">
                  <img
                    src="/banner4.png"
                    alt="Banner 1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-fullg gap-[110px] flex items-center justify-center px-4 mb-2">
            <span className="text-white text-xs">GRADE BALANCED FILM 6710</span>
            <span className="text-white text-xs">GRADE BALANCED FILM 6710</span>
          </div>

          <div className="w-full h-[2rem] flex items-center justify-start gap-6  mb-2">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-[3.5625rem] h-[2rem] bg-[#918D8D]" />
            ))}
          </div>
          <div className="w-full  flex items-center justify-center px-4 mb-2">
            <div className="flex gap-8">
              <span className="text-white text-xs">→ 4</span>
              <span className="text-white text-xs">→ 4A</span>
              <span className="text-white text-xs">→ 5A</span>
            </div>
          </div>
        </div>
        {/* Film Strip Container 2*/}
        <div className="relative w-full mt-16">
          {/* Top Film Strip */}
          <div className="w-full h-[2rem]  flex items-center justify-between px-4 mb-2">
            <span className="text-white text-xs">
              1600 NEGATIVE REVERSAL A4
            </span>
            <div className="flex gap-8">
              <span className="text-white text-xs">→ 1</span>
              <span className="text-white text-xs">→ 2A</span>
              <span className="text-white text-xs">→ 3A</span>
            </div>
            <span className="text-[#918D8D] text-xs">DUAL STND FILM</span>
          </div>
          <div className="w-full h-[2rem] flex items-center justify-start gap-6  mb-2">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-[3.5625rem] h-[2rem] bg-[#918D8D]" />
            ))}
          </div>

          {/* Images Container */}
          <div className="relative overflow-hidden w-full">
            <div className="flex animate-scrolltwo">
              {/* First set of images */}
              <div className="flex gap-4 shrink-0">
                <div className="w-[36.5rem] h-[26.25rem] relative p-4">
                  <img
                    src="/banner5.png"
                    alt="Banner 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[36.5rem] h-[26.25rem] relative p-4">
                  <img
                    src="/banner2.png"
                    alt="Banner 6"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[36.5rem] h-[26.25rem] relative p-4">
                  <img
                    src="/banner3.png"
                    alt="Banner 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[36.5rem] h-[26.25rem] relative p-4">
                  <img
                    src="/banner4.png"
                    alt="Banner 1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex gap-4 shrink-0 ml-4">
                <div className="w-[36.5rem] h-[26.25rem] relative p-4">
                  <img
                    src="/banner5.png"
                    alt="Banner 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[36.5rem] h-[26.25rem] relative p-4">
                  <img
                    src="/banner6.png"
                    alt="Banner 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[36.5rem] h-[26.25rem] relative p-4">
                  <img
                    src="/banner3.png"
                    alt="Banner 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[36.5rem] h-[26.25rem] relative p-4">
                  <img
                    src="/banner4.png"
                    alt="Banner 1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-fullg gap-[110px] flex items-center justify-center px-4 mb-2">
            <span className="text-white text-xs">GRADE BALANCED FILM 6710</span>
            <span className="text-white text-xs">GRADE BALANCED FILM 6710</span>
          </div>

          <div className="w-full h-[2rem] flex items-center justify-start gap-6  mb-2">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-[3.5625rem] h-[2rem] bg-[#918D8D]" />
            ))}
          </div>
          <div className="w-full  flex items-center justify-center px-4 mb-2">
            <div className="flex gap-8">
              <span className="text-white text-xs">→ 4</span>
              <span className="text-white text-xs">→ 4A</span>
              <span className="text-white text-xs">→ 5A</span>
            </div>
          </div>
        </div>
      </section>
      {/* footer */}
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
    </div>
  );
}
