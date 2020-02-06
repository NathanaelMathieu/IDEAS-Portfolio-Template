import "./ImageCard.scss";
import React, { Component } from "react";
import { imageNotFound_4x6_med as default4x6,
  imageNotFound_square_high as defaultSquare } from "../resources/";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default class ImageCard extends Component {
  getImage(props) {
    if (props.image) {
      if (props.size === "square") {
        return defaultSquare;
      }

      return default4x6;
    }

  return props.image;
  }

  getText() {
    let text = <p/>;

    if (this.props.textEnabled) {
      text = <p className="text">{this.props.text}</p>;
    }

    return text;
  }

  render() {
    const { route, text } = this.props,
      image = this.getImage(this.props);

    if (this.props.clickable) {
      return (
        <Link className="ImageCard Clickable"
         onClick={this.handleOnClick} to={route}>
          <img className="image" src={image}
           alt={text}></img>
          {this.getText()}
        </Link>
      );
    }

    return (
      <div className="ImageCard"
       onClick={this.handleOnClick} to={route}>
        <img className="image" src={image}
         alt={text}></img>
        {this.getText()}
      </div>
    );
  }
}

ImageCard.propTypes = {
  "clickable": PropTypes.bool,
  "image": PropTypes.object,
  "route": PropTypes.string,
  "size": PropTypes.string,
  "text": PropTypes.string,
  "textEnabled": PropTypes.bool
};


ImageCard.defaultProps = {
  "clickable": false,
  "image": default4x6,
  "route": "",
  "size": "4x6",
  "text": "This project is really cool!",
  "textEnabled": false
};
