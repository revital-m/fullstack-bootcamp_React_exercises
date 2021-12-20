import React, { Component } from "react";
import "./App.css";
import Textarea from "./components/Textarea/Textarea";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Textarea
          labelName="What is the meaning of life?"
          name="textarea"
          cols="50"
          rows="5"
        />
      </div>
    );
  }
}

export default App;
