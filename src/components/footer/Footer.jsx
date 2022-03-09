import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Mo Portfolio
      </a>

      <ul className="footer__list">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#experiance">Experiance</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="icon">
        <a href="http://github.com">
          <FaFacebookF />
        </a>
        <a href="http://github.com">
          <FaTwitter />
        </a>
        <a href="http://github.com">
          <FaInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>
          &copy; Made With <AiFillHeart className="footer__copyright-icon" /> By
          Mo Adel
        </small>
      </div>
    </footer>
  );
};

export default Footer;
