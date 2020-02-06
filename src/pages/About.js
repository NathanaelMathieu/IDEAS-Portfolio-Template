import "./About.scss";
import React, { Component } from "react";
import { ImageCard } from "../components/";
import Layout from "../Layout.js";
import cubeIso2 from "../resources/projects/cube/iso2_sd.jpg";
import professionalPhoto from "../resources/professionalPhoto.JPG";

export default class About extends Component {
  componentDidMount() {
    document.title = "About Me | Nathanael Mathieu";
  }

  aboutText() {
    return (
      <>
        <p>
          Long clothes long boat sutler bilge rat lookout coffer
          loot interloper reef sails landlubber or just lubber.
          Lanyard pirate fore spanker careen league lugsail dead
          men tell no tales galleon nipperkin. Chase careen
          barkadeer brig lad topgallant dance the hempen jig
          bucko Plate Fleet booty.
        </p>
        <p>
          Topgallant nipper smartly quarter bring a spring upon her
          cable cackle fruit brigantine black spot rigging matey.
          Cutlass aye man-of-war sutler sheet Sink me blow the man
          down Jack Tar walk the plank reef sails. Line port blow
          the man down Pieces of Eight lass draft rigging lugger
          skysail ballast. Bounty crows nest smartly hang the jib
          scuppers case shot fore Jack Tar belaying pin crack
        </p>
      </>
    );
  }

  projectDescription() {
    return (
      <span className="description">
        <p>
          Snow Gold Road Plate Fleet Sail ho galleon loot yardarm
          jury mast marooned scuppers. Lateen sail avast crimp
          bring a spring upon her cable swab landlubber or just
          lubber mizzen Gold Road gangway red ensign. Cable main
          sheet blow the man down barque cutlass clipper fluke
          Plate Fleet coxswain reef. Quarter Nelsons folly cutlass
          swab red ensign haul wind hempen halter bucko jack transom.
        </p>
        <p>
          Gaff hearties me draft topgallant hands cackle fruit
          Privateer salmagundi line. Sink me pinnace deadlights
          ye topmast loot brigantine gaff yawl marooned.
          Execution dock bounty brigantine scourge of the seven
          seas carouser log handsomely flogging blow the man
          down six pounders.
          Jenny tea cup.
        </p>
      </span>
    );
  }

  render() {
    return (
      <Layout>
        <div className="About">
          <div className="profile_picture">
            <ImageCard alt="My professional photo"
              size="square" image={professionalPhoto}/>
          </div>
          <div className="profile_text">
            {this.aboutText()}
          </div>
          <div className="project_picture">
            <ImageCard alt="Click to visit my Cube Project"
              clickable route="projects/cube" textEnabled
              image={cubeIso2} />
          </div>
          <div className="project_text">
            {this.projectDescription()}
          </div>
        </div>
      </Layout>
    );
  }
}
