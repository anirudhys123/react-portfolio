import React from "react";
import "./index.css";
import Home from "./routes/home"
import Project from "./routes/project"
import About from "./routes/about"
import Contact from "./routes/contact"
import Certifications from "./routes/certifications"
import Designs from "./routes/Designs"


import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path = "/" element = {<Home/>} />
      <Route path = "/project" element = {<Project/>} />
      <Route path = "/about" element = {<About/>} />
      <Route path = "/contact" element = {<Contact/>} />
      <Route path = "/certifications" element = {<Certifications/>} />
      <Route path = "/designs" element = {<Designs/>} />
    </Routes>
    </>
  );
}

export default App;
