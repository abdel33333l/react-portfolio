import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container serv__container">
        <div className="serv__service">
          <h3 className="serv__head">UI/UX Design</h3>
          <ul className="serv__list">
            <li>
              <BiCheck className="serv__icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="serv__icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="serv__icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="serv__icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="serv__icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="serv__icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </div>
        <div className="serv__service">
          <h3 className="serv__head">Web Development</h3>
          <ul className="serv__list">
            <li>
              <BiCheck className="serv__icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="serv__icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="serv__icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="serv__icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="serv__icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="serv__icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="serv__icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </div>
        <div className="serv__service">
          <h3 className="serv__head">Content Creation</h3>
          <ul className="serv__list">
            <li>
              <BiCheck className="serv__icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="serv__icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="serv__icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="serv__icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="serv__icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="serv__icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
