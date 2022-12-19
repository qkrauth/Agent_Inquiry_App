import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaRedditAlien,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <h2>Contact Us</h2>
      <div className="footer-logos">
        <FaTwitter color="white" size="25px"/>
        <FaFacebookF color="white" size="25px"/>
        <FaYoutube color="white" size="25px"/>
        <FaRedditAlien color="white" size="25px"/>
        <FaGithub color="white" size="25px"/>
      </div>
    </footer>
  );
};

export default Footer;
