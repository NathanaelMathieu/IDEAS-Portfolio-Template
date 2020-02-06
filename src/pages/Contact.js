import "./Contact.scss";
import React, { Component } from "react";
import { ImageCard } from "../components";
import Layout from "../Layout.js";
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
            <ImageCard size="square" image={professionalPhoto}/>
          </div>
          <div className="text_container">
            <p>Scuppers gaff Yellow Jack bucko interloper hogshead Sink me
               trysail hands shrouds. Gibbet lateen sail belay measured fer
               yer chains spirits salmagundi Yellow Jack heave to Jolly Roger
                crimp. Belaying pin Sail ho yawl yard weigh anchor pillage
                 black jack dance the hempen jig Davy Jones' Locker run a
                  shot across the bow. Lad strike colors bilge rat red ensign
                   Pieces of Eight chandler chase trysail capstan boom. Poop
                    deck handsomely schooner grog Pirate Round Blimey gangway
                     reef aye scallywag. </p>
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
