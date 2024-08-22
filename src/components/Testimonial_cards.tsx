"use client"
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonial = [
  {
    title: "Mearn stack developer & Coder",
    name: "Bundelkhand Institute Of Engineering and Technology",
    marks:"",
    quote:"My objective is to create captivating and user-centric web experiences. With a strong focus on clean code and responsive design.",
  },
  {
    quote:
      "The Syntax Society is a coding club at B.I.E.T Jhansi, fostering innovation, collaboration, and coding excellence among students",
    name: "The Syntax Society",
    marks:"",
    title: "Coordinator",
  },
  {
    quote:
      "Coordinating the Student Council of IT, a dynamic forum at B.I.E.T Jhansi, fostering innovation, collaboration, and student development.",
    name: "Student Councile of Information Technology branch",
    marks:"",
    title: "Coordinator",
  },
];
const musicSchoolTestimonials = [
  {
    title: "Bachelor's in Information Technology",
    name: "Bundelkhand Institute Of Engineering and Technology",
    marks:"CGPA 8.04/10",
    quote:"I am pursuing B.Tech from B.I.E.T Jhansi with Information Technology branch.",
  },
  {
    quote:"Completed intermediate education at a prestigious institution in Shahganj, Jaunpur, UP, known for academic excellence and discipline.",
    name: "St. Thomas Enter College Shahganj Jaunpur UP",
    marks:"Percentage 77.7%",
    title: "Intermediate",
  },
  {
    quote:"Completed high school at Kumudini UMV Harwa, Azamgarh, Uttar Pradesh, building a solid foundation in academic excellence.",
    name: "Kumudini UMV Harwa Azamgarh Uttar Pradesh.",
    marks:"percentage 83.8%",
    title: "High-school",
  },
];
const Testimonial_cards = () => {
  return (
    <div className="h-full pb-10 w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="mt-10 text-center text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
        Position of Responsibility
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-0 sm:px-6 lg:px-8">
        <div className="w-full max-w-8xl">
          <InfiniteMovingCards
            items={musicSchoolTestimonial}
            direction="right"
            speed="slow"
          />
        </div>
      </div> 
      <h2 className="mt-10 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
        Education details
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-0 sm:px-6 lg:px-8">
        <div className="w-full max-w-8xl">
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="left"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial_cards;
