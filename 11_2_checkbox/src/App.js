import React, { Component } from "react";
import Input from "./components/Inputs";
import "./App.css";
class App extends Component {
  state = { input1: false, input2: false, input3: true, input4: true };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  createInputs = () => {
    const inputs = ["input1", "input2", "input3", "input4"];
    return inputs.map((inputName) => {
      return (
        <Input
          handleChange={this.handleChange}
          inputType="checkbox"
          inputName={inputName}
          isChecked={this.state[inputName]}
        />
      );
    });
  };
  render() {
    return <div className="container">{this.createInputs()}</div>;
  }
}

export default App;
