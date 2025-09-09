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
      <Shortstorry/>
      {/* ------ scrolling story page about myself ----- */}
      {/* ---------- about linux system admin -------- */}
      {/* ---------- devops tools oparations --------- */}
      {/* --------------- Full statck Software Developer --------- */}
      {/* ---------------- automations and workflow ----------- */}
      <ProjectsSection />
      <Quickabout />
      <AboutSection />
      <TapeSection />
      <TestimonialsSection />
      <Madewith />
      {/* ------------------- how its done -------------------- */}
      <ContactSection />
      <Footer />
    </div>
  );
}
