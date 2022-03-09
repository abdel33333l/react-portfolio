import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
const HeaderSocial = () => {
  return (
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
  );
};

export default HeaderSocial;
