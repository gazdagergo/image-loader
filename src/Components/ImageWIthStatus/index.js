import React, { Component } from "react";
import PropTypes from "prop-types";

import './styles.css';

class ImageWithStatus extends Component {
  state = {
    dimensions: {}
  }

  handleLoad = ({ target: img }) => {
    this.setState({
      dimensions: {
        height: img.offsetHeight,
        width: img.offsetWidth
      }
    });
    this.props.onLoad();
  }

  render() {
    return ({ src, onLoad, onError, alt }) => (
      <div className="image-with-status">
        <img alt={alt} src={src} onLoad={this.handleLoad} onError={onError} />
      </div>
    );
  }
}

ImageWithStatus.propTypes = {
  src: PropTypes.string.isRequired,
  onLoad: PropTypes.func,
  onError: PropTypes.func,
  alt: PropTypes.string
};

ImageWithStatus.defaultProps = {
  onLoad: null,
  onError: null,
  alt: ""
};

export default ImageWithStatus;
