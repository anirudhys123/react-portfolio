import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

import React from 'react';

const Work = () => {
  return (
    <div className="work-container">
    <h1 className="project-heading"></h1>
    <div className="project-container">
        {WorkCardData.map((val,ind) =>{
            return (
                <WorkCard 
                key = {ind}
                imgsrc = {val.imgsrc}
                title = {val.title}
                view = {val.view}
                text = {val.text}
                source = {val.source}
                />
            )


            
        })}
     </div>
    </div>
  )
}

export default Work;
