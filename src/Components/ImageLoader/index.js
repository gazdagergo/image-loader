import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageLoader extends Component {
  static propTypes = {
    onLoad: PropTypes.func.isRequired,
    src: PropTypes.string.isRequired
  }

  state = {
    isLoaded: false
  }

  handleLoad = () => {
    const { onLoad, src } = this.props;
    onLoad(src);
  }

  render() {
    if (this.state.isLoaded) return null;

    return (
      <img
        src={this.props.src}
        onLoad={this.handleLoad}
        style={{ display: 'none'}}
        alt="loader"
      />
    )
  }
} 

export default ImageLoader;
