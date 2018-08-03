import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

const Spinner = ({ size, color, time }) => {
  const style = {
    animation: `rotation ${time}s infinite`,
    animationTimingFunction: "linear"
  };
  return (
    <svg style={style} width={size} height={size} viewBox="0 0 60 60">
      <path
        fill={color}
        d="M29.992,51.595C18.088,51.595,8.404,41.908,8.404,30c0-11.909,9.684-21.595,21.588-21.595V0C13.427,0,0,13.431,0,30c0,16.568,13.427,30,29.992,30H30v-8.405H29.992z"
      />
    </svg>
  );
};

Spinner.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  time: PropTypes.number
};

Spinner.defaultProps = {
  size: 60,
  color: "black",
  time: 2
};

export default Spinner;
