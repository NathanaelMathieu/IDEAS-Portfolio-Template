import React, { Component } from "react";
import "./Layout.scss";
import { Header } from "./components/";

export default class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <Header />
        {this.props.children}
      </div>
    );
  }
}
