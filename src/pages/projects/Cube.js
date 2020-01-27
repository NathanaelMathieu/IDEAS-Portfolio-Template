
import "./Cube.scss";
import React, { Component } from "react";
import Layout from "Layout.js";
// Import defaultImage from "resources/ImageNotFound.png";

export default class Cube extends Component {
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
