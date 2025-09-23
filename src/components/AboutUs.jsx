import React from "react";
import aboutImg from "../assets/images/about-us.png";
import { FaCheckCircle } from "react-icons/fa";

const AboutUs = () => (
  <section
    id="aboutus"
    className="py-16 px-6 md:px-20 mx-auto grid md:grid-cols-2 gap-10 items-center bg-[#F0FDF4]"
  >
    <div className="flex justify-center md:justify-start">
      <img
        src={aboutImg}
        alt="About Us"
        className="rounded-2xl shadow-lg w-full max-w-[500px] h-auto object-cover"
      />
    </div>

    <div className="max-w-xl">
      <h2 className="text-3xl font-semibold mb-4">About Greens & Acres</h2>
      <p className="mb-6">
        We are a real estate development company focused on creating modern,
        secure, and sustainable communities. We specialize in selling land
        within well-planned estates where quality infrastructure and essential
        facilities are provided.
      </p>

      <ul className="space-y-3">
        {[
          "Modern and sustainable communities",
          "Quality infrastructure guaranteed",
          "Professional estate management",
        ].map((item, idx) => (
          <li key={idx} className="flex items-center gap-3">
            <FaCheckCircle className="text-[#228B22] text-lg flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default AboutUs;
