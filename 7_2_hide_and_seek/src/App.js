import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { bgColor: "bgtransparent box" };
  }

  backgroundColorChange = () => {
    if (this.state.bgColor === "bgtransparent box") {
      this.setState({ bgColor: "bglightpink box" });
    }
    else {
      this.setState({ bgColor: "bgtransparent box" });
    }
    
  };

  render() {
    return (
      <div className="App">
        <button className="btn" onClick={this.backgroundColorChange}>
          show/hide
        </button>
        <div className={`${this.state.bgColor}`}></div>
      </div>
    );
  }
}

export default App;
