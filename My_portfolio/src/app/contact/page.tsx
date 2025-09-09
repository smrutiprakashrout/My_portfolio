import React from "react";
import Emailicon from "@/assets/icons/envelope.svg";
import Whatsicon from "@/assets/icons/whatsapp.svg";
import Mapicon from "@/assets/icons/map-marker.svg";
import GithubIcon from "@/assets/icons/github.svg";
import LinkedinIcon from "@/assets/icons/LinkedIn.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import YoutubeIcon from "@/assets/icons/youtube.svg";
import Link from "next/link";
import { Header } from "@/sections/Header";
const Contact = () => {
  type ContactItemProps = {
    icon: React.ReactNode;
    label: string;
    value: string;
  };

  function ContactItem({ icon, label, value }: ContactItemProps) {
    return (
      <div className="flex flex-row h-12 w-full">
        <div className="w-fit px-4 flex items-center justify-center rounded-lg bg-gray-800">
          {icon}
        </div>
        <div className="flex flex-col w-[80%] lg:ml-6 md:ml-6 ml-2">
          <div className="h-[50%] flex items-center text-gray-500 ">
            {label}
          </div>
          <div className="h-[50%] w-max flex items-center lg:text-lg md-text-lg text-sm">
            {value}
          </div>
        </div>
      </div>
    );
  }
  const contacts = [
    { icon: <Emailicon className="lg:w-8 md:w-6 w-6 h-auto"/>, label: "Email", value: "smrutiprakashrout3@gmail.com" },
    { icon: <Whatsicon className="lg:w-8 md:w-6 w-6 h-auto"/>, label: "Whatsapp", value: "+91 9861955265" },
    { icon: <Mapicon className="lg:w-8 md:w-6 w-6 h-auto"/>, label: "Location", value: "Bhubaneswar, India" },
  ];
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center lg:mt-[8%] md:mt-[8%] mt-[35%]">
        <div className="lg:max-w-[50%] md:max-w-[50%] max-w-[80%] flex flex-col justify-center items-center">
          <h2 className="font-bold lg:text-4xl md:text-4xl text-2xl  bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
            Hire Me
          </h2>
          <p className="text-center lg:w-[62%] md:w-[52%] w-42 mt-2 text-gray-400">
            Let’s turn ideas into reality by reach out, and let’s build
            something extraordinary together.
          </p>
          {/* --------------------- flex with contact and from ----------------------------- */}
        </div>

        <div className="flex lg:flex-row md:flex-row lg:gap-0 md:gap-0 gap-12 flex-col mt-12 lg:w-[70%] md:w-[70%] w-[90%] h-[60vh]">
          <div className="w-1/2 h-full">
            <h2 className="lg:w-full md:w-full w-[90vw] text-center font-bold my-6 mb-10">
              <p className="lg:text-3xl md:text-3xl text-md text-gray-400">Contact Information</p>
            </h2>
            <div className="flex flex-col gap-4 lg:mx-[10%] md:mx-[10%] mx-[2%] mt-[15%]">
              {contacts.map((item, index) => (
                <ContactItem key={index} {...item} />
              ))}
            </div>
            {/* ----------------- */}
            <div className="flex flex-col justify-center text-center lg:mt-[15%] md:mt-[15%] mt-[35%] lg:w-full md:w-full w-[90vw]">
             <p className="lg:text-md md:text:md text-xs text-gray-600">Connect With Me</p> 
              <div className="flex flex-row gap-4 mt-3 justify-center">
                <Link href="https://github.com/smrutiofficial"><GithubIcon className="w-4 h-auto text-white" /></Link>
                <Link href="https://www.linkedin.com/in/smrutiprakashrout/"><LinkedinIcon className="w-4 h-auto text-white" /></Link>
                <Link href="https://www.instagram.com/smruti_on_linux/"><InstagramIcon className="w-4 h-auto text-white" /></Link>
                <Link href="https://youtube.com/@smrutionlinux"><YoutubeIcon className="w-4 h-auto text-white" /></Link>
              </div>
            </div>
          </div>

          {/* ----------------- */}
          <div className="bg-gray-800 lg:mb-0 md:mb-0 lg:w-1/2 md:w-1/2 w-full lg:h-full md:h-full h-fit">
            <h2 className="bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text lg:text-4xl md:text-4xl text-xl lg:w-full md:w-full w-max mx-auto text-center font-bold my-6">
              Send a Massage
            </h2>

            <div className="flex flex-col justify-center items-center gap-6">
              <div className=" lg:w-[80%] md:w-[80%] w-[90%] flex flex-col gap-2 text-gray-500">
                <p>Your Full Name</p>
                <input
                  type="text"
                  className="bg-gray-700 rounded-md h-10 w-full"
                />
              </div>
              <div className=" lg:w-[80%] md:w-[80%] w-[90%] flex flex-col gap-2 text-gray-500">
                <p>Your Email Address</p>
                <input
                  type="email"
                  className="bg-gray-700 rounded-md h-10 w-full"
                />
              </div>
              <div className="lg:w-[80%] md:w-[80%] w-[90%] flex flex-col gap-2 text-gray-500">
                <p>Your Message</p>
                <textarea
                  className="bg-gray-700 rounded-md h-[8rem] w-full"
                />
              </div>
              <button className="lg:mb-0 md:mb-0 mb-12 bg-gradient-to-r from-emerald-300 to-sky-400 text-black lg:w-[80%] md:w-[80%] w-[90%] rounded-md lg:h-12 md:h-12 h-10">Send Message</button>
            </div>
            {/* --------------- */}
           
          </div>
           <p>.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
