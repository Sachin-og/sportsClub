import FeaturedSectin from "@/components/FeaturedSectin";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import OurInstructors from "@/components/OurInstructors";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebnars from "@/components/UpcomingWebnars";
import WhyChoseUs from "@/components/WhyChoseUs";


export default function Home() {
  return (
    <main className= "min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedSectin/>
      <WhyChoseUs/>
      <TestimonialCards/>
      <UpcomingWebnars/>
      <OurInstructors/>
      <Footer/>
    </main>
  );
}
