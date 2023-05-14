import "./FooterStyles.css";

import React from "react";
import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const goToMyBio1 = () => {
    window.open("https://www.facebook.com/abednego.christian");
  };
  const goToMyBio2 = () => {
    window.open("https://twitter.com/bogi_christ");
  };
  const goToMyBio3 = () => {
    window.open("https://www.linkedin.com/in/bonaventura-christian-9304a61aa/");
  };

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Jl. Danau Paniai IV H4E23</p>
              <p>Indonesia.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +62-877-6312-7572
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              info@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About the company</h4>
          <p>
            This is me Abednego Bogi Christian. CEO & Founder of PersonalCorp. I
            enjoy discussing new projects and design challanges.
          </p>
          <div className="social">
            <FaFacebook
              className="each-icon"
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
              onClick={goToMyBio1}
            />
            <FaTwitter
              className="each-icon"
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
              onClick={goToMyBio2}
            />
            <FaLinkedin
              className="each-icon"
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
              onClick={goToMyBio3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
