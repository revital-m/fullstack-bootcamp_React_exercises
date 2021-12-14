import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { numBtn: 0 };
  }

  incrementNum = () => {
    this.setState({ numBtn: this.state.numBtn + 1 });
  };

  render() {
    return (
      <div className="App">
        <button className="btn" onClick={this.incrementNum}>
          increment
        </button>
        <p className="num">{this.state.numBtn}</p>
      </div>
    );
  }
}

export default App;
