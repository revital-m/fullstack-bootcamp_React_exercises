import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div className="Input">
        <label className="input-label">{this.props.inputName}</label>
        <input
          onChange={this.props.handleChange}
          type={this.props.inputType}
          name={this.props.inputName}
          checked={this.props.isChecked}
        ></input>
      </div>
    );
  }
}

export default Input;
