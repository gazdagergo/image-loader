import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const WallPaperImage = ({src}) => (
  <div className="wallpaper" style={{ backgroundImage: `url(${src})`}} />
)

WallPaperImage.propTypes = {
  src: PropTypes.string,
}

WallPaperImage.defaultProps = {
  src: null,
}

export default WallPaperImage;