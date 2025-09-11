"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Sec_Header from "@/components/Sec_Header";

const StoryScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate each section with center-focused opacity
    sectionsRef.current.forEach((section, index) => {
      if (!section) return;

      const textElement = section.querySelector(".story-text") as HTMLElement;
      const pixelOverlay = section.querySelector(".pixel-overlay") as HTMLElement;

      // Set initial state
      gsap.set(textElement, {
        opacity: 0,
        y: 50,
        scale: 0.95,
        filter: "blur(8px)",
      });

      gsap.set(pixelOverlay, {
        opacity: 1,
        scale: 1.1,
      });

      // Create scroll-triggered animation with center focus
      ScrollTrigger.create({
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          // Calculate distance from center of viewport
          const progress = self.progress;
          const centerPoint = 0.5;
          const distanceFromCenter = Math.abs(progress - centerPoint);
          
          // Create opacity curve - maximum at center, fading toward edges
          const maxOpacity = 1;
          const opacity = Math.max(0, maxOpacity - (distanceFromCenter * 2));
          
          // Create scale curve - slightly larger at center
          const scale = 0.95 + (opacity * 0.15);
          
          // Create blur effect - clear at center, blurry at edges
          const blur = (1 - opacity) * 12;
          
          // Pixel effect - more pixelated when far from center
          const pixelOpacity = Math.max(0, distanceFromCenter * 2 - 0.3);
          const pixelScale = 1 + (distanceFromCenter * 0.3);

          gsap.set(textElement, {
            opacity: opacity,
            scale: scale,
            y: (distanceFromCenter * 100) - 50,
            filter: `blur(${blur}px)`,
            rotationX: (distanceFromCenter * 15),
          });

          gsap.set(pixelOverlay, {
            opacity: pixelOpacity,
            scale: pixelScale,
          });
        },
      });

      // Add glitch effect on scroll start/end
      ScrollTrigger.create({
        trigger: section,
        start: "center 90%",
        end: "center 10%",
        onEnter: () => {
          gsap.to(textElement, {
            duration: 0.1,
            repeat: 3,
            yoyo: true,
            x: "random(-5, 5)",
            ease: "power2.inOut",
          });
        },
        onLeave: () => {
          gsap.to(textElement, {
            duration: 0.1,
            repeat: 2,
            yoyo: true,
            x: "random(-3, 3)",
            skewX: "random(-2, 2)",
            ease: "power2.inOut",
          });
        },
      });
    });

    // Cinematic Background Animations
    const tl = gsap.timeline({ repeat: -1 });

    // Energy Orb Animations
    tl.to(".energy-orb-1", {
      x: 200,
      y: -100,
      rotation: 360,
      scale: 1.3,
      duration: 20,
      ease: "sine.inOut",
    }, 0)
    .to(".energy-orb-1", {
      x: -50,
      y: 50,
      rotation: 720,
      scale: 0.8,
      duration: 20,
      ease: "sine.inOut",
    }, 20);

    gsap.to(".energy-orb-2", {
      x: -150,
      y: 200,
      rotation: -180,
      scale: 0.8,
      duration: 25,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(".energy-orb-3", {
      x: 100,
      y: -150,
      rotation: 180,
      scale: 1.1,
      duration: 15,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Particle animations
    gsap.to(".floating-particle", {
      y: "random(-200, 200)",
      x: "random(-100, 100)",
      rotation: "random(0, 360)",
      duration: "random(10, 20)",
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: {
        each: 0.1,
        from: "random",
      },
    });

    // Code fragment animations
    gsap.to(".code-fragment", {
      y: "random(-50, 50)",
      x: "random(-30, 30)",
      rotation: "random(-5, 5)",
      duration: "random(8, 15)",
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: {
        each: 2,
        from: "random",
      },
    });

    // Main parallax effect
    gsap.to(".cinematic-bg", {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const storyTexts = [
    "I started my journey with the basics — HTML and CSS — curious about how the web works.",
    "Soon, I discovered the world of interactivity with JavaScript.",
    "While most followed the mainstream, I chose Linux — not just an OS, but a philosophy of freedom.",
    "Linux reshaped my workflow, taught me discipline, and gave me full control of my development environment.",
    "Every command-line keystroke became a superpower.",
    "From simple static pages, I dived into React and Next.js, building scalable frontends.",
    "Mobile? React Native and Flutter helped me bring ideas into people's hands.",
    "The backend opened another world — Node.js, Express, Django, SQL, MongoDB, PostgreSQL.",
    "I learned not just to build software, but to deploy, scale, and monitor it.",
    "Docker, Kubernetes, CI/CD pipelines — I embraced DevOps to deliver faster and smarter.",
    "Automation became my obsession — if I can script it, I will.",
    "Open-source tools and CLI workflows are my creative playground.",
    "Open-source apps became my true companions — lightweight, powerful, and limitless.",
    "The terminal is my canvas, and tools like tmux, Neovim, Lazygit, and Lazydocker are my brushes.",
    "They save me hours, streamline my workflow, and create a seamless development experience.",
    "My appreciation for Linux grew stronger with each command I mastered.",
    "It made me feel extraordinary — like stepping out of the crowd with a superpower.",
    "From idea to execution, I can move with super speed.",
    "I explored UI/UX design to make my projects not just functional, but delightful.",
    "Illustrations, Blender 3D, and Three.js let me merge creativity with technology.",
    "I am not just a developer. I am a builder of open, scalable, and creative digital experiences.",
    "And this is only the beginning of my story.",
  ];

  const codeFragments = [
    'const future = await code();',
    '#!/bin/bash',
    'docker run -d --name app',
    'git commit -m "breakthrough"',
    'npm run build',
    'kubectl apply -f deployment.yaml',
    'SELECT * FROM dreams;',
    'import { magic } from "reality";',
  ];

  return (
    <div className="h-full relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="cinematic-bg absolute inset-0">
        
        {/* Energy Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="energy-orb-1 absolute w-96 h-96 rounded-full opacity-30 mix-blend-screen filter blur-3xl"
            style={{
              background: 'radial-gradient(circle, #3b82f6 0%, #8b5cf6 50%, transparent 70%)',
              left: '10%',
              top: '20%',
            }}
          />
          <div 
            className="energy-orb-2 absolute w-[500px] h-[500px] rounded-full opacity-25 mix-blend-screen filter blur-3xl"
            style={{
              background: 'radial-gradient(circle, #ec4899 0%, #06b6d4 50%, transparent 70%)',
              right: '5%',
              top: '40%',
            }}
          />
          <div 
            className="energy-orb-3 absolute w-80 h-80 rounded-full opacity-35 mix-blend-screen filter blur-3xl"
            style={{
              background: 'radial-gradient(circle, #10b981 0%, #f59e0b 50%, transparent 70%)',
              left: '50%',
              bottom: '10%',
            }}
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={`particle-${i}`}
              className="floating-particle absolute bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
              style={{
                width: `${1 + Math.random() * 3}px`,
                height: `${1 + Math.random() * 3}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5 h-[150%]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Code Fragments */}
        <div className="absolute inset-0 overflow-hidden">
          {codeFragments.map((code, i) => (
            <div
              key={`code-${i}`}
              className="code-fragment absolute text-emerald-400 font-mono text-sm opacity-20 whitespace-nowrap pointer-events-none"
              style={{
                left: `${Math.random() * 80}%`,
                top: `${Math.random() * 80 + 10}%`,
                transform: `rotate(${Math.random() * 20 - 10}deg)`,
              }}
            >
              {code}
            </div>
          ))}
        </div>

        {/* Animated Lines */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`line-${i}`}
              className="absolute bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-20 h-px"
              style={{
                width: `${200 + Math.random() * 400}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 180}deg)`,
                animation: `lineGlow ${3 + Math.random() * 4}s ease-in-out infinite alternate`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

      </div>

      {/* Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30"
          style={{
            animation: 'scanline 4s linear infinite',
          }}
        />
      </div>

      <div ref={containerRef} className="relative z-10 py-20">
        {/* Header */}
        <div className="py-20 lg:py-28">
          <div className="container">
            <Sec_Header
              eyebrow="From the Beginning"
              title="My Journey"
              description="Journeys aren't built overnight — mine grew from small experiments into a lifelong pursuit of building."
            />
          </div>
        </div>

        {/* Story Sections */}
        <div className="max-w-6xl mx-auto px-6">
          {storyTexts.map((text, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="story-section min-h-screen flex items-center justify-center relative"
            >
              {/* Pixel Overlay Effect */}
              <div className="pixel-overlay absolute inset-0 pointer-events-none">
                <div 
                  className="absolute inset-0 opacity-0"
                  style={{
                    background: `
                      repeating-linear-gradient(
                        90deg,
                        transparent,
                        transparent 2px,
                        rgba(0, 255, 255, 0.1) 2px,
                        rgba(0, 255, 255, 0.1) 4px
                      ),
                      repeating-linear-gradient(
                        0deg,
                        transparent,
                        transparent 2px,
                        rgba(255, 0, 255, 0.1) 2px,
                        rgba(255, 0, 255, 0.1) 4px
                      )
                    `,
                  }}
                />
              </div>

              {/* Glitch Lines */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0"
                    style={{
                      top: `${20 + i * 30}%`,
                      animation: `glitchLine ${2 + i}s ease-in-out infinite`,
                      animationDelay: `${i * 0.5}s`,
                    }}
                  />
                ))}
              </div>

              <p className="story-text text-3xl md:text-5xl lg:text-6xl font-bold text-center leading-tight bg-gradient-to-r from-emerald-200 via-emerald-400 to-sky-200 bg-clip-text text-transparent max-w-5xl italic relative">
                &quot;{text}&quot;
                
                {/* Text Glow Effect */}
                <span 
                  className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-emerald-500 to-sky-400 bg-clip-text text-transparent opacity-0 blur-sm pointer-events-none"
                  aria-hidden="true"
                >
                  &quot;{text}&quot;
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scanline {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
        
        @keyframes glitchLine {
          0%, 90%, 100% { 
            opacity: 0; 
            transform: translateX(-100%);
          }
          5%, 85% { 
            opacity: 0.7; 
            transform: translateX(100%);
          }
        }

        @keyframes lineGlow {
          0% { 
            opacity: 0.1;
            transform: translateX(-50px) rotate(var(--rotation));
          }
          50% {
            opacity: 0.6;
          }
          100% { 
            opacity: 0.1;
            transform: translateX(50px) rotate(var(--rotation));
          }
        }
        
        .story-text {
          opacity:1;
        }

        .code-fragment {
          text-shadow: 0 0 10px rgba(6, 182, 212, 0.6);
        }

        .energy-orb-1, .energy-orb-2, .energy-orb-3 {
          filter: blur(40px) brightness(1.2);
        }
      `}</style>
    </div>
  );
};

export default StoryScroll;