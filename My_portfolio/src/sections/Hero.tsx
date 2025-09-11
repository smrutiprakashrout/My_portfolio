"use client"
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import codeImage from "@/assets/images/bg/crypto.png"
import StarIcon from "@/assets/icons/star.svg";
import HeroOrbit from "@/components/HeroOrbit";
import SpsrkleIcon from "@/assets/icons/sparkle.svg";
import Link from "next/link";

export const HeroSection = () => {
  const containerRef = useRef(null);
  const memojiRef = useRef(null);
  const statusRef = useRef(null);
  const greetingRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const ringsRef = useRef(null);
  const orbitsRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create master timeline
      const tl = gsap.timeline({ delay: 0.5 });

      // Background fade in
      tl.from(backgroundRef.current.children, {
        opacity: 0,
        duration: 2,
        ease: "power2.inOut"
      })

      // Rings dramatic entrance
      .from(ringsRef.current.children, {
        scale: 0,
        opacity: 0,
        rotation: -180,
        duration: 1.5,
        ease: "back.out(1.7)",
        stagger: {
          amount: 0.6,
          from: "center"
        }
      }, "-=1.5")

      // Memoji entrance with bounce
      .from(memojiRef.current, {
        opacity: 0,
        y: -100,
        scale: 0.5,
        rotation: -15,
        duration: 1.2,
        ease: "back.out(2.5)"
      }, "-=0.8")

      // Status badge slide in
      .from(statusRef.current, {
        opacity: 0,
        y: 30,
        scale: 0.8,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.3")

      // Greeting text
      .from(greetingRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.2")

      // Title dramatic reveal
      .from(titleRef.current, {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: "power4.out"
      }, "-=0.4")

      // Description fade
      .from(descriptionRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.6")

      // Buttons entrance
      .from(buttonsRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.4")

      // Orbits floating in
      .from(orbitsRef.current.children, {
        opacity: 0,
        scale: 0,
        rotation: -360,
        duration: 1.5,
        ease: "power2.out",
        stagger: {
          amount: 1.2,
          from: "random"
        }
      }, "-=1.5");

      // Continuous animations
      // Memoji subtle float
      gsap.to(memojiRef.current, {
        y: -10,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 3
      });

      // Status badge pulse
      gsap.to(statusRef.current.querySelector('.bg-green-500'), {
        scale: 1.1,
        duration: 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 4
      });

      // Buttons hover readiness
      const buttons = buttonsRef.current.children;
      Array.from(buttons).forEach(button => {
        button.addEventListener('mouseenter', () => {
          gsap.to(button, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        button.addEventListener('mouseleave', () => {
          gsap.to(button, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

      // Parallax effect on scroll
      const handleScroll = () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        gsap.set(ringsRef.current, {
          transform: `translateY(${rate}px)`
        });
        
        gsap.set(orbitsRef.current, {
          transform: `translateY(${rate * 0.3}px)`
        });
      };

      window.addEventListener('scroll', handleScroll);

      // Cleanup scroll listener
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div ref={backgroundRef}>
          <div
            className="absolute inset-0 -z-40 opacity-5"
            style={{
              backgroundImage: `url(${codeImage.src})`,
            }}
          ></div>
          <div
            className="absolute inset-0 -z-30 opacity-5"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
        </div>

        {/* rings  */}
        <div ref={ringsRef}>
          <div className="size-[620px] hero-ring"></div>
          <div className="size-[820px] hero-ring"></div>
          <div className="size-[1020px] hero-ring"></div>
          <div className="size-[1220px] hero-ring"></div>
        </div>

        <div ref={orbitsRef}>
          <HeroOrbit size={430} rotation={-15} shouldOrbit spinduration="30s">
            <SpsrkleIcon className="size-8 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit size={440} rotation={79} shouldOrbit spinduration="32s">
            <SpsrkleIcon className="size-5 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit size={520} rotation={-41} shouldOrbit spinduration="34s">
            <div className="size-2 rounded-full bg-emerald-300/20"></div>
          </HeroOrbit>
          <HeroOrbit size={530} rotation={178} shouldOrbit spinduration="36s">
            <SpsrkleIcon className="size-10 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit size={550} rotation={20} shouldOrbit spinduration="38s">
            <StarIcon className="size-12 text-emerald-300" />
          </HeroOrbit>
          <HeroOrbit size={590} rotation={98} shouldOrbit spinduration="40s">
            <StarIcon className="size-8 text-emerald-300" />
          </HeroOrbit>
          <HeroOrbit size={650} rotation={-5} shouldOrbit spinduration="42s">
            <div className="size-2 rounded-full bg-emerald-300/20"></div>
          </HeroOrbit>
          <HeroOrbit size={710} rotation={144} shouldOrbit spinduration="44s">
            <SpsrkleIcon className="size-14 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit size={720} rotation={85} shouldOrbit spinduration="46s">
            <div className="size-3 rounded-full bg-emerald-300/20"></div>
          </HeroOrbit>
          <HeroOrbit size={800} rotation={-72} shouldOrbit spinduration="48s">
            <StarIcon className="size-28 text-emerald-300" />
          </HeroOrbit>
        </div>
      </div>

      <div className="container sm: -mt-6">
        <div className="flex flex-col items-center">
          <Image ref={memojiRef} src={memojiImage} className="size-[100px]" alt=""></Image>
          <div ref={statusRef} className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className=" bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="text-center flex px-6 gap-3">
          <span ref={greetingRef} className="text-white/80 font-bold font-sans text-sm pt-2 w-full">👋🏻 Hey, I&apos;m Smruti, a Software and System Engineer based in India.</span>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 ref={titleRef} className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            From Code to Cloud, I Deliver End-to-End Solutions
          </h1>
          <p ref={descriptionRef} className="mt-4 text-center text-white/60 md:text-lg text-sm px-4">
            I build scalable, secure, and high-performance applications. From web to cross-platform apps, I deliver seamless user experiences. With DevOps & Linux expertise, I cut deployment time and boost reliability.
          </p>
        </div>
        <div ref={buttonsRef} className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl z-0">
            <span className="font-semibold cursor-pointer">
              <Link href="#project">Explore My work</Link>
            </span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-lg cursor-pointer z-0">
            <span>👇🏽</span>
            <span className="font-semibold">
              <Link href="./Smruti_Prakash_Rout_Resume.pdf">Download CV</Link>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};