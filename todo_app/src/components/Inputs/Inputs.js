import React, { Component } from "react";
import "./Inputs.css";

class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = { update: "", create: "" };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = (e) => {
    this.props.handleCallback(this.state, this.props.id);
    this.setState({ update: "", create: "" });
  };

  render() {
    return (
      <div className="Input">
        <label className="input--label">{this.props.labelName}</label>
        <div className="input--show-info">
          <input
            className="input--info"
            onChange={this.handleInputChange}
            type={this.props.inputType}
            name={this.props.name}
            value={this.state[this.props.name]}
          ></input>
          <button className="btn" onClick={this.handleClick}>
            {this.props.name}
          </button>
        </div>
      </div>
    );
  }
}

export default Inputs;
