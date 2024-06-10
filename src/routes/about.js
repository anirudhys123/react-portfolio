import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';

const about = () => {
  return (
    <div>
    <Navbar />
    <HeroImg2 heading = "ABOUT" text = "As an engineering student, I'm constantly eager to advance my knowledge and abilities. " />
    <AboutContent / >
    <Footer />
    </div>
  )
}

export default about
