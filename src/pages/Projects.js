import "./Projects.scss";
import React, { Component } from "react";
import { ImageCard } from "../components";
import Layout from "../Layout.js";
import cubeBrick from "../resources/projects/cube/brick_sd.jpg";
import cubeHall from "../resources/projects/cube/hall_sd.jpg";
import cubeIso1 from "../resources/projects/cube/iso1_sd.jpg";
import cubeIso3 from "../resources/projects/cube/iso3_sd.jpg";
import cubeIso4 from "../resources/projects/cube/iso4_sd.jpg";
import cubeLights from "../resources/projects/cube/lights_sd.jpg";
import cubeSide from "../resources/projects/cube/side1_sd.jpg";

export default class Projects extends Component {
  componentDidMount() {
    document.title = "Projects | Nathanael Mathieu";
  }

  render() {
    return (
      <Layout>
        <div className="ProjectContainer">
          <ImageCard image={cubeIso1} route="projects/cube"
           textEnabled clickable alt="Click to visit my Cube project page"/>
          <ImageCard image={cubeLights} textEnabled
           alt="Click to visit my Cube project page"/>
          <ImageCard alt="Example placeholder image"/>
          <ImageCard image={cubeBrick} alt="This is a placeholder image"
           route="projects/cube" clickable/>
          <ImageCard image={cubeIso3} alt="This is a placeholder image"/>
          <ImageCard image={cubeHall} alt="This is a placeholder image"/>
          <ImageCard image={cubeIso4} />
          <ImageCard image={cubeLights} alt="This is a placeholder image"/>
          <ImageCard image={cubeSide} alt="This is a placeholder image"/>
          {/* This is where the project previews will go */}
        </div>
      </Layout>
    );
  }
}
