import React from "react";
import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/test-2.png";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
const Header = () => {
  return (
    <header id="#">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h2>Mohamed Adel</h2>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <div className="test">
          <a href="https://www.linkedin.com/abdel3333l">
            <BsLinkedin />
          </a>
          <a href="https://www.github.com/abdel3333l ">
            <BsGithub />
          </a>
          <a href="https://www.facebook.com/abdel3333l">
            <BsFacebook />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
