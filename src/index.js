import React, { Component } from "react";
import ReactDOM from "react-dom";
import IntroPage from './Components/IntroPage';

import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <IntroPage />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
