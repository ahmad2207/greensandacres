// import React, { useState } from "react";
// import logo from "../assets/images/logo.png";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleScroll = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//       setMenuOpen(false); // close mobile menu
//     }
//   };

//   return (
//     <nav className="bg-white shadow px-6 py-4 flex justify-between items-center sticky top-0 z-50">
//       <div className="flex items-center gap-3">
//         <img src={logo} alt="Logo" className="h-12 w-auto" />
//       </div>
//       <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
//         <li
//           onClick={() => handleScroll("home")}
//           className="hover:text-[#228B22] cursor-pointer"
//         >
//           Home
//         </li>
//         <li
//           onClick={() => handleScroll("whychooseus")}
//           className="hover:text-[#228B22] cursor-pointer"
//         >
//           Why Choose Us
//         </li>
//         <li
//           onClick={() => handleScroll("aboutus")}
//           className="hover:text-[#228B22] cursor-pointer"
//         >
//           About Us
//         </li>
//         <li
//           onClick={() => handleScroll("corevalues")}
//           className="hover:text-[#228B22] cursor-pointer"
//         >
//           Core Values
//         </li>
//       </ul>

//       {/* CTA */}
//       <button
//         onClick={() => window.location.href = "/projects"}
//         className="hidden md:block bg-[#556B2F] text-white text-sm py-2 px-6 rounded"
//       >
//         View our Projects
//       </button>

//       <div className="md:hidden">
//         <button onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
//         </button>
//       </div>
//       {menuOpen && (
//         <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-6 space-y-4 md:hidden z-40">
//           <button
//             onClick={() => handleScroll("home")}
//             className="hover:text-[#228B22]"
//           >
//             Home
//           </button>
//           <button
//             onClick={() => handleScroll("whychooseus")}
//             className="hover:text-[#228B22]"
//           >
//             Why Choose Us
//           </button>
//           <button
//             onClick={() => handleScroll("aboutus")}
//             className="hover:text-[#228B22]"
//           >
//             About Us
//           </button>
//           <button
//             onClick={() => handleScroll("corevalues")}
//             className="hover:text-[#228B22]"
//           >
//             Core Values
//           </button>
//           <button
//             onClick={() => handleScroll("schedulevisit")}
//             className="bg-[#228B22] text-white text-sm py-2 px-6 rounded"
//           >
//             Schedule a Visit
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
        <li>
          <Link to="/" className="hover:text-[#556B2F]">
            Home
          </Link>
        </li>
        <li>
          <Link to="/aboutus" className="hover:text-[#556B2F]">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-[#556B2F]">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-[#556B2F]">
            Contact
          </Link>
        </li>
      </ul>

      {/* Desktop CTA */}
      <Link
        to="/projects"
        className="hidden md:block bg-[#556B2F] text-white text-sm py-2 px-6 rounded"
      >
        View Our Projects
      </Link>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-6 space-y-4 md:hidden z-40">
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-[#556B2F]">
            Home
          </Link>
          <Link to="/aboutus" onClick={() => setMenuOpen(false)} className="hover:text-[#556B2F]">
            About Us
          </Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)} className="hover:text-[#556B2F]">
            Projects
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-[#556B2F]">
            Contact
          </Link>
          <Link
            to="/projects"
            onClick={() => setMenuOpen(false)}
            className="bg-[#556B2F] text-white text-sm py-2 px-6 rounded"
          >
            View Our Projects
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
