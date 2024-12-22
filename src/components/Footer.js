import "./FooterStyles.css";
import React from "react";
import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          {/* <div className="location">
            <FaHome size={30} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>88/A, 89/A Flat no 202 Balaji Residency</p>
              <p>Vengal-Rao Nagar, Hyderabad, 500038.  </p> 
            </div>
          </div> */}
          <div className="phone">
            <h4>
              <FaPhone size={30} style={{ color: "#fff", marginRight: "2rem" }} />
              +91 8179972478
            </h4>
            <div className="email">
              <h4>
                <FaMailBulk size={30} style={{ color: "#fff", marginRight: "2rem" }} />
                saianirudh643@gmail.com
              </h4>
            </div>
          </div>
        </div>
        <div className="right">
          <h1>Social Media</h1>
          <div className="social">
            <a href="https://www.facebook.com/profile.php?id=100011130556611" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={50} style={{ color: "yellow", marginRight: "1rem" }} />
            </a>
            <a href="https://www.instagram.com/ani_ys_15/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={50} style={{ color: "yellow", marginRight: "1rem" }} />
            </a>
            <a href="https://www.linkedin.com/in/sai-anirudh-yellapragada-b82262207/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={50} style={{ color: "yellow", marginRight: "1rem" }} />
            </a>
            <a href="https://github.com/anirudhys123" target="_blank" rel="noopener noreferrer">
              <FaGithub size={50} style={{ color: "yellow", marginRight: "1rem" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
