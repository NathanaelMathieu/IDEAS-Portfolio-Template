import "./Contact.scss";
import React, { Component } from "react";
import Layout from "../Layout.js";

export default class Contact extends Component {
  componentDidMount() {
    document.title = "Contact | Nathanael Mathieu";
  }

  render() {
    return (
      <Layout>
        <div className="Contact">This is the Contact section</div>
      </Layout>
    );
  }
}
