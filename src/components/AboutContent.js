import "./AboutContentStyles.css";

import React from 'react';

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1><u>My Education</u> </h1> 
            <p class="edu">Completed my B.Tech (Mechanical Engineering) and M.Tech (Thermal Engineering) from JNTU Hyderabad and maintained an overall cgpa pf 8.5/10.</p> 
            <h1><u>My Skills</u> </h1> 
            <p>Design Softwares (Mechanical) : AutoCAD</p>
            <p>Languages/Softwares: C, JAVA, Python, Ansys, Matlab.</p> 
            <p> Frontend Technologies: Html, CSS, JavaScript, TypeScript, Bootstrap, React, Material UI.</p>
            <p>Data Bases: MongoDB , SQL</p>
            <p> Back end Technologies : Node JS , Express JS</p>
            <p>Developer Tools: VS Code, Github</p>
            <p> Hosting Tools : Vercel , Firebase , Netlify , AWS</p>
            {/* <p>Strengths: Dedication, Sincerity, Honesty, Punctuality.</p> */}
        </div>
        <div className="right">
        </div>
    </div>
  )
}

export default AboutContent;
