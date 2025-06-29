"use client";
import React from "react";
import Image from "next/image";
import rohitKumar from "../app/courses/rohitKumar.png";
import Link from "next/link";
import { data3 } from "@/data/dataInfo";
import { BackgroundGradient } from "./ui/background-gradient";
import ProfileCard from '../components/ProfileCard'
import GlassIcons from './glassIcons/GlassIcons'
import { Icon } from '@iconify/react';
import { LinkPreviewDemo } from "../components/aboutSection/LinkPreviewDemo";
import GradientText from "../components/GradientText/GradientText"
import { BackgroundBeams } from "./ui/background-beams";
const items = [
  { icon: <Icon icon="circum:linkedin" width="32" height="32" />, 
    color: 'blue',
     label: 'Linkedin',
     urls: "https://linkedin.com/in/rohit-kumar-chaurasia-220742243" },
  { icon:  <Icon icon="hugeicons:github-01" width="32" height="32" />,
     color: 'purple',
      label: 'Github',
      urls: "https://github.com/Rohit8953",
    },
  { icon:  <Icon icon="pajamas:twitter" width="32" height="32" />, 
    color: 'indigo',
     label: 'Twitter',
      urls: "https://x.com/Rohitch82888068"
     },
  { icon:  <Icon icon="prime:instagram" width="32" height="32" />,
     color: 'red',
      label: 'Instagram',
      urls: "https://www.instagram.com/rohitchaurasia2452/"},
];

const Aboutme = () => {
  return (
    <section className="bg-black">
      <div className="container mx-auto py-16 px-0 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 sm:p-5">

          <div className="max-w-2xl">
            <h2 className="mb-5 -mt-5 text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
                About Me
            </h2>
        
            <LinkPreviewDemo />

            <GlassIcons items={items} className="custom-class"/>
          </div>
      
          <div className="mx-auto">
            <ProfileCard
              name="Rohit Chaurasia"
              title="Software Engineer"
              handle="rohitChaurasia"
              status="Online"
              contactText="Contact Me"
              avatarUrl="https://res.cloudinary.com/dti1g8mbd/image/upload/v1750357792/rqj8xrnpkyegt8vrw5fp.png"
              miniAvatarUrl="https://res.cloudinary.com/dti1g8mbd/image/upload/v1750357792/rqj8xrnpkyegt8vrw5fp.png"
              showUserInfo={true}
              enableTilt={true}
              behindGradient=""
              innerGradient=""  
              onContactClick={() => console.log('Contact clicked')}
            /> 
          </div>
        </div>
      </div>
    </section>
  );
};
export default Aboutme;
