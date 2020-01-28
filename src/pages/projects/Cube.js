
import "./Cube.scss";
import React, { Component } from "react";
import Layout from "Layout.js";
// Import defaultImage from "resources/ImageNotFound.png";

export default class Cube extends Component {
  componentDidMount() {
    document.title = "The Cube | Nathanael Mathieu";
  }

  render() {
    return (
      <Layout>
        <div className="cubePage">
          <p>Welcome to the Cube page!</p>
        </div>
      </Layout>
    );
  }
}
