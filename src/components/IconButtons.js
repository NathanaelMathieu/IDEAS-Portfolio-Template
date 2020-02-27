/* eslint-disable quote-props */
import "./IconButtons.scss";
import { FaLinkedin } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { IconContext } from "react-icons";
import { IoMdMail } from "react-icons/io";
import React from "react";

function styleIcon(IconComponent, route) {
  return (
    <a
      href={route}
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconContext.Provider value ={{ className: "icon",
      color: "white",
      size: "2em" }}>
        <div>
          <IconComponent/>
        </div>
      </IconContext.Provider>
    </a>
  );
}

function IconButtons() {
  return <div className="IconButtons">
      {styleIcon(
        GoMarkGithub,
        "https://github.com/"
      )}
      {styleIcon(
        IoMdMail,
        "mailto:placeholder@wesleyan.edu"
      )}
      {styleIcon(
        FaLinkedin,
        "https://www.linkedin.com/"
      )}
    </div>;
}

export default IconButtons;
