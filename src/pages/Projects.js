import "./Projects.scss";
import React, { Component } from "react";
import Layout from "../Layout.js";
import { PreviewCard } from "../components";
import cubeBrick from "../resources/cube/brick_sd.jpg";
import cubeHall from "../resources/cube/hall_sd.jpg";
import cubeIso1 from "../resources/cube/iso1_sd.jpg";
import cubeIso2 from "../resources/cube/iso2_sd.jpg";
import cubeIso3 from "../resources/cube/iso3_sd.jpg";
import cubeIso4 from "../resources/cube/iso4_sd.jpg";
import cubeLights from "../resources/cube/lights_sd.jpg";
import cubeSide from "../resources/cube/side1_sd.jpg";


// Import cubeSide from "../../resources/cube/side.JPG";


export default class Projects extends Component {
  componentDidMount() {
    document.title = "Projects | Nathanael Mathieu";
  }

  render() {
    return (
      <Layout>
        <div className="ProjectContainer">
          <PreviewCard sourceImage={cubeIso1} route={"projects/cube"}/>
          <PreviewCard sourceImage={cubeLights} route={"projects/cube"}/>
          <PreviewCard sourceImage={cubeIso2} route={"projects/cube"}/>
          <PreviewCard sourceImage={cubeBrick} route={"projects/cube"}/>
          <PreviewCard sourceImage={cubeIso3} />
          <PreviewCard sourceImage={cubeHall} route={"projects/cube"}/>
          <PreviewCard sourceImage={cubeIso4} />
          <PreviewCard sourceImage={cubeLights} route={"projects/cube"}/>
          <PreviewCard sourceImage={cubeSide} route={"projects/cube"}/>
          {/* This is where the project previews will go */}
        </div>
      </Layout>
    );
  }
}
