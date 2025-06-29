"use client";

import { Tabs } from "../ui/tabs";
import ecommerce from "../../app/courses/ecommerce.png"
import Image from "next/image";
import bookManageApp from "../../app/courses/bookManageApp.png";
import FinanceTrackerApp from "../../app/courses/FinanceTrackerApp.png";
import calender from "../../app/courses/calender.png";
import community from "../../app/courses/community.png";
import dashboard from "../../app/courses/dashboard.png";
import digitalMarketing from "../../app/courses/digitalm.png"
import Link from "next/link";

export function TabsDemo() {
  const tabs = [
    {
      title: "Ecommerce",
      value: "product",
      tech: "Reactjs, Tailwind CSS, Node.js, MongoDB, expressjs",
      content: (
        <DummyContent
          heading="Full Stack Ecommerce"
          description="This project based on to show case the admin data in structured form for analysis"
          src={ecommerce}
          urls="https://full-fledget-ecommerce-com-6svy.vercel.app/"
         />
      ),
    },
    {
      title: "Finance Tracker",
      value: "Finance Tracker",
      content: (
        <DummyContent
          heading="Finance Tracker"
          description="This project based on to show case the admin data in structured form for analysis"
          src={FinanceTrackerApp}
          urls="https://finance-trackerapplication.vercel.app/"
         />
      ),
    },
    {
      title: "Book Management",
      value: "bookManageApp",
      content: (
        <DummyContent
          heading="Book Management"
          description="This project based on to show case the admin data in structured form for analysis"
          src={bookManageApp}
          urls="https://full-fledged-book-store.vercel.app/store"
         />
      ),
    },
    {
      title: "Calender",
      value: "calender",
      content: (
        <DummyContent
          heading="Calender"
          description="it is completely based on java script concept and reactjs functional concept"
          src={calender}
          urls="https://calender-assignment-ten.vercel.app/"
         />
      ),
    },
    {
      title: "Digital Marketing",
      value: "digitalMarketing",
      content: (
        <DummyContent
          heading="Digital Marketing"
          description="Optimized for seamless experience across all devices, including mobile, tablet, and desktop."
          src={digitalMarketing}
          urls="https://rohit8953.github.io/Internship-Webpages/"
         />
      ),
    },
    {
      title: "Conmmunity",
      value: "community",
      content: (
        <DummyContent
          heading="Community-webpage"
          description="Optimized for seamless experience across all devices, including mobile, tablet, and desktop."
          src={community}
          urls="https://community-webpage.vercel.app/"
         />
      ),
    },
    {
      title: "Dashboard",
      value: "dashboard",
      content: (
        <DummyContent
          heading="Dashboard"
          description="This project based on to show case the admin data in structured form for analysis"
          src={dashboard}
          urls="https://rohit8953.github.io/React-Dashboard/"
         />
      ),
    },
  ];

  return (
    <div className="h-[33rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-7xl mx-auto w-full px-4 md:px-6 items-start justify-start my-24">
      <h2 className="text-4xl font-bold mx-auto text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 mb-2">
         Personal Projects
      </h2>
      <Tabs tabs={tabs} />
    </div>
  );
}


function DummyContent ({ heading, description, src, urls }) {
  return (
     <div className="max-w-7xl mx-auto overflow-hidden relative h-full min-h-[400px] rounded-2xl pt-3 sm:pt-6 pl-6 sm:pl-8 md:pl-14 bg-gradient-to-br from-blue-500 to-cyan-500">
          <div className="flex justify-between items-center mr-6 sm:mr-10 md:mr-16 " >
            <p className="text-xl md:text-4xl font-bold text-white ">{heading}</p>
            <div className="flex justify-between items-center gap-1" >
                <div className="h-3 w-3 rounded-full animate-pulse bg-green-500 "></div> <span className="animate-pulse text-white" >Live</span>
            </div>
          </div>
          <p className="pr-4">{description}</p>
          <Link href={urls}>
            <Image
              src={src}
              alt="dummy image"
              width="1000"
              height="1000"
              className="object-cover object-left-top h-[80%]  md:h-[85%] absolute -bottom-8 sm:-bottom-6 inset-x-0 w-[90%] rounded-xl mx-auto"
            />
          </Link>
    </div>
  )
}
