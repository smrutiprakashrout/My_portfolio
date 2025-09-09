import darkSaasLandingPage from "@/assets/images/—Pngtree—macbook pro 16_9011850.png";
import lightSaasLandingPage from "@/assets/images/weather.png";
import aiStartupLandingPage from "@/assets/images/photoport.png";
import { Result } from "postcss";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import Arrowup from "@/assets/icons/arrow-up-right.svg";
import GrainImage from "@/assets/images/grain.jpg";
// ----------------------------project-----------------------
import CrossBridge from "@/assets/images/projects/crossbridge.png"
import Nebulashade from "@/assets/images/projects/nebulashade.png";
import Lifehrsision from "@/assets/images/projects/lifehrfusion.png";
import Devnest from "@/assets/images/projects/devnest.png";
import Kernelhub from "@/assets/images/projects/kernelhub.png";
import Photography from "@/assets/images/projects/photography.png";
import Resturant from "@/assets/images/projects/resturant.png";

import Weather from "@/assets/images/projects/weather.png";
import { FaDownload } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


const portfolioProjects = [
  {
    name: "NebulaShade",
    year: "2025",
    title: "Dynamic Desktop Aesthetic Toolkit",
    results: [
      { title: "Enabled full desktop theming synced with wallpaper colors" },
      { title: "Reduced setup time by 60% with one-click theme restore" },
    ],
    link: "",
    image: Nebulashade,
    isapp: true,
    isweb: false,
    github: "https://github.com/smrutiofficial/Nebulashade",
  },
  {
    name: "Devnest",
    year: "2025",
    title: "One-Click Dev Workstation Setup",
    results: [
      { title: "Cut developer environment setup time from days to minutes" },
      {
        title:
          "Integrated essential tools, extensions, Apps and configs out-of-the-box",
      },
    ],
    link: "",
    image: Devnest,
    isapp: true,
    isweb: false,
    github: "https://github.com/smrutiofficial/Devnest",
  },
  {
    name: "CentralBridge",
    year: "2025",
    title: "System Continuity & Ecosystem",
    results: [
      { title: "Bridging Android and Linux into One Connected Ecosystem." },
      { title: "Your Airdrop, Continuity, and Device Sync — Reimagined for Linux." },
    ],
    link: "",
    image: CrossBridge,
    isapp: true,
    isweb: false,
    github: "",
  },
  {
    name: "LifeHrfusion",
    year: "2025",
    title: "Next-Gen Workforce Management",
    results: [
      {
        title:
          "Automated payroll and tax calculations, reducing manual work by 70%",
      },
      {
        title:
          "Improved employee self-service with real-time profile and leave updates",
      },
    ],
    link: "",
    image: Lifehrsision,
    isapp: false,
    isweb: true,
    github: "https://github.com/smrutiofficial/Life_HrFusion",
  },
  {
    name: "KernelHub",
    year: "2024",
    title: "Linux & Open Source News Platform",
    results: [
      {
        title:
          "Aggregated kernel, distro, and app updates in a unified dashboard",
      },
      { title: "Engaged 5K+ monthly readers from the open-source community" },
    ],
    link: "http://kernelhub.vercel.app/ ",
    image: Kernelhub,
    isapp: false,
    isweb: true,
    github: "https://github.com/smrutiofficial/Kernel_Hub",
  },
  {
    name: "Bhabyasight",
    year: "2024",
    title: "Photography Portfolio Website",
    results: [
      { title: "Enhanced visual presentation with responsive galleries" },
      { title: "Improved page load time by 50%" },
    ],
    link: "https://bhabyaphotography.vercel.app/",
    image: Photography,
    isapp: false,
    isweb: true,
    github: "https://github.com/smrutiofficial/photography",
  },
  {
    name: "Foodlane",
    year: "2023",
    title: "Smart Restaurant Management System",
    results: [
      { title: "Reduced order processing time by 45%" },
      { title: "Digitized kitchen workflows and improved analytics" },
    ],
    link: "https://food-lane-puce.vercel.app/",
    image: Resturant,
    isapp: false,
    isweb: true,
    github: "https://github.com/smrutiofficial/FoodLane",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="project" className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text flex justify-center">
            Real-World Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
          See how i transformed concepts into enging digital experinces.
        </p>
        <div className="flex flex-col md:mt-20 mt-10 gap-20">
          {/*  */}
          {portfolioProjects.map((project, projectIndex) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 after:pointer-events-none lg:pt-16 lg:px-20 sticky"
              style={{ top: `calc(64px + ${projectIndex * 35}px)` }}
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{ backgroundImage: `url(${GrainImage.src})` }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text gap-2">
                    <span>{project.name}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul>
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-base text-white/50 mt-4"
                      >
                        <CheckIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex fex-row justify-between overflow-hidden">
                    {project.isweb == true ?
                      <a href={project.link}>
                        <button className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-950 h-12 w-auto md:w-auto px-6 rounded-xl inline-flex items-center justify-center gap-2 mt-8">
                          <span className="lg:text-[1rem] md:text[1rem] text-[0.6rem]">View Webpage</span>
                          <Arrowup className="size-4" />
                        </button>
                      </a>
                      : <></>}
                    {project.isapp == true ?
                      <a href={project.link}>
                        <button className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-950 h-12 lg:w-full md:w-full w-full lg:px-6 md:px-6 px-4 rounded-xl inline-flex items-center justify-center gap-2 mt-8">
                          <span className="lg:text-[1rem] md:text[1rem] text-[0.6rem]">Download App</span>
                          <FaDownload className="size-4" />
                        </button>
                      </a>
                      : <></>}
                    <a href={project.github}>
                      <button className="bg-white text-gray-950 h-12 lg:w-full md:w-auto w-auto lg:px-6 md:px-6 px-4 rounded-xl inline-flex items-center justify-center gap-2 mt-8">
                        <FaGithub className="size-4" />
                        <span className="lg:text-[1rem] md:text[1rem] text-[0.6rem]">View Git Repo</span>
                      </button>
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:h-full lg:absolute lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          ))}

          {/*  */}
        </div>
      </div>
    </section>
  );
};
