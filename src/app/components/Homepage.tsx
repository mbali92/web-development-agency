'use client';
import React, { useState } from 'react'
import HeaderSection from './HeaderSection'
import Service from './Service';
import About from './About';
import Contact from './Contact';


function Homepage() {
  return (
     <>
      <HeaderSection />
      <About />
      <Service />
      <Contact/>
     </>
  )
}

export default Homepage