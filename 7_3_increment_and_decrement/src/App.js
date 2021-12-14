import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { textColor: "black-color num", numBtn: 0 };
  }

  handleClick = (e) => {
    let newnum = this.state.numBtn;

    if (e.target.innerText === "increment") {
      if (newnum < 10) {
        newnum++;
      } else {
        newnum = 10;
      }
    } else {
      if (newnum > -10) {
        newnum--;
      } else {
        newnum = -10;
      }
    }

    this.changeColorText(newnum);
  };

  changeColorText = (newnum) => {
    if (newnum >= 1) {
      this.setState({ textColor: "green-color num", numBtn: newnum });
    } else if (newnum <= -1) {
      this.setState({ textColor: "red-color num", numBtn: newnum });
    } else {
      this.setState({ textColor: "black-color num", numBtn: newnum });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="btnContainer" onClick={this.handleClick}>
          <button className="btn">increment</button>
          <button className="btn">decrement</button>
        </div>
        <div className={`${this.state.textColor}`}>{this.state.numBtn}</div>
      </div>
    );
  }
}

export default App;
