import React from "react";
import "./Input.css";

function Input({ labelName, handleInputChange, id, checked }) {
  return (
    <div className="Input">
      <input
        className="input--info"
        onChange={handleInputChange}
        type="checkbox"
        id={id}
        checked={checked}
      ></input>
      <label className="input--label">{labelName}</label>
    </div>
  );
}

export default Input;
