
import React from "react";
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";
import axios from "../../app/courses/axiom.png"
import verifynow from "../../app/courses/Verifynow.png"
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export function BentoGridDemo() {
  return (
    <div id="projects" className="w-full pt-12 ">
      <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 mb-2">
       Internship Projects
      </h2>
      <BentoGrid className="max-w-7xl mx-auto mt-8 px-5 ">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            link={item.urls}
            className={i === 1 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const Skeleton = ({image, urls}) => (
  // <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
   <Link href={urls} className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <Image
      src={image}
      alt="dummy image"
      // width="1000"
      // height="1000"
      // className="object-cover object-left-top h-[85%]  md:h-[85%] absolute -bottom-6 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
   </Link>
);

const items = [
  {
    title: "Axiom Protect 2.0",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton image={axios} urls="https://access.axiomprotect.com:6651/login" />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    
  },
  {
    title: "Veri5now",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton image={verifynow} urls="https://app.veri5now.com/login" />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    
  },
  {
    title: "Self Service Portal",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton image={axios} urls="https://ssp.axiomprotect.com:5354/login"/>,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    
  },
  // {
  //   title: "The Power of Communication",
  //   description:
  //     "Understand the impact of effective communication in our lives.",
  //   header: <Skeleton />,
  //   icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  // },
  // {
  //   title: "The Pursuit of Knowledge",
  //   description: "Join the quest for understanding and enlightenment.",
  //   header: <Skeleton />,
  //   icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  // },
  // {
  //   title: "The Joy of Creation",
  //   description: "Experience the thrill of bringing ideas to life.",
  //   header: <Skeleton />,
  //   icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  // },
  // {
  //   title: "The Spirit of Adventure",
  //   description: "Embark on exciting journeys and thrilling discoveries.",
  //   header: <Skeleton />,
  //   icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  // },
];
