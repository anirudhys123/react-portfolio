import "./AboutContentStyles.css";

import React from 'react';

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1><u>My Education</u> </h1> 
            <p class="edu">I am currently pursuing Integrated M.Tech and currently maintaining GPA of 7.8 till 5th year 1st semester.</p> 
            <h1><u>My Skills</u> </h1> 
            <p>Languages/Softwares: C, JAVA, Python, Ansys, Matlab.</p> 
            <p>Web Technologies: Html, CSS, JavaScript, React.</p>
            <p>Data Bases: MongoDB</p>
            <p>Developer Tools: VS Code, Github</p>
            <p>Strengths: Dedication, Sincerity, Honesty, Punctuality.</p>
        </div>
        <div className="right">
        </div>
    </div>
  )
}

export default AboutContent;
