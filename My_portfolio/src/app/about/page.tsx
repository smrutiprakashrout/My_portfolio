import Link from "next/link"
import Selfpic from "../../assets/images/selfpngbg.jpg";
import LinkdinIcon from "../../assets/icons/LinkedIn.svg";
import Github from "../../assets/icons/github.svg";
import Arrowdown from "../../assets/icons/arrow-down.svg";
import { Header } from "@/sections/Header";
import Image from "next/image"
const About = () => {
  return (
    <div>
      <Header />
      {/* Image bg */}
      <div className="fixed -z-10 top-2 w-[40%] h-[100%] rounded-tr-full rounded-br-full overflow-hidden">
        <Image src={Selfpic} alt="" className="w-full h-full object-cover opacity-30 saturate-0 brightness-60 contrast-80" />
      </div>
      {/* ------------ */}
      <div className="flex flex-col justify-center items-center mt-[20%]">
        <div className="max-w-[50%]">
          <h2 className="font-bold text-4xl  bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">About [Smruti Prakash Rout]</h2>
          {/* a row to add linkdin,github,text[download my cv],buton to download */}
          <div className="flex flex-row gap-4 mt-4 items-center">
            <LinkdinIcon className="w-6 h-auto" />
            <Github className="w-6 h-auto" />
            <p className="">Download My</p>
            <button className="bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent  text-black py-2 px-4 rounded-md flex flex-row items-center gap-2 text-sm font-bold"><Link href="./Smruti_Prakash_Rout_Resume.pdf">Resume</Link>
              <Arrowdown className="w-3 h-3" /></button>
          </div>
          <p className="text-orange-400 pt-6 mix-blend-difference ">// he/him</p>
          <p className="text-orange-400 mix-blend-difference ">// From Asia, based in India,Odisha,Bhubaneswar</p>
          <p className="w-full pt-6 text-white">Software and System engineer with expetise in networkiing,Linux administation,fullstack web & crossplatform application development ,Devops & Virtualization Specialist.Enthusiastic about Linux desktop/server, music, coffee, and automation systems. Apart from that, I love teaching, mentorship, team management, and have excellent communication skills. </p>

          {/* experiance */}
          <div className=" pt-6 pb-2 w-full">
            <h2 className="text-xl font-bold bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">Experience</h2>
            <div className="flex flex-row justify-between">
              <ul>
                <p className="mt-4 text-orange-400 font-bold mix-blend-difference ">Feelanceing</p>
                <li className="text-gray-400 text-sm mt-2">@ Remote</li>
                <li>~ 2024-Present</li>
              </ul>

              <ul>
                <p className="mt-4 text-orange-400 font-bold mix-blend-difference ">Fullstack Software Delevoper</p>
                <li className="text-gray-400 text-sm mt-2">@ Congnifyz</li>
                <li>~ July 2024</li>
              </ul>
              <ul>
                <p className="mt-4 text-orange-400 font-bold mix-blend-difference ">Personal Projects</p>
                <li className="text-gray-400 text-sm mt-2">@ Work From Home</li>
                <li>~ 2021-Present</li>
              </ul>
            </div>
          </div>

          {/* main skills */}
          <h2 className="pt-6 pb-2 text-xl font-bold bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">Main Skills</h2>
          <div className="flex text-white flex-row justify-between">
            <ul>
              <p className="mb-4 text-orange-400 mix-blend-difference ">@ Languages</p>
              <li>Java</li>
              <li>Python</li>
              <li>Bash</li>
              <li>Javascript</li>
              <li>Dart</li>
              <li>Rust</li>
              <li>Swift</li>
              <li>Kotlin</li>
            </ul>
            <ul>
              <p className="mb-4 text-orange-400 mix-blend-difference ">@ Frameworks & Database</p>
              <li>React/next.js</li>
              <li>TailwindCss</li>
              <li>WebGl</li>
              <li>Three.js</li>
              <li>Gsap</li>
              <li>Framer motion</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Mongodb</li>
              <li>Mysql</li>
              <li>Postgress</li>
              <li>Dango</li>
              <li>Spring Boot</li>
            </ul>

            <ul>
              <p className="mb-4 text-orange-400 mix-blend-difference ">@ Devops</p>
              <li>Linux</li>
              <li>AWS</li>
              <li>Git</li>
              <li>Github</li>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>Jenkins</li>
              <li>CI/CD</li>
              <li>Teraform</li>
              <li>Asible</li>
              <li>Prometheus</li>
            </ul>

            <ul>
              <p className="mb-4 text-orange-400 mix-blend-difference">@ Networking</p>
              <li>TCP/IP</li>
              <li>DNS</li>
              <li>SSL/TLS</li>
              <li>DHCP</li>
              <li>VLANs</li>
              <li>Load Balancing</li>
              <li>Firewall Management</li>
              <li>Socket</li>
            </ul>
          </div>
        </div>
        {/* languages */}
        <div className=" pt-6 pb-2 w-[50%] ">
          <h2 className="text-xl font-bold bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">Languages</h2>
          <div className="flex flex-row justify-between">
            <ul>
              <p className="my-4 text-orange-400 mix-blend-difference">// Fluent</p>
              <li>English</li>
              <li>Hindi</li>
              <li>Odia</li>
            </ul>
            <ul>
              <p className="my-4 text-orange-400 mix-blend-difference">// Itermediate</p>
              <li></li>
            </ul>
            <ul>
              <p className="my-4 text-orange-400 mix-blend-difference">// Basic</p>
              <li></li>
            </ul>
          </div>

        </div>

        {/* tools for wrkflow */}
        <div className="pt-6 pb-2 w-[50%] ">
          <h2 className="text-xl font-bold bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">My Tools of Choice</h2>
          <div className="flex flex-row justify-between">
            <ul>
              <p className="my-4 text-orange-400 mix-blend-difference ">@ Developement</p>
              <li>Neovim</li>
              <li>Tmux</li>
              <li>Lazygit</li>
              <li>Lazydocker</li>
              <li>Mongodb-Compass</li>
            </ul>
            <ul>
              <p className="my-4 text-orange-400 mix-blend-difference ">@ Design</p>
              <li>Figma</li>
              <li>Gimp</li>
              <li>Inkscape</li>
              <li>Color Picker</li>
              <li>Kdenlive</li>
            </ul>
            <ul>
              <p className="my-4 text-orange-400 mix-blend-difference">@ Testing</p>
              <li>Insomnia</li>
              <li>Google Chorome</li>
              <li>Zen/Firefox</li>
              <li>Android Emulator</li>
              <li>Oracle Vertualbox</li>
            </ul>
            <ul>
              <p className="my-4 text-orange-400 mix-blend-difference ">@ Deploy</p>
              <li>AWS</li>
              <li>Vercel</li>
              <li>Hostinger</li>
              <li>Docker</li>
              <li>Kuberneties</li>
            </ul>
          </div>
          {/* aso busy with */}
          <div className=" pt-6 pb-52 ">
            <h2 className="bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-xl font-bold mb-4">Also Busy With</h2>
            <ul className="flex fex-row justify-between mb-28">
              <li>Pet my dog</li>
              <li>Games</li>
              <li>Movies/Series (Sci-fi)</li>
            </ul>
          </div>
        </div>
      </div>
    </div >
  )
}

export default About
