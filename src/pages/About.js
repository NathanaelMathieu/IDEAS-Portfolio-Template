import "./About.scss";
import { ImageCard, Layout, Text } from "../components/";
import React, { Component } from "react";
import { aboutMeText, aboutProjectText } from "./Text/aboutText.js";
import cubeIso2 from "../resources/projects/cube/iso2.jpg";
import professionalPhoto from "../resources/professionalPhoto.JPG";

export default class About extends Component {
  componentDidMount() {
    document.title = "About Me | Nathanael Mathieu";
  }

  render() {
    return (
      <Layout>
        <div className="About">
          <div className="profile_picture">
            <ImageCard alt="My professional photo"
              size="square" image={professionalPhoto}/>
          </div>
          <div className="profile_text">
            <Text class="heading" text="About Me"/>
            {aboutMeText}
          </div>
          <div className="project_picture">
            <ImageCard alt="Click to visit my Cube Project"
              clickable route="projects/cube" textEnabled
              image={cubeIso2} />
          </div>
          <div className="project_text">
            {aboutProjectText}
          </div>
        </div>
      </Layout>
    );
  }
}
