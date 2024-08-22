"use client";
import React from "react";
import { data } from "../data/dataInfo";
import Image from "next/image";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

const Features = () => {
  return (
    <section id="projects" className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase"></h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            My Projects
          </p>
        </div>
      </div>
      <div className="mt-10 mx-4">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 justify-center">
          {data.map((course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] hover:brightness-105 transition-all duration-200 bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-screen-sm">
                <div>
                  <Image
                    src={course.image}
                    alt={course.title}
                 
                  />
                </div>
                <div className="p-2 flex flex-col items-center text-center bg-black flex-grow">
                  <p className="text-lg sm:text-xl text-black dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                  <Link
                    href={course.urls}
                    className="flex items-center px-3 p-1 my-1 text-neutral-400 bg-gray-700 group-hover:bg-opacity-40 rounded-md transition duration-300"
                  >
                    Click here
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features;
