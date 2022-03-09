import React from "react";
import "./experiance.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experiance = () => {
  return (
    <section id="experiance">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container exp__container">
        <div className="container__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__lang">
            <div className="experience__one">
              <BsFillPatchCheckFill className="exp__icon" />
              <div className="card__text">
                <h5>HTML</h5>
                <small>Experienced</small>
              </div>
            </div>
            <div className="experience__one">
              <BsFillPatchCheckFill className="exp__icon" />
              <div className="card__text">
                <h5>CSS</h5>
                <small>Intermediate</small>
              </div>
            </div>
            <div className="experience__one">
              <BsFillPatchCheckFill className="exp__icon" />
              <div className="card__text">
                <h5>JavaScript</h5>
                <small>Experienced</small>
              </div>
            </div>
            <div className="experience__one">
              <BsFillPatchCheckFill className="exp__icon" />
              <div className="card__text">
                <h5>BootStrap</h5>
                <small>Experienced</small>
              </div>
            </div>
            <div className="experience__one">
              <BsFillPatchCheckFill className="exp__icon" />
              <div className="card__text">
                <h5>Sass</h5>
                <small>Experienced</small>
              </div>
            </div>
            <div className="experience__one">
              <BsFillPatchCheckFill className="exp__icon" />
              <div className="card__text">
                <h5>React</h5>
                <small>Experienced</small>
              </div>
            </div>
          </div>
        </div>
        <div className="container__backend">
          <h3>Backend Development</h3>
          <div className="experience__lang">
            <div className="experience__one">
              <BsFillPatchCheckFill className="exp__icon" />
              <div className="card__text">
                <h5>HTML</h5>
                <small>Experienced</small>
              </div>
            </div>
            <div className="experience__one">
              <BsFillPatchCheckFill className="exp__icon" />
              <div className="card__text">
                <h5>CSS</h5>
                <small>Intermediate</small>
              </div>
            </div>
            <div className="experience__one">
              <BsFillPatchCheckFill className="exp__icon" />
              <div className="card__text">
                <h5>JavaScript</h5>
                <small>Experienced</small>
              </div>
            </div>
            <div className="experience__one">
              <BsFillPatchCheckFill className="exp__icon" />
              <div className="card__text">
                <h5>BootStrap</h5>
                <small>Experienced</small>
              </div>
            </div>
            <div className="experience__one">
              <BsFillPatchCheckFill className="exp__icon" />
              <div className="card__text">
                <h5>Sass</h5>
                <small>Experienced</small>
              </div>
            </div>
            <div className="experience__one">
              <BsFillPatchCheckFill className="exp__icon" />
              <div className="card__text">
                <h5>React</h5>
                <small>Experienced</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiance;
