// src/pages/ProjectsPage.js
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

const ProjectsPage = () => (
  <div className="bg-white min-h-screen flex flex-col">
    <Navbar />
    <Projects />
    <Footer />
  </div>
);

export default ProjectsPage;
