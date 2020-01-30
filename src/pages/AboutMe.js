import React, { Component } from "react";
import Layout from "../Layout.js";

export default class AboutMe extends Component {
  componentDidMount() {
    document.title = "About Me | Nathanael Mathieu";
  }

  render() {
    return (
      <Layout>
        <div className="AboutMe">This is the About section</div>
      </Layout>
    );
  }
}
