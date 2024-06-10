import "./HeroImgStyles.css";

import React from 'react'
import IntroImg from "../assests/ai.jpg"
import {Link} from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
     <div className="mask">
     <img className="into-img" src ={IntroImg} alt="IntroImg"/>

    </div> 
    <div className="content">
        <h1>  Mechanical Engineering Student </h1>
        <h2> and</h2>
        <h1> Web Developer</h1>
      <div>
        <Link to="/project" className="btn">my work</Link>
        <Link to="/contact" className="btn btn-light"> Contact</Link>
      </div>

    </div>
    </div>
  )
}

export default HeroImg
