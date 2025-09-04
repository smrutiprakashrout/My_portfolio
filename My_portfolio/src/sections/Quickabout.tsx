"use client"
import { Roadmap } from "@/assets/images";
const Quickabout = () => {
  return (
    <section id="project" className="pb-10 lg:py-10">
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
      <div className="flex justify-center items-center pt-28">
        <Roadmap className="w-[65%] h-auto" />
      </div>
    </section>
  );
};

export default Quickabout;
