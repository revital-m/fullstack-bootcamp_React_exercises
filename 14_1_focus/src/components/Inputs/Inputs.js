import React, { Component } from "react";
import "./Inputs.css";

class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "" };

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    return (
      <div className="Input">
        <label className="input--label">{this.props.labelName}</label>
        <input
          className="input--info"
          onChange={this.handleInputChange}
          type={this.props.inputType}
          name={this.props.name}
          value={this.state.value}
          ref={this.inputRef}
        ></input>
      </div>
    );
  }
}

export default Inputs;
