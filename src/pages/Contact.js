import "./Contact.scss";
import { IconButtons, ImageCard, Layout } from "../components/";
import React, { Component } from "react";
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
            <IconButtons/>
          </div>
        </div>
      </Layout>
    );
  }
}
