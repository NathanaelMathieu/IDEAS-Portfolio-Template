import React, { Component } from "react";
import defaultImage from "../../resources/ImageNotFound.png";
import "./PreviewCardSmall.scss";

export default class PreviewCardSmall extends Component {
  render() {
    return (
      <div className="PreviewCardSmall">
        <div className="image_wrapper">
          <img src={this.props.sourceImage} alt={this.props.text}></img>
          <p className="image_description">{this.props.text}</p>
        </div>
      </div>
    );
  }
}

PreviewCardSmall.defaultProps = {
  sourceImage: defaultImage,
  text: "This project is really cool!"
};
