import "./ImageCard.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import defaultImage from "../resources/ImageNotFound.png";

export default class ImageCard extends Component {
  getText() {
    let text = <p/>;

    if (this.props.textEnabled) {
      text = <p className="text">{this.props.text}</p>;
    }

    return text;
  }

  render() {
    const inside = <div className="image_wrapper">
        <img className="image" src={this.props.sourceImage}
          alt={this.props.text}></img>
        {this.getText()}
      </div>;

    if (this.props.clickable) {
      return (
        <Link className="ImageCard Clickable"
        onClick={this.handleOnClick} to={this.props.route}>
          {inside}
        </Link>
      );
    }

    return (
      <div className="ImageCard"
      onClick={this.handleOnClick} to={this.props.route}>
        {inside}
      </div>
    );
  }
}

ImageCard.propTypes = {
  "clickable": PropTypes.bool,
  "route": PropTypes.string,
  "size": PropTypes.string,
  "sourceImage": PropTypes.object,
  "text": PropTypes.string,
  "textEnabled": PropTypes.bool
};


ImageCard.defaultProps = {
  "clickable": false,
  "route": "",
  "size": "4x6",
  "sourceImage": defaultImage,
  "text": "This project is really cool!",
  "textEnabled": false
};
