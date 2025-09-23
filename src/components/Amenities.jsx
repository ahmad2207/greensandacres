import React from "react";
import {
  FaLock,
  FaRoad,
  FaVideo,
  FaSolarPanel,
  FaGasPump,
  FaToilet,
} from "react-icons/fa";

const Amenities = () => (
  <section id="whychooseus" className="py-16 px-6 max-w-6xl mx-auto">
    <p className="text-[#228B22] text-center font-bold mb-10">Why Choose Greens and Acres</p>
    <h2 className="text-3xl font-semibold text-center mb-10">
      We provide more than just land - we offer a secure, modern lifestyle with
      Premium Amenities
    </h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          icon: <FaLock className="text-[#228B22] text-4xl mx-auto mb-4" />,
          title: "Gated Community",
          desc: "Secured entry with professional estate management for your peace of mind.",
        },
        {
          icon: <FaRoad className="text-[#228B22] text-4xl mx-auto mb-4" />,
          title: "Well-Paved Roads",
          desc: "Smooth access within the estate with high-quality road infrastructure. ",
        },
        {
          icon: <FaVideo className="text-[#228B22] text-4xl mx-auto mb-4" />,
          title: "CCTV Surveillance",
          desc: "24/7 monitoring for security and safety throughout the community.",
        },
        {
          icon: (
            <FaSolarPanel className="text-[#228B22] text-4xl mx-auto mb-4" />
          ),
          title: "Solar Streetlights",
          desc: "Reliable, eco-friendly lighting across the entire estate.",
        },
        {
          icon: <FaGasPump className="text-[#228B22] text-4xl mx-auto mb-4" />,
          title: "Central Gas Outlet",
          desc: "Convenient gas supply for all your cooking and heating needs.",
        },
        {
          icon: <FaToilet className="text-[#228B22] text-4xl mx-auto mb-4" />,
          title: "Sewage System",
          desc: "Hygienic and well-structured waste management systems.",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg text-center"
        >
          {item.icon}
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Amenities;
