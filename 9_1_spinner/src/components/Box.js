import React from "react";

class Box extends React.Component {
  state = { boxColor: "" , boxShape: "", count: 0 };

  changeColorBox = () => { 
    const colorArr = ['bg-turquoise', 'bg-lightcoral', 'bg-lightgreen', 'bg-lightsalmon', 'bg-lightslategray', 'bg-lightskyblue'];
    const colorArrIdx = Math.floor(Math.random() *colorArr.length);

    setTimeout(() => {
      if (((this.state.count + 1) % 5 ) === 0 ) {
        if (this.state.boxShape === "circle") {
          this.setState({ boxColor: `${colorArr[colorArrIdx]}`, boxShape: "" , count: this.state.count + 1 });
        }
        else {
          this.setState({ boxColor: `${colorArr[colorArrIdx]}`, boxShape: "circle" , count: this.state.count + 1 });
        }
      }
      else {
        this.setState({ boxColor: `${colorArr[colorArrIdx]}` , count: this.state.count + 1 });
      }
    }, 500);
  }

  componentDidMount() {
    this.changeColorBox();
  }

  componentDidUpdate() {
    this.changeColorBox();
  }

  render() {
    return (
      <div className={`${this.state.boxColor} ${this.state.boxShape} box`}></div>
    );
  }
}

export default Box;
