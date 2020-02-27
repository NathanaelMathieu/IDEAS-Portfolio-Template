import "./Layout.scss";
import React, { Component } from "react";
import { Header } from "./";
import PropTypes from "prop-types";

export default class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <div className="header_container">
          <Header />
        </div>
        <div className="Body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  "children": PropTypes.object
};
