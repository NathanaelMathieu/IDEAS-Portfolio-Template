import "./Cube.scss";
import { ImageCard, Layout } from "../../components/";
import React, { Component } from "react";
import { endText, mainText } from "./Text/cubeText.js";
import cubeIso1 from "../../resources/projects/cube/iso1.jpg";
import cubeIso3 from "../../resources/projects/cube/iso3.jpg";

export default class Cube extends Component {
  componentDidMount() {
    document.title = "The Cube | Nathanael Mathieu";
  }

  render() {
    return (
      <Layout>
        <div className="Cube">
          <div className="main_picture">
            <ImageCard alt="An isometric view of the Cube"
              size="4x6" image={cubeIso1}
              textEnabled text="An isometric view of the Cube"/>
          </div>
          <div className="main_text">
          {mainText}
          </div>
          <div className="end_picture">
            <ImageCard alt="An isometric view of the Cube"
              textEnabled text="An isometric view of the Cube"
              image={cubeIso3}/>
          </div>
          <div className="end_text">
            {endText}
          </div>
        </div>
      </Layout>
    );
  }
}
