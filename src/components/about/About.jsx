import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { HiUsers } from "react-icons/hi";
import ME from "../../assets/me.jpg";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me__img">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__exp">
          <div className="about__cards">
            <div className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </div>
            <div className="about__card">
              <HiUsers className="about__icon" />
              <h5>Clints</h5>
              <small>300+ Worldwide</small>
            </div>
            <div className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </div>
          </div>
          <p className="about__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            cum consequatur voluptatem exercitationem nesciunt dolor laudantium
            mollitia repudiandae deleniti at atque, quis quae dolorem maxime
            voluptas ab. Sint, beatae delectus deleniti at atque, quis quae
            dolorem maxime voluptas ab. Sint, beatae delectus.
          </p>
          <a href="#contact" className="btn btn-primary about__btn">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
