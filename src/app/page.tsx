import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Skills from "@/components/Skills";
import Testimonial_cards from "@/components/Testimonial_cards";
import Contact from '@/components/Contact'
import Aboutme from "@/components/Aboutme";
export default function Home() {
  return (
    <main className="min-h-screen  bg-black/[0.95] antialiased bg-grid-white/[0.02]">
         <HeroSection/>
         <Aboutme/> 
         <Features/>
         <Skills/>
         <Testimonial_cards/>
         <Contact/>
         <Footer/>
    </main>
  );
}
