import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { Footer } from "@/sections/Footer";
import { ContactSection } from "@/sections/Contact";
import Quickabout from "@/sections/Quickabout";
import Madewith from "@/sections/Madewith";
import Shortstorry from "@/sections/Shortstorry";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      {/* how i work */}
      <Quickabout />
      <Shortstorry />

      <TapeSection />
      <TestimonialsSection />
      <Madewith />
      {/* ------------------- how its done -------------------- */}
      <ContactSection />
      <Footer />
    </div>
  );
}
