import "./Text.scss";
import React from "react";
import propTypes from "prop-types";

function Text(props) {
  if (props.preformatted) {
    return <pre className={`Text ${props.style}`}>
      {props.text}
    </pre>;
  }

  return (
    <div className={`Text ${props.style}`}>
      {props.text}
    </div>);
}

Text.propTypes = {
  "preformatted": propTypes.bool,
  "style": propTypes.string,
  "text": propTypes.string
};

Text.defaultProps = {
  "preformatted": false,
  "style": "",
  "text": ""
};

export default Text;
