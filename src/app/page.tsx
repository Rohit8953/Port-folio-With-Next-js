import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Skills from "@/components/Skills";
import Testimonial_cards from "@/components/Testimonial_cards";
import Contact from '@/components/Contact'
import Aboutme from "@/components/Aboutme";
// If the file is actually at "@/components/TimelineDemo", update the import as follows:
import { TimelineDemo } from "@/components/ExperienceTimeline/TimelineDemo";
import { BentoGridDemo } from "../components/companyProjects/BentoGridDemo";
import { TabsDemo } from "../components/personalProjects/TabsDemo"
export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black/[0.95] antialiased bg-grid-white/[0.02]">
         <HeroSection/>
         <Aboutme/> 
         <TimelineDemo />
         <BentoGridDemo />
         <TabsDemo />
         {/* <Features/> */}
         <Skills/>
         <Testimonial_cards/>
         <Contact/>
         <Footer/> 
    </main>
  );
}
