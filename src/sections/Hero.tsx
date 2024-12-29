import Button from "@/components/Button";
import React from "react";
import starsBg from "@/assets/stars.png";

const Hero = () => {
  return (
    <>
      <section
        className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
        style={{ backgroundImage: `url(${starsBg.src})` }}
      >
        {/* --- Background Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>

        {/* --- Planet --- */}
        <div className="absolute h-64 w-64 md:h-96 md:w-96 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>

        {/* --- Rings --- */}
        {/* --- 1st ring --- */}
        <div className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
          {/* --- Ring Dots --- */}
          <div className="absolute h-2 w-2 bg-white left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
          <div className="absolute h-2 w-2 bg-white left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
          <div className="absolute h-5 w-5 border border-white left-full top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full inline-flex items-center justify-center">
            <div className="h-2 w-2 bg-white rounded full"></div>
          </div>
        </div>

        {/* --- 2nd ring --- */}
        <div className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"></div>

        {/* --- 3rd Ring --- */}
        <div className="absolute h-[544px] w-[544px] md:w-[980px] md:h-[980px] border border-white rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed opacity-20">
          <div className="absolute h-2 w-2 bg-white left-0 top-1/2 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute h-2 w-2 bg-white rounded-full left-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        {/* --- Hero Content --- */}
        <div className="container relative mt-16">
          <h1 className="text-8xl font-semibold tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] bg-white text-transparent bg-clip-text text-center md:text-[168px] md:leading-none">
            AI SEO
          </h1>
          <p className="text-lg md:text-xl text-white/70 mt-5 text-center mx-w-xl mx-auto">
            Elevate your site's visibility effortlessly with AI, where smart
            technology meets user-friendly SEO tools.
          </p>
          <div className="flex justify-center mt-5">
            <Button>Join waitlist</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
