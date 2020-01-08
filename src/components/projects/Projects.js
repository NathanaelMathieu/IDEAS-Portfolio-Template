import React, { Component } from "react";
import Layout from "../../Layout.js";
import { PreviewCardSmall } from ".";
import "./Projects.scss";
import cubeSide from "../../resources/cube/side.JPG";
import cubeBrick from "../../resources/cube/brick.jpg";
import cubeLights from "../../resources/cube/lights.jpg";

export default class Projects extends Component {
  render() {
    return (
      <Layout>
        <div className="ProjectContainer">
          <PreviewCardSmall sourceImage={cubeSide} />
          <PreviewCardSmall sourceImage={cubeBrick} />
          <PreviewCardSmall sourceImage={cubeLights} />
          <PreviewCardSmall sourceImage={cubeLights} />
          <PreviewCardSmall sourceImage={cubeSide} />
          <PreviewCardSmall sourceImage={cubeBrick} />
          <PreviewCardSmall sourceImage={cubeBrick} />
          <PreviewCardSmall sourceImage={cubeLights} />
          <PreviewCardSmall sourceImage={cubeSide} />
          {/* this is where the project previews will go */}
        </div>
      </Layout>
    );
  }
}
