import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
// import Work from '../components/Work';
import Work1 from '../components/Work1';

function certifications() {
  return (
    <div>
    <Navbar />
    <HeroImg2 heading = "MY CERTIFICATIONS" text = "AND WORKSHOPS" />
    <Work1 />
    <Footer />
  </div>
  )
}

export default certifications