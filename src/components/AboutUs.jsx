import React from "react";
import aboutImg from "../assets/images/project5.png";
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
      {/* <h2 className="text-3xl font-semibold mb-4">About Greens & Acres</h2> */}
      <p className="mb-6">
        Greens and Acres is a company focused on making land ownership accessible by
        offering serviced plots within modern, secure, and thoughtfully planned estates. We
        create communities that combine comfort, safety, and long-term value, with
        well-designed infrastructure and lifestyle amenities suited for families and investors
        alike.
        Beyond land sales, we also develop residential estates that integrate eco-friendly
        designs, modern amenities, and secure family-friendly environments, providing spaces
        that promote both comfort and sustainable living.
        With innovation, value, and sustainability at the core of our approach, Greens and
        Acres redefines real estate by offering distinctive investment opportunities that deliver
        long-term growth for our clients.
      </p>
    </div>
  </section>
);

export default AboutUs;
