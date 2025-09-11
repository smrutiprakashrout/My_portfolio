"use client"
import { Roadmap } from "@/assets/images";
import stairsImage from "@/assets/images/bg/stairs.png";
const Quickabout = () => {
  return (
    <section id="project" className="pb-2 lg:py-10 relative z-0 overflow-x-clip">
        <div className="absolute inset-0 h-full w-[100vw] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-[0.02]"
          style={{
            backgroundImage: `url(${stairsImage.src})`,
          }}
        ></div>
      </div>
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text flex justify-center">
            How i work
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Working Process
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
          See how i transformed concepts into enging digital experinces.
        </p>
      </div>
      <div className="flex justify-center items-center lg:pt-20 md:pt-20 pt-12">
        <Roadmap className="lg:w-[62%] md:w-[55%] w-[90%] h-auto" />
      </div>
    </section>
  );
};

export default Quickabout;
