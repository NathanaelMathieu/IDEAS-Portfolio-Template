import "./PreviewCard.scss";
import React, { Component } from "react";
import defaultImage from "../resources/ImageNotFound.png";

export default class PreviewCard extends Component {
  render() {
    return (
      <div className="PreviewCard" onClick={this.props.route}>
        <div className="image_wrapper">
          <img src={this.props.sourceImage} alt={this.props.text}></img>
          <p className="image_description">{this.props.text}</p>
        </div>
      </div>
    );
  }
}

PreviewCard.defaultProps = {
  "size": 1,
  "route": "",
  "sourceImage": defaultImage,
  "text": "This project is really cool!"
};
