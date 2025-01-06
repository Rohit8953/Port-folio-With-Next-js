"use client";
import React from "react";
import Image from "next/image";
import rohit from "../app/courses/rohit.jpg";
import Link from "next/link";
import { data3 } from "@/data/dataInfo";
import { BackgroundGradient } from "./ui/background-gradient";

const Aboutme = () => {
  return (
    <section className="bg-black mt-20">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 sm:p-5 p-2">
          <div className="max-w-2xl">
          <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 mb-2">
              About me
        </h2>
            <p className="mt-4 font-normal text-base md:text-lg text-neutral-300  text-justify">
            As the proud winner of <span className="text-cyan-400">SIH 2024</span>, I bring a proven track record of innovation and problem-solving to my work as a web developer and coder. I specialize in designing and developing dynamic, functional websites and applications, creating seamless user experiences with proficiency in a variety of programming languages and frameworks. Currently, I am working as a Frontend developer intern at <span className="text-cyan-400">Blue Bricks Pvt. Ltd.</span>, contributing to impactful projects. I am dedicated to continuously refining my skills and staying at the forefront of the ever-evolving digital landscape.
            </p>
            <div className="mt-8 flex flex-row gap-4 justify-center">
              {data3.map((data, index) => {
                return (
                  <div key={index} className="flex items-center justify-center">
                    <Link href={data.urls}>
                      <Image
                        src={data.icons}
                        className="w-10 hover:brightness-150 hover:scale-110 transition-all duration-200 rounded-full"
                        alt={data.name}
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mx-auto">
          <BackgroundGradient className="rounded-[22px] p-1 ">
            <Image
              src={rohit}
              className="hover:border-2 rounded-2xl overflow-hidden bg-black border border-transparent dark:border-white/[0.7] md:max-w-sm"
              alt="Rohit Kumar Chaurasia"
            />
             </BackgroundGradient>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Aboutme;
