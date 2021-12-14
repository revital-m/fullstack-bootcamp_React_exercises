import React from "react";

class Colors extends React.Component {
  state = { favoriteColor: "turquoise", lastFavoriteColor: "turquoise" };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "lightcoral" });
    }, 1000);
  }

  componentDidUpdate() {
    const myUpdate = document.querySelector("#changeColor");
    myUpdate.innerText = `The updated favorite color is ${this.state.favoriteColor}`;
  }

  render() {
    return (
      <div className="colors-container">
        <h1
          className={`${this.state.lastFavoriteColor}`}
        >{`My favorite color is ${this.state.lastFavoriteColor}`}</h1>
        <h3 id="changeColor" className={`${this.state.favoriteColor}`}></h3>
      </div>
    );
  }
}

export default Colors;
