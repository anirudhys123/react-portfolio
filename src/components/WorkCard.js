import "./WorkCardStyles.css";

import React from 'react';

import { Link } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
         <img src ={props.imgsrc} alt="image" />
        <h2 className="project-title">{props.title}</h2>
        <div className="pro-details">
            <p> {props.text}</p>
        </div>
        <div className="pro-btns">
            <Link to ={props.view} className="btn"> View</Link>
        </div>
        
        </div>
  )
}

export default WorkCard;
