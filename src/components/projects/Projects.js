import React, { Component } from "react";
import Layout from "../../Layout.js";
import { PreviewCardSmall } from ".";
import "./Projects.scss";
// import cubeSide from "../../resources/cube/side.JPG";
import cubeBrick from "../../resources/cube/brick.jpg";
// import cubeLights from "../../resources/cube/lights.jpg";

export default class Projects extends Component {
  render() {
    return (
      <Layout>
        <div className="ProjectContainer">
          <div className="column">
            <PreviewCardSmall sourceImage={cubeBrick} />
            {/* this is where the project previews will go */}
          </div>
        </div>
      </Layout>
    );
  }
}
