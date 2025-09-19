"use client";
import darkSaasLandingPage from "@/assets/images/—Pngtree—macbook pro 16_9011850.png";
import lightSaasLandingPage from "@/assets/images/weather.png";
import aiStartupLandingPage from "@/assets/images/photoport.png";
import { Result } from "postcss";
import { useState } from "react";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import Arrowup from "@/assets/icons/arrow-up-right.svg";
import GrainImage from "@/assets/images/grain.jpg";

import codeImage from "@/assets/images/bg/crypto.png";
import Infoicon from "@/assets/icons/info-circle.svg";
// ----------------------------project-----------------------
import CrossBridge from "@/assets/images/projects/crossbridge.png";
import Nebulashade from "@/assets/images/projects/nebulashade.png";
import Lifehrsision from "@/assets/images/projects/lifehrfusion.png";
import Devnest from "@/assets/images/projects/devnest.png";
import Kernelhub from "@/assets/images/projects/kernelhub.png";
import Drlinux from "@/assets/images/projects/drlinux.png";
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
    techstack: "Flutter, Linux, Gnome, Bash, Ui/Ux Design, Python, VirtualBox, Algorithm",
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
    techstack: "Flutter, Linux, Gnome, Bash, Ui/Ux Design, VirtualBox",
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
      {
        title:
          "Your Airdrop, Continuity, and Device Sync — Reimagined for Linux.",
      },
    ],
    techstack: "Linux, Android, Flutter, Socket, Bash, TCP, MDNS, SSL/TLS, SSH",
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
    techstack: "Next.js, Express.js, Node.js, Ui/Ux, Mongodb, Docker, Nginx, Git, Github, Vercel",
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
    techstack: "Next.js, Next-Backend, Ui/Ux, Mongodb, Docker, Nginx, Git, Github, Vercel, Markdown",
    link: "http://kernelhub.vercel.app/ ",
    image: Kernelhub,
    isapp: false,
    isweb: true,
    github: "https://github.com/smrutiofficial/Kernel_Hub",
  },
  {
    name: "DR. Linux",
    year: "2024",
    title: "Linux App Management Software",
    results: [
      {
        title:
          "Enabled app installation, uninstallation, and updates via Flatpak and APT",
      },
      { title: "Integrated app search for quick discovery and management" },
    ],
    techstack: "Python, Tkinter, Bash, Linux, API",
    link: " ",
    image: Drlinux,
    isapp: true,
    isweb: false,
    github: "https://github.com/smrutiprakashrout/dr-linux",
  },
  {
    name: "Bhabyasight",
    year: "2024",
    title: "Photography Portfolio Website",
    results: [
      { title: "Enhanced visual presentation with responsive galleries" },
      { title: "Improved page load time by 50%" },
    ],
    techstack: "Html5, css3, JavaScript, Gsap, Gsap Scroll-Trigger",
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
    techstack: "Html5, css3, JavaScript",
    link: "https://food-lane-puce.vercel.app/",
    image: Resturant,
    isapp: false,
    isweb: true,
    github: "https://github.com/smrutiofficial/FoodLane",
  },
];

export const ProjectsSection = () => {
  // Use an object to track which project popup is open
  const [openPopup, setOpenPopup] = useState<number | null>(null);

  const handleOpenPopup = (projectIndex:number) => {
    setOpenPopup(projectIndex);
  };

  const handleClosePopup = () => {
    setOpenPopup(null);
  };

  return (
    // -------------- bg ----------------------------
    <section
      id="project"
      className="pb-16 lg:py-24 relative z-0 overflow-x-clip"
    >
      <div className="absolute inset-0 h-full w-[100vw] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${codeImage.src})`,
          }}
        ></div>
      </div>
      {/* ------------------------------------ */}
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
                  <div className="">
                    <div className="flex flex-row justify-between w-full tracking-widest  ">
                      <div className=" inline-flex gap-2 w-fit bg-gradient-to-r from-emerald-300 to-sky-400 font-bold uppercase text-sm text-transparent bg-clip-text">
                        <span>{project.name}</span>
                        <span>{project.year}</span>
                      </div>
                      <div className="w-fit">
                        {/* popup to open */}
                        <button onClick={() => handleOpenPopup(projectIndex)}>
                          <Infoicon className="size-8 cursor-pointer" />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* specific project's popup should be open */}
                  {openPopup === projectIndex && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                      <div className="bg-gray-800 p-12 rounded-2xl shadow-xl lg:w-[50vw] md:w-[50vw] w-[90vw] h-[50vh] relative">
                        <div
                          className="absolute inset-0 -z-1 opacity-5"
                          style={{ backgroundImage: `url(${GrainImage.src})` }}
                        ></div>
                        <button
                          onClick={handleClosePopup}
                          className="absolute top-3 right-3 text-red-600 m-6 text-4xl font-bold hover:text-black"
                        >
                          ✕
                        </button>
                        <h2 className="text-lg font-bold mb-2 text-white">
                          {project.name}
                        </h2>
                        <h3 className="text-md font-semibold mb-4 text-gray-400">
                          {project.title}
                        </h3>
                        <div className="text-white lg:flex lg:flex-col hidden">
                          <h4 className="font-semibold mb-2">Key Results:</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {project.results.map((result, index) => (
                              <li key={index} className="text-sm text-gray-400">
                                {result.title}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="">
                          <h4 className="font-semibold my-4">
                            Technology Used:
                          </h4>
                          <p className="text-gray-400">{project.techstack}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* ---------------------- */}
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
                    {project.isweb == true ? (
                      <a href={project.link}>
                        <button className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-950 h-12 w-auto md:w-auto px-6 rounded-xl inline-flex items-center justify-center gap-2 mt-8">
                          <span className="lg:text-[1rem] md:text[1rem] text-[0.6rem]">
                            View Webpage
                          </span>
                          <Arrowup className="size-4" />
                        </button>
                      </a>
                    ) : (
                      <></>
                    )}
                    {project.isapp == true ? (
                      <a href={project.link}>
                        <button className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-950 h-12 lg:w-full md:w-full w-full lg:px-6 md:px-6 px-4 rounded-xl inline-flex items-center justify-center gap-2 mt-8">
                          <span className="lg:text-[1rem] md:text[1rem] text-[0.6rem]">
                            Download App
                          </span>
                          <FaDownload className="size-4" />
                        </button>
                      </a>
                    ) : (
                      <></>
                    )}
                    <a href={project.github}>
                      <button className="bg-white text-gray-950 h-12 lg:w-full md:w-auto w-auto lg:px-6 md:px-6 px-4 rounded-xl inline-flex items-center justify-center gap-2 mt-8">
                        <FaGithub className="size-4" />
                        <span className="lg:text-[1rem] md:text[1rem] text-[0.6rem]">
                          View Git Repo
                        </span>
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
