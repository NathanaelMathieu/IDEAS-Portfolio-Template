import "./Projects.scss";
import { ImageCard, Layout } from "../components/";
import React, { Component } from "react";
import cubeBrick from "../resources/projects/cube/brick.jpg";
import cubeHall from "../resources/projects/cube/hall.jpg";
import cubeIso1 from "../resources/projects/cube/iso1.jpg";
import cubeIso2 from "../resources/projects/cube/iso2.jpg";
import cubeIso3 from "../resources/projects/cube/iso3.jpg";
import cubeIso4 from "../resources/projects/cube/iso4.jpg";
import cubeLights from "../resources/projects/cube/lights.jpg";
import cubeSide from "../resources/projects/cube/side1.jpg";

export default class Projects extends Component {
  componentDidMount() {
    document.title = "Projects | IDEAS Student";
  }

  render() {
    return (
      <Layout>
        <div className="ProjectContainer">
          <ImageCard image={cubeIso1} route="projects/cube"
           textEnabled clickable alt="Click to visit my Cube project page"
           text="Cube  |  Fall 2019"/>
          <ImageCard image={cubeLights} textEnabled
           alt="Lights seen through the Cube"
           text="Default text is 'This project is really cool!'"/>
          <ImageCard image={cubeIso2} alt="This is a placeholder image"
           route="projects/cube" clickable/>
          <ImageCard alt="This image is not specified"
           text="This text won't be visible because textEnabled is not set"/>
          <ImageCard image={cubeIso3} alt="This is a placeholder image"/>
          <ImageCard image={cubeHall} alt="This is a placeholder image"/>
          <ImageCard image={cubeIso4} alt="Alt text is required"/>
          <ImageCard image={cubeBrick} alt="Example placeholder image"/>
          <ImageCard image={cubeSide} alt="This is a placeholder image"/>
          {/* Replace/add image cards here, each linking to a project */}
        </div>
      </Layout>
    );
  }
}
