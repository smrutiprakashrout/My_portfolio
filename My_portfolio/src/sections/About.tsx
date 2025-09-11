"use client";
import Sec_Header from "@/components/Sec_Header";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import BookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import { useRef } from "react";

import JavascriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";
import pixcelImage from "@/assets/images/bg/pixels.png";
import MapImage from "@/assets/images/map.jpg";
import SmileImage from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/ToolboxItem";
import { motion } from "framer-motion";
import Linux from "@/assets/images/linuxp.svg";
import {
  Bash,
  NodeJs,
  Rust,
  Kotlin,
  Dart,
  TailwindCSS,
  MongoDB,
  Flutter,
  PostgresSQL,
  Swift,
  ArchLinux,
  AWS,
  Docker,
  Kubernetes,
  Jenkins,
  Ansible,
  Terraform,
  Prometheus,
} from "../assets/icons/index.js";
const toolboxItems = [
  {
    title: "Bash",
    IconType: Bash,
  },
  {
    title: "Node.js",
    IconType: NodeJs,
  },
  {
    title: "Rust",
    IconType: Rust,
  },
  {
    title: "Kotlin",
    IconType: Kotlin,
  },
  {
    title: "Dart",
    IconType: Dart,
  },
  {
    title: "Tailwind",
    IconType: TailwindCSS,
  },
  {
    title: "Mongodb",
    IconType: MongoDB,
  },
  {
    title: "Flutter",
    IconType: Flutter,
  },
  {
    title: "Sql",
    IconType: PostgresSQL,
  },
  {
    title: "SwiftUI",
    IconType: Swift,
  },
  {
    title: "Linux",
    IconType: ArchLinux,
  },
  {
    title: "AWS",
    IconType: AWS,
  },
  {
    title: "Docker",
    IconType: Docker,
  },
  {
    title: "Kubernetes",
    IconType: Kubernetes,
  },
  {
    title: "Jenkins",
    IconType: Jenkins,
  },
  {
    title: "Teraform",
    IconType: Terraform,
  },
  {
    title: "Ansible",
    IconType: Ansible,
  },
  {
    title: "Prometheus",
    IconType: Prometheus,
  },
  {
    title: "JavaScript",
    IconType: JavascriptIcon,
  },
  {
    title: "React",
    IconType: ReactIcon,
  },
  {
    title: "Github",
    IconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Painting",
    icon: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    icon: "📷",
    left: "50%",
    top: "5%",
  },
  {
    title: "Hiking",
    icon: "👢",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gaming",
    icon: "🎮",
    left: "10%",
    top: "35%",
  },

  {
    title: "Music",
    icon: "🎹",
    left: "70%",
    top: "45%",
  },
  {
    title: "Fitness",
    icon: "🏋🏻",
    left: "5%",
    top: "65%",
  },
  {
    title: "reading",
    icon: "📚",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    // -------------- bg ----------------------------
    <div className="py-20 lg:py-28 h-full relative z-0 overflow-x-clip">
      <div className="absolute inset-0 h-full w-[100vw] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${pixcelImage.src})`,
          }}
        ></div>
      </div>
      {/* ------------------------------------ */}
      <div className="container">
        <Sec_Header
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what i do, what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px]  md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Workflow"
                description="Explore the OS shaping my perpectives."
              />

              <div className="animate-[lowbounce_6s_infinite] mx-auto mt-0 md:mt-0">
                <Linux className=" scale-[0.3] lg:-translate-y-[6rem] md:-translate-y-[6rem] -translate-y-[4rem]"/>
                {/* <Image src={BookImage} alt="" className="" /> */}
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <div>
                <CardHeader
                  title="My Toolbox"
                  description=" Explore the technologies and tools I use to craft exceptional
                digital experinces."
                  className=""
                />
              </div>

              <ToolBoxItems
                items={toolboxItems}
                className=""
                itemWrapperClassName="animate-move-left [animation-duration:70s]"
              />
              <ToolBoxItems
                items={toolboxItems}
                className="mt-6"
                itemWrapperClassName=" -translate-x-1/2 animate-move-right [animation-duration:120s]"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <div>
                <CardHeader
                  title="Beyond the Code"
                  description="Explore my interests and hobbies beyond the digital relem."
                  className="px-6 py-6"
                />
              </div>
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{ left: hobby.left, top: hobby.top }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.icon}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={MapImage}
                alt=""
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image src={SmileImage} alt="" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
