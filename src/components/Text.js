import "./Text.scss";
import React from "react";
import propTypes from "prop-types";

function Text(props) {

  if (props.preformatted) {
    return <pre className={props.class}>
      {props.text}
    </pre>;
  }

  return (
    <div className={props.class}>
      {props.text.split("\n").map((item, i) => <p key={i}>{item}</p>)}
    </div>);
}

Text.propTypes = {
  "class": propTypes.string,
  "preformatted": propTypes.bool,
  "text": propTypes.string
};

Text.defaultProps = {
  "class": "body",
  "preformatted": false,
  "text": ""
};

export default Text;
