import React from "react";

const Quickabout = () => {
  return (
    <section id="project" className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text flex justify-center">
            Who am i
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Quick info about me
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
          See how i transformed concepts into enging digital experinces.
        </p>
      </div>
    </section>
  );
};

export default Quickabout;
