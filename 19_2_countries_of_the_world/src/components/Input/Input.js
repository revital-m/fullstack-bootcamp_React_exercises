import React from "react";
import "./Input.css";

const Input = ({ labelName, handleInputChange, value }) => {
  return (
    <div className="countryInput">
      <label className="countryInput--label">{labelName}</label>
      <input
        className="countryInput--info"
        onChange={handleInputChange}
        type="text"
        value={value}
      ></input>
    </div>
  );
};

export default Input;
