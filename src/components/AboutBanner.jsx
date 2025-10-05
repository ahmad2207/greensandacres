import React from "react";
import aboutBg from "../assets/images/about-bg.png";

const AboutBanner = () => {
  return (
    <section
      className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
        About Us
      </h1>
    </section>
  );
};

export default AboutBanner;
