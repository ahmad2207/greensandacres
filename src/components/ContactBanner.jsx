import React from "react";
import contactBanner from "../assets/images/contact-banner.png";

const ContactBanner = () => {
  return (
    <section
      className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${contactBanner})` }}
    >
      <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
        Contact Us
      </h1>
    </section>
  );
};

export default ContactBanner;
