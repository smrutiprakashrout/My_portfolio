"use client"
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const memojiRef = useRef<HTMLImageElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const greetingRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const ringsRef = useRef<HTMLDivElement>(null);
  const orbitsRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register SplitText plugin
    gsap.registerPlugin(SplitText);
    
    const ctx = gsap.context(() => {
      // Check if all refs are available
      if (!backgroundRef.current || !ringsRef.current || !memojiRef.current || 
          !statusRef.current || !greetingRef.current || !titleRef.current || 
          !descriptionRef.current || !buttonsRef.current || !orbitsRef.current) {
        return;
      }

      // Split the title text into characters
      const titleSplit = new SplitText(titleRef.current, {
        type: "chars",
        charsClass: "title-char"
      });

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
      // Title character-by-character animation
      .from(titleSplit.chars, {
        opacity: 0,
        y: 50,
        rotationX: -90,
        transformOrigin: "50% 50% -50px",
        duration: 0.8,
        ease: "back.out(1.2)",
        stagger: {
          amount: 1.2,
          from: "start"
        }
      }, "-=0.4")
      // Description fade
      .from(descriptionRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.6")
      // Buttons entrance from different directions
      .from(buttonsRef.current.children[0], {
        opacity: 0,
        x: -100,
        y: 30,
        rotation: -10,
        scale: 0.8,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.4")
      .from(buttonsRef.current.children[1], {
        opacity: 0,
        x: 100,
        y: -30,
        rotation: 10,
        scale: 0.8,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.6")
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
      const statusGreenDot = statusRef.current.querySelector('.bg-green-500');
      if (statusGreenDot) {
        gsap.to(statusGreenDot, {
          scale: 1.1,
          duration: 2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: 4
        });
      }

      // Title characters hover effect
      titleSplit.chars.forEach((char: Element) => {
        char.addEventListener('mouseenter', () => {
          gsap.to(char, {
            scale: 1.2,
            color: "#10b981",
            duration: 0.3,
            ease: "power2.out"
          });
        });
        
        char.addEventListener('mouseleave', () => {
          gsap.to(char, {
            scale: 1,
            color: "inherit",
            duration: 0.3,
            ease: "power2.out"
          });
        });
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
        
        if (ringsRef.current) {
          gsap.set(ringsRef.current, {
            transform: `translateY(${rate}px)`
          });
        }
        
        if (orbitsRef.current) {
          gsap.set(orbitsRef.current, {
            transform: `translateY(${rate * 0.3}px)`
          });
        }
      };

      window.addEventListener('scroll', handleScroll);

      // Cleanup function
      return () => {
        window.removeEventListener('scroll', handleScroll);
        titleSplit.revert(); // Clean up SplitText
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
          <span ref={greetingRef} className="text-white/80 font-bold font-sans text-sm pt-2 w-full">
            👋🏻 Hey, I&apos;m Smruti, a Software and System Engineer based in India.
          </span>
        </div>
        
        <div className="max-w-lg mx-auto">
          <h1 ref={titleRef} className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            From Code to Cloud, I Deliver End-to-End <br/> Solutions
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