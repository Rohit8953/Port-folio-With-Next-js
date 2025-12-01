"use client";;
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

export function LinkPreviewDemo() {
    // As the proud winner of <span className="text-cyan-400">SIH 2024</span>, 
    // I bring a proven track record of innovation and problem-solving to my work as a web developer and coder. 
    // I specialize in designing and developing dynamic, functional websites and applications, creating seamless user experiences
    //  with proficiency in a variety of programming languages and frameworks. Currently, I am working as a Frontend developer 
    // intern at <span className="text-cyan-400">Blue Bricks Pvt. Ltd.</span>, contributing to impactful projects.
    //  I am dedicated to continuously refining my skills and staying at the forefront of the ever-evolving digital landscape.
  return (
    <div className="flex justify-center items-center flex-col">
      <p
        className="text-neutral-500 dark:text-neutral-400 text-xl md:text-2xl mx-auto mb-10 text-justify">
        As the proud winner of{" "}
        <LinkPreview url="https://www.linkedin.com/feed/update/urn:li:activity:7274120077833039873/" className="font-bold">
          SIH 2024
        </LinkPreview>{" "}
        I bring a proven track record of innovation and problem-solving to my work as a web developer and coder.
        I specialize in designing and developing dynamic, functional websites and applications, creating seamless user experiences
        with proficiency in a variety of programming languages and frameworks. I have worked at {" "}
        <LinkPreview url="https://blue-bricks.com/" className="font-bold">
          Blue Bricks
        </LinkPreview>
        {" "} and {" "}
        <LinkPreview url="https://m-swasth.in/" className="font-bold">
          M Swasth
        </LinkPreview>
        {/* {" "} company. */}
      </p>
      {/* <p
        className="text-neutral-500 dark:text-neutral-400 text-xl md:text-2xl max-w-3xl mx-auto">
        Visit{" "}
        <LinkPreview
          url="https://ui.aceternity.com"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500">
          Aceternity UI
        </LinkPreview>{" "}
        for amazing Tailwind and Framer Motion components.
      </p> */}
    </div>
  );
}
