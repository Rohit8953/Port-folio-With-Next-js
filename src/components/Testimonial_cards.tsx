"use client"
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonial = [
  {
    title: "MERN Stack Developer & Coder",
    name: "Bundelkhand Institute Of Engineering and Technology",
    marks: "",
    quote: "My objective is to create captivating and user-centric web experiences. With a strong focus on clean code and responsive design.",
  },
  {
    quote: "Developed an Alumni Association Portal to foster lifelong engagement by connecting alumni through directories, events, mentorship, career opportunities, and secure networking",
    name: "Smart India Hackethon",
    marks: "",
    title: "SIH-2024 Winner🏆",
  },,
  {
    quote: "I am working as a frontend developer, focusing on creating user-centric UIs and integrating APIs to enhance functionality and user experience in web applications at Blue Bricks Pvt. Ltd.",
    name: " Blue Bricks Pvt. Ltd.",
    marks: "",
    title: "Frontend Developer💻",
  },
  {
    quote: "Coordinating the Student Council of IT, a dynamic forum at B.I.E.T Jhansi, fostering innovation, collaboration, and student development.",
    name: "Student Council of Information Technology Branch",
    marks: "",
    title: "Coordinator",
  },
];

const musicSchoolTestimonials = [
  {
    title: "Bachelor's in Information Technology",
    name: "Bundelkhand Institute Of Engineering and Technology",
    marks: "CGPA 8.04/10",
    quote: "I am pursuing B.Tech from B.I.E.T Jhansi with Information Technology branch.",
  },
  {
    quote: "Completed intermediate education at a prestigious institution in Shahganj, Jaunpur, UP, known for academic excellence and discipline.",
    name: "St. Thomas Enter College Shahganj Jaunpur UP",
    marks: "Percentage 77.7%",
    title: "Intermediate",
  },
  {
    quote: "Completed high school at Kumudini UMV Harwa, Azamgarh, Uttar Pradesh, building a solid foundation in academic excellence.",
    name: "Kumudini UMV Harwa Azamgarh Uttar Pradesh.",
    marks: "Percentage 83.8%",
    title: "High-school",
  },
];

const Testimonial_cards = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-blue-950 relative py-20">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-16">
          Position of Responsibility
        </h2>
        
        <div className="w-full overflow-hidden mb-24">
          <div className="w-full max-w-7xl mx-auto">
            <InfiniteMovingCards
              items={musicSchoolTestimonial}
              direction="right"
              speed="slow"
            />
          </div>
        </div>

        <h2 className="text-center text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-16">
          Education Details
        </h2>
        
        <div className="w-full overflow-hidden">
          <div className="w-full max-w-7xl mx-auto">
            <InfiniteMovingCards
              items={musicSchoolTestimonials} 
              direction="left"
              speed="slow"
            />
          </div>
        </div>
      </div>

      {/* Add decorative elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
    </div>
  );
};

export default Testimonial_cards;
