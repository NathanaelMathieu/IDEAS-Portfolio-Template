import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
// Import logo from "../resources/logo_lowres.png";

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <ul>
          <li>
            <a
              href="https://www.wesleyan.edu/ideas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              IDEAS
            </a>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    );
  }
}
