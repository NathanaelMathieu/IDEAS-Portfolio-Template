import "./ImageCard.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import defaultImage from "../resources/imageNotFound.png";

export default class ImageCard extends Component {
  getText() {
    let text = <p/>;

    if (this.props.textEnabled) {
      text = <p className="text">{this.props.text}</p>;
    }

    return text;
  }

  render() {
    if (this.props.clickable) {
      return (
        <Link className="ImageCard Clickable"
         onClick={this.handleOnClick} to={this.props.route}>
          <img className="image" src={this.props.image}
           alt={this.props.text}></img>
          {this.getText()}
        </Link>
      );
    }

    return (
      <div className="ImageCard"
       onClick={this.handleOnClick} to={this.props.route}>
        <img className="image" src={this.props.image}
         alt={this.props.text}></img>
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
  "image": defaultImage,
  "route": "",
  "size": "4x6",
  "text": "This project is really cool!",
  "textEnabled": false
};
