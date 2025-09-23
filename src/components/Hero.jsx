
import React from "react";
import heroBg from "../assets/images/hero-bg.png";

const Hero = () => (
  <section id="home"
    className="relative text-white bg-cover bg-center"
    style={{
      backgroundImage: `url(${heroBg})`,
      height: "813px", 
    }}
  >

    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0.15) 65%, rgba(0,0,0,0) 100%)",
      }}
      aria-hidden="true"
    />

    <div className="relative z-10 h-full flex items-center">
      <div className="max-w-2xl ml-8 md:ml-16">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
          Premium Serviced Plots in Secure Gated Estates
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          Experience modern living with fully developed estates featuring premium
          infrastructure, security, and sustainable amenities for long-term value.
        </p>
        <div className="flex gap-4">
          <button className="bg-[#228B22] text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-900">
            Explore Our Lands
          </button>
          <button className="bg-transparent border border-[#228B22] text-white px-6 py-3 rounded-lg shadow-md hover:bg-white hover:text-[#228B22]">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
