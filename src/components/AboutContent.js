import "./AboutContentStyles.css";

import React from 'react';

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
  <h1><u>My Education</u></h1>
 <p className="edu">
  B.Tech (Mechanical) and M.Tech (Thermal) from JNTU Hyderabad with 8.5 CGPA; currently working as an HVAC Site Engineer at CtrlS Data Center, Navi Mumbai.
</p>


  <h1><u>My Skills</u></h1>

<p><b>HVAC Systems:</b> Chilled Water, VRF/VRV, AHU, FCU</p>
<p><b>Site Work:</b> HVAC installation, ducting, piping & insulation</p>
<p><b>Drawings & Testing:</b> Shop/GA drawings, pressure testing, flushing</p>
<p><b>Coordination & Safety:</b> Client & MEP coordination, QA/QC, site safety</p>
<p><b>Software (HVAC):</b> AutoCAD, Revit MEP, MS Excel</p>

<p><b>Web Development:</b> HTML, CSS, JavaScript, TypeScript, React</p>
<p><b>Backend & DB:</b> Node.js, Express.js, MongoDB, SQL</p>
<p><b>Tools & Hosting:</b> GitHub, VS Code, Vercel, Firebase, AWS</p>

</div>

        <div className="right">
        </div>
    </div>
  )
}

export default AboutContent;
