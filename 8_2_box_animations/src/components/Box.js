import React from "react";

class Box extends React.Component {
  state = { animationClass: "" };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ animationClass: "boxAnimation box" });
    }, 1000);
  }

  // componentDidUpdate() {
  //   const myUpdate = document.querySelector("#changeColor");
  //   myUpdate.innerText = `The updated favorite color is ${this.state.favoriteColor}`;
  // }

  render() {
    return (
      <div className={`${this.state.animationClass} ${this.props.sizeBox}`}></div>
    );
  }
}

export default Box;
