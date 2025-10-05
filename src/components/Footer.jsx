// import React from "react";
// import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

// const Footer = () => (
//   <footer className="bg-[#556B2F] text-gray-100 pt-16 pb-8 px-6">
//     <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
//       <div>
//         <h2 className="text-3xl pb-4 text-white">Greens & Acres</h2>
//         <p className="max-w-xs">
//           Creating sustainable communities where natural beauty meets modern
//           living.
//         </p>
//       </div>
//       <div>
//         <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
//         <ul className="space-y-2">
//           {["Home", "About Us", "Projects", "Contact"].map((link, idx) => (
//             <li
//               key={idx}
//               className="hover:text-black cursor-pointer transition-colors"
//             >
//               {link}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Contact Info */}
//       <div>
//         <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
//         <p className="mb-2">info@greensandacres.com</p>
//         <p>(+234) 808 687 2610</p>
//       </div>
//       <div>
//         <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
//         <div className="flex gap-4">
//           <FaFacebookF className="text-xl hover:text-black cursor-pointer" />
//           <FaTwitter className="text-xl hover:text-black cursor-pointer" />
//           <FaInstagram className="text-xl hover:text-black cursor-pointer" />
//         </div>
//       </div>
//     </div>

//     {/* Divider */}
//     <div className="border-t border-gray-200 mt-12 pt-6 text-center text-sm">
//       © 2025 Greens & Acres. All rights reserved.
//     </div>
//   </footer>
// );

// export default Footer;

import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-[#556B2F] text-gray-100 pt-16 pb-8 px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
      {/* Brand / Intro */}
      <div>
        <h2 className="text-3xl pb-4 text-white">Greens & Acres</h2>
        <p className="max-w-xs text-gray-100 leading-relaxed">
          Creating sustainable communities where natural beauty meets modern
          living.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
        <ul className="space-y-2">
          {["Home", "About Us", "Projects", "Contact"].map((link, idx) => (
            <li
              key={idx}
              className="hover:text-black cursor-pointer transition-colors"
            >
              {link}
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
        <p className="mb-2">info@greensandacres.com</p>
        <p>(+234) 808 687 2610</p>
      </div>

      {/* Social Links */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
        <div className="flex gap-5">
          <a
            href="https://www.facebook.com/share/1Fi5vYTQLD/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-xl hover:text-black transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://x.com/greensandarces?s=21&t=mPqQLCp4hKtgNtHkV0Gn-Q"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-xl hover:text-black transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/greensandacresofficial?igsh=MXVjMnllY2ZjNnRqeA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-xl hover:text-black transition"
          >
            <FaInstagram />
          </a>
          {/* <a
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-xl hover:text-black transition"
          >
            <FaTiktok />
          </a> */}
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-gray-200 mt-12 pt-6 text-center text-sm text-gray-200">
      © {new Date().getFullYear()} Greens & Acres. All rights reserved.
    </div>
  </footer>
);

export default Footer;
