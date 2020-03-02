import "./Text.scss";
import React from "react";
import propTypes from "prop-types";

function Text(props) {

  if (props.preformatted) {
    return <div className={props.class}>
      {props.preformatted}
    </div>;
  }

  return (
    <div className={props.class}>
      {props.text.split("\n").map((item, i) => <p key={i}>{item}</p>)}
    </div>);
}

Text.propTypes = {
  "class": propTypes.string,
  "preformatted": propTypes.object,
  "text": propTypes.string
};

Text.defaultProps = {
  "class": "body",
  "preformatted": null,
  "text": ""
};

export default Text;
