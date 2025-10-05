import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGlobe,
} from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    if (!form.firstName || !form.email || !form.message) {
      setStatus("error");
      setTimeout(() => setStatus(null), 2500);
      return;
    }

    console.log("Form submitted:", form);

    setTimeout(() => {
      setStatus("success");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setTimeout(() => setStatus(null), 3000);
    }, 700);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading and Subheading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Get in touch with us
          </h2>
          <p className="text-gray-600 text-lg">
            We are ready to engage all inquiries and questions
          </p>
        </div>

        {/* Contact Container */}
        <div className="border border-gray-200 rounded-2xl shadow-sm bg-white p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Left Side - Contact Info */}
            <div className="space-y-10">

              {/* Info Items */}
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3  text-[#556B2F]">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-700">info@greensandacres.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3  text-[#556B2F]">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Call</h4>
                    <p className="text-gray-700">Mon - Fri, 9am - 5pm</p>
                    <p className="text-gray-700 mt-1">(+234) 808 687 2610</p>
                  </div>
                </div>

                {/* <div className="flex items-start gap-4">
                  <div className="p-3 text-[#556B2F]">
                    <FaClock />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Office Hours</h4>
                    <p className="text-gray-700">Mon - Fri, 9am - 5pm</p>
                  </div>
                </div> */}
              </div>

              {/* Socials */}
              <div className=" items-start gap-4" >
                <div className="p-3  text-[#556B2F]">
                    <FaGlobe />
                  </div>
                <h4 className="font-semibold text-gray-900 mb-6">
                  Find us on social media
                </h4>
                <p className="text-gray-700 mb-6 w-[300px]">
                  Engage with our community and keep your business at the
                  forefront.
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    aria-label="facebook"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F3F7F1] text-[#556B2F] hover:scale-105 transition"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    aria-label="twitter"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F3F7F1] text-[#556B2F] hover:scale-105 transition"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    aria-label="instagram"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F3F7F1] text-[#556B2F] hover:scale-105 transition"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div>
              <form
                onSubmit={handleSubmit}
                className="  rounded-xl  space-y-5 "
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="Enter first name"
                      className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#556B2F]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Enter last name"
                      className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#556B2F]"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#556B2F]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#556B2F]"
                  />
                </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#556B2F]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-[160px] bg-[#556B2F] text-white font-medium py-3 rounded-lg hover:bg-green-900 transition"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Send message"}
                </button>

                {status === "success" && (
                  <p className="text-green-700 text-sm bg-green-100 px-4 py-2 rounded">
                    Message sent successfully!
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-700 text-sm bg-red-100 px-4 py-2 rounded">
                    Please complete required fields (first name, email, message).
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
