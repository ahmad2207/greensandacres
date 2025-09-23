import React from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="h-16 w-auto pl-[60px]" />
      </div>
      <ul className="flex gap-6 text-gray-700 font-medium pr-[60px]">
        <li
          className="hover:text-[#228B22] cursor-pointer"
          onClick={() => handleScroll("home")}
        >
          Home
        </li>
        <li
          className="hover:text-[#228B22] cursor-pointer"
          onClick={() => handleScroll("whychooseus")}
        >
          Why Choose Us
        </li>
        <li
          className="hover:text-[#228B22] cursor-pointer"
          onClick={() => handleScroll("aboutus")}
        >
          About Us
        </li>
        <li
          className="hover:text-[#228B22] cursor-pointer"
          onClick={() => handleScroll("corevalues")}
        >
          Core Values
        </li>
      </ul>
      <button
        onClick={() => handleScroll("schedulevisit")}
        className="bg-[#228B22] text-white text-sm py-2 px-6 rounded mr-4"
      >
        Schedule a Visit
      </button>
    </nav>
  );
};

export default Navbar;
