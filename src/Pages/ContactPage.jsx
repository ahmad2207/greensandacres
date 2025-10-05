import React from 'react'
import Navbar from '../components/Navbar'
import ContactBanner from '../components/ContactBanner'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const ContactPage = () => {
  return (
    <div>
        <Navbar />
        <ContactBanner />
        <Contact />
        <Footer />
    </div>
  )
}

export default ContactPage