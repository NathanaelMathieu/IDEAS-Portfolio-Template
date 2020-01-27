import "./PreviewCard.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import defaultImage from "../resources/ImageNotFound.png";

export default class PreviewCard extends Component {

  render() {
    return (
      <div className="PreviewCard"
      onClick={this.handleOnClick}>
        <Link className="image_wrapper" to={this.props.route}>
          <img src={this.props.sourceImage} alt={this.props.text}></img>
          <p className="image_description">{this.props.text}</p>
        </Link>
      </div>
    );
  }
}

PreviewCard.propTypes = {
  "route": PropTypes.string,
  "size": PropTypes.number,
  "sourceImage": PropTypes.object,
  "text": PropTypes.string
};


PreviewCard.defaultProps = {
  "route": "",
  "size": 1,
  "sourceImage": defaultImage,
  "text": "This project is really cool!"
};
