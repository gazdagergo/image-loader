import React, { Component } from 'react';
import ImageLoader from '../ImageLoader';
import WallpaperImage from '../WallpaperImage';
import Spinner from '../Spinner';


class IntroPage extends Component {
  state = {
    imageUri: null,
    isLoading: true
  }

  handleLoad = imageUri => {
    this.setState({
      isLoading: false,
      imageUri
    })
  }

  render() {
    return (
      <div className="intro-page">
        <ImageLoader src="/img/STSCI-H-p1827g-f-3843x4080.png" onLoad={this.handleLoad} />
        {this.state.isLoading && <Spinner />}
        <WallpaperImage src={this.state.imageUri} />
      </div>
    )
  }
}

export default IntroPage;


