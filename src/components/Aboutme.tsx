import React, { lazy } from "react";
import Image from "next/image";
import rohit from "../app/courses/rohit.jpg";
import Link from "next/link";
import { data3 } from "@/data/dataInfo";

const Aboutme = () => {
  return (
    <section className="bg-black mt-20">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white text-center sm:text-4xl">
              About me
            </h2>
            <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 ">
              As a web developer and coder, I specialize in crafting dynamic and
              functional websites and applications. Proficient in a variety of
              programming languages and frameworks, I create seamless user
              experiences while implementing innovative solutions. I
              continuously refine my skills to stay ahead in an ever-evolving
              digital landscape.
            </p>
            <div className="mt-8 flex flex-row gap-4">
              {data3.map((data, index) => {
                return (
                  <div key={index}>
                    <Link href={data.urls}>
                      <Image
                        src={data.icons}
                        className="w-10 hover:brightness-150 hover:scale-110 transition-all duration-200 "
                        alt="data"
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mx-auto ">
            <Image
              src={rohit}
           
              className="hover:border-2 rounded-2xl overflow-hidden bg-black border border-transparent dark:border-white/[0.7]  md:max-w-sm"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Aboutme;
