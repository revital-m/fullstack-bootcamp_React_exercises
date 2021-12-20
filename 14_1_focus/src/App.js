import React, { Component } from "react";
import "./App.css";
import Inputs from "./components/Inputs/Inputs";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Inputs
          labelName="Enter text here:"
          inputType="text"
          name="textInput"
        />
      </div>
    );
  }
}

export default App;
