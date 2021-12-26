import React from "react";
import "./Input.css";

function Input({ labelName, handleInputChange, id, value }) {
  return (
    <div className="Input">
      <label className="input--label">{labelName}</label>
      <input
        className="input--info"
        onChange={handleInputChange}
        type="text"
        id={id}
        value={value}
      ></input>
    </div>
  );
}

export default Input;
