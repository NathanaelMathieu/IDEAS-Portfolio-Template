import "./Contact.scss";
import React, { Component } from "react";
import { ImageCard } from "../components";
import Layout from "../Layout.js";
import contactText from "./Text/contactText.js";
import professionalPhoto from "../resources/professionalPhoto.JPG";


export default class Contact extends Component {
  componentDidMount() {
    document.title = "Contact | Nathanael Mathieu";
  }

  render() {
    return (
      <Layout>
        <div className="Contact">
          <div className="card_container">
            <ImageCard size="square" image={professionalPhoto}
              alt="A professional photo of myself"/>
          </div>
          <div className="text_container">
            {contactText}
          </div>
          <div className="button_container">
            Button
            {/* Buttons go here */}
          </div>
        </div>
      </Layout>
    );
  }
}
