import React, { Component } from "react";
import ReactDOM from "react-dom";
import Spinner from "./Components/Spinner";
import ImageWIthStatus from "./Components/ImageWIthStatus";

import "./styles.css";

class App extends Component {
  state = {
    loading: true
  };

  handleLoad = () => {
    this.setState({ loading: false });
  };

  render() {
    const { loading } = this.state;
    return (
      <div className="App">
        {loading && <Spinner />}
        <ImageWIthStatus
          src="https://cdn.spacetelescope.org/archives/images/large/heic1509a.jpg"
          onLoad={this.handleLoad}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
