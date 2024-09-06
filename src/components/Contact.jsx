import React from 'react'
import Accordion from './Accordion'
import CoursesLandingPage from './CoursesLandingPage'
import ContactForm from './ContactForm'
import Map from './Map'
import Community from './Community'
import Footer from './Footer'

function Contact() {
  return (
    <div>
          <CoursesLandingPage />
          <ContactForm />
          <Map />
          <Community />
          <Footer />
    <div className='mt-20'>
    <Accordion />
    </div>
    
    </div>
  )
}

export default Contact
