import React from "react";
import team1 from "../assets/images/md.png";
import testimonial2 from "../assets/images/team-1.png";
import testimonial3 from "../assets/images/team3.png";

const teamMembers = [
  {
    name: "Surv. Oyesiji Yisau Oyekola",
    title: "Managing Director",
    image: team1,
    
  },
  {
    name: "Dr Taiwo Q Yusuff",
    title: "Non-Executive Director",
    image: testimonial2,
  },
  {
    name: "Abdulmalik Ogungbenle",
    title: "Non-Executive Director",
    image: testimonial3,
    
  },
];

const Team = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-[#556B2F] mb-2 uppercase tracking-wide">
            Board of Directors
          </h2>
          <p className="max-w-2xl mx-auto text-2xl font-semibold leading-relaxed text-gray-800">
            A dynamic team of visionaries and change-makers dedicated to
            reimagining systems and empowering communities.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="w-full h-64 ">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                />
              </div>

              {/* Text Content */}
              <div className="p-6 flex-1 flex flex-col text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h4>
                <p className="text-[#556B2F] font-medium mb-4 uppercase text-sm tracking-wide">
                  {member.title}
                </p>
                <p className="text-gray-600 leading-relaxed text-base">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
