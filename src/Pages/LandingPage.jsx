import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Amenities from '../components/Amenities';
import AboutUs from '../components/AboutUs';
import CoreValues from '../components/CoreValues';
import ScheduleVisit from '../components/ScheduleVisit';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Hero />
      <Amenities />
      {/* <AboutUs />
      <CoreValues /> */}
      <ScheduleVisit />
      <Footer />
      </div>
  )
}

export default LandingPage