import React from 'react'
import AboutBanner from '../components/AboutBanner'
import Navbar from '../components/Navbar'
import AboutUs from '../components/AboutUs'
import CoreValues from '../components/CoreValues'
import Team from '../components/Team'
import Footer from '../components/Footer'

const AboutUsPage = () => {
  return (
    <div>
        <Navbar />
        <AboutBanner />
        <AboutUs />
        <CoreValues />
        <Team />
        <Footer />
    </div>
  )
}

export default AboutUsPage