import "./Projects.scss";
import React, { Component } from "react";
import Layout from "../Layout.js";
import { PreviewCard } from "../components";
import cubeBrick from "../resources/cube/brick.jpg";
import cubeLights from "../resources/cube/lights.jpg";
// Import cubeSide from "../../resources/cube/side.JPG";


export default class Projects extends Component {
  render() {
    return (
      <Layout>
        <div className="ProjectContainer">
          <PreviewCard sourceImage={cubeBrick}/>
          <PreviewCard sourceImage={cubeBrick} />
          <PreviewCard sourceImage={cubeLights} />
          <PreviewCard sourceImage={cubeBrick} />

          <PreviewCard sourceImage={cubeLights} />
          {/* <PreviewCardSmall sourceImage={cubeSide} />
          <PreviewCardSmall sourceImage={cubeSide} /> */}
          <PreviewCard sourceImage={cubeBrick} />
          <PreviewCard sourceImage={cubeLights} />
          {/* <PreviewCardSmall sourceImage={cubeSide} /> */}
          {/* This is where the project previews will go */}
        </div>
      </Layout>
    );
  }
}
