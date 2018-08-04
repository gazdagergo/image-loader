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


  style = () => {
    const { innerWidth, innerHeight } = window;
    const { width, height } = this.state;

    if (innerHeight / innerWidth > height / width) {
      return {
        image: {
          maxHeight: '100%',
          width: 'auto'
        }        
      }
    }
    return {
      image: {
        maxWidth: '100%',
        minHeight: '100%'
      }      
    }
  }

  render() {
    const { src, onError, alt } = this.props;
    return (
      
      <div className="image-with-status">
        <img
          alt={alt}
          src={src}
          style={this.style().image}
          onLoad={this.handleLoad}
          onError={onError}
        />
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
