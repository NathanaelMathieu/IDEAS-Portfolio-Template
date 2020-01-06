import React, { Component } from "react";
import defaultImage from "../../resources/ImageNotFound.png";

export default class PreviewCardLarge extends Component {
  render() {
    return (
      <div className="PreviewCardLarge">
        <img src={this.props.sourceImage} alt={this.props.text} ></img>
        <p className="image_description">{this.props.text}</p>
      </div>
    );
  }
}

PreviewCardLarge.defaultProps = {
  sourceImage: defaultImage,
  text: "This project is really cool!"
};
