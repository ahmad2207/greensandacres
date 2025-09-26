import React from "react";
import { FaLightbulb, FaBalanceScale, FaLeaf } from "react-icons/fa";

const CoreValues = () => (
  <section id="corevalues" className="py-16 px-6 text-center">
    <p className="text-m font-bold mb-6 text-[#556B2F]">Our Core Values</p>
    <h2 className="text-3xl mb-10 font-bold">The principles that guide everything we do</h2>
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <div className="p-6 bg-white rounded-2xl shadow">
        <FaLightbulb className="text-[#556B2F] text-4xl mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Innovation</h3>
        <p>
          We embrace modern solutions to design and manage estates that meet
          today&apos;s living needs.
        </p>
      </div>
      <div className="p-6 bg-white rounded-2xl shadow">
        <FaBalanceScale className="text-[#556B2F] text-4xl mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Value</h3>
        <p>
          Every investment delivers lasting benefits, combining affordability
          with quality.
        </p>
      </div>
      <div className="p-6 bg-white rounded-2xl shadow">
        <FaLeaf className="text-[#556B2F] text-4xl mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
        <p>
          We build eco-friendly communities that balance growth with care for
          the environment.
        </p>
      </div>
    </div>
  </section>
);

export default CoreValues;
