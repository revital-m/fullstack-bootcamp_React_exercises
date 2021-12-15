import React from "react";
import "./App.css";
import CustomButton from "./components/CustomButton";

class App extends React.Component {
  state = { colorNameText: "" };

  handleClick = (data) => {
    this.setState({ colorNameText: data });
  };

  createBtns = () => {
    const colors = ["blue", "red", "yellow"];
    return colors.map((color) => {
      return <CustomButton colorName={color} handleClick={this.handleClick} />;
    });
  };

  render() {
    return (
      <div>
        {this.createBtns()}
        <h1>{`The color selected is: ${this.state.colorNameText}`}</h1>
      </div>
    );
  }
}

export default App;
