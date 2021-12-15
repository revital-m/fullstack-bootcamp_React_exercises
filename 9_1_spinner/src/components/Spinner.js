import React from "react";

class Spinner extends React.Component {
  state = { currentSpinner: "" };

  randomSpinner = () => {
    const spinnerArr = [
      "border-left-turquoise",
      "border-left-lightcoral",
      "border-left-lightgreen",
      "border-left-lightsalmon",
      "border-left-lightskyblue",
    ];
    const spinnerArrIdx = Math.floor(Math.random() * spinnerArr.length);
    this.setState({ currentSpinner: `${spinnerArr[spinnerArrIdx]}` });
  };

  componentDidMount() {
    this.randomSpinner();
  }

  render() {
    return <div className={`spinner ${this.state.currentSpinner}`}></div>;
  }
}

export default Spinner;
