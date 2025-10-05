import React from "react";
import heroImg from "../assets/images/projects-bg.png";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/projectf.jpg";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";
import project6 from "../assets/images/project6.png";



const projects = [
  {
    id: 1,
    sqm: "150 SQM",
    title: "2 BED ROOM TERRACE DUPLEX 2",
    price: "₦5,400,000.00",
    img: project5,
  },
  {
    id: 2,
    sqm: "250 SQM",
    title: "THREE BEDROOM TERRACE",
    price: "₦9,000,000.00",
    img: project2,
  },
  {
    id: 3,
    sqm: "300 SQM",
    title: "4 BEDROOM SEMI-DETACHED DUPLEX",
    price: "₦10,800,000.00",
    img: heroImg,
  },
  {
    id: 4,
    sqm: "400 SQM",
    title: "FULL DETACHED WITHOUT BQ",
    price: "₦14,400,000.00",
    img: project3,
  },
  {
    id: 5,
    sqm: "500 SQM",
    title: "FIVE BEDROOM FULLY DETACHED BQ",
    price: "₦18,000,000.00",
    img: project6,
  },
  {
    id: 6,
    sqm: "750 SQM",
    title: "2 & 1 BED ROOM APARTMENT",
    price: "₦27,000,000.00",
    img: project4,
  },
];

const Projects = () => {
  return (
    <div className="bg-white">
      {/* Banner */}
      <div
        className="relative w-[full] h-[610px] py-8 overflow-hidden"
        aria-hidden="false"
      >
        <img
          src={project1}
          alt="Projects banner"
          className="w-full h-full object-cover"
        />

        {/* left→right subtle dark overlay for contrast on text */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Text */}
        <div className="absolute left-6 md:left-16 top-1/2 transform -translate-y-1/2 z-10 max-w-xl">
          <h1 className="text-xl sm:text-xl md:text-xl lg:text-4xl p-4 py-8 text-center bg-[#556B2F] opacity-80  text-white">
            Our Projects
          </h1>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto py-16 px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group bg-white  shadow overflow-hidden"
            >
              {/* image wrapper (relative so badge can be absolute) */}
              <div className="relative overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-56 sm:h-60 md:h-56 lg:h-64 object-cover transform group-hover:scale-105 transition duration-300"
                />

                {/* price badge bottom-right */}
                <div className="absolute bottom-1 right-1 bg-[#556B2F] text-white text-sm font-medium px-3 py-1 shadow">
                  {p.price}
                </div>
              </div>

              {/* meta */}
              <div className="p-4">
                <h3 className="text-lg font-semibold">{p.sqm}</h3>
                <p className="text-sm text-gray-600 mt-2">{p.title}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
