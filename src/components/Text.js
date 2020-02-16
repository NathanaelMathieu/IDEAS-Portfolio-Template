import React from "react";
import propTypes from "prop-types";

function Text(props) {
  return (
    <pre className="Text">
      {props.text}
    </pre>
  );
}

Text.propTypes = {
  "text": propTypes.string
};
Text.defaultProps = {
  "text": ""
};

export default Text;
