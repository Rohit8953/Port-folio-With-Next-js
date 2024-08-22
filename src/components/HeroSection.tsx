"use client";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
const HeroSection = () => {
  const words = [
    {
      text: "I'm",
    },
    {
      text: "Rohit",
    },
    {
      text: "Web developer",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "and",
    },
    {
      text: "Coder",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />

      <div className="p-4 relative z-10 w-full text-center">
        <div className="flex flex-col h-fit items-center justify-center">
          <TypewriterEffectSmooth words={words} />
        </div>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-xl mx-auto">
          As a web developer and coder, I specialize in crafting dynamic and
          functional websites and applications. Proficient in a variety of
          programming languages and frameworks, I create seamless user
          experiences while implementing innovative solutions.
        </p>
        <div className="mt-10">
          <Link href="https://drive.google.com/file/d/1N_ELLqUf-qxEPe9ovTT_SkbimfNaMQJX/view?usp=drivesdk">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black  dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Download Resume
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
