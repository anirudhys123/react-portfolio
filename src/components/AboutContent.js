import "./AboutContentStyles.css";

import React from 'react';

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1><u>My Education</u> </h1> 
            <p class="edu">I am currently pursuing Integrated M.Tech and currently maintaining GPA of 8/10 till 5th year 1st semester.</p> 
            <h1><u>My Skills</u> </h1> 
            <p>Languages/Softwares: C, JAVA, Python, Ansys, Matlab.</p> 
            <p> Frontend Technologies: Html, CSS, JavaScript, TypeScript, Bootstrap, React, Material UI.</p>
            <p>Data Bases: MongoDB , SQL</p>
            <p> Back end Technologies : Node JS , Express JS</p>
            <p>Developer Tools: VS Code, Github</p>
            <p> Hosting Tools : Vercel , Firebase , Netlify , AWS</p>
            <p>Strengths: Dedication, Sincerity, Honesty, Punctuality.</p>
        </div>
        <div className="right">
        </div>
    </div>
  )
}

export default AboutContent;
