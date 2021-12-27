import React from "react";
import "./Input.css";

const Input = ({ labelName, handleInput, userValue }) => {
  return (
    <div className="searchInput">
      <label className="searchInput--label">{labelName}</label>
      <input
        className="searchInput--info"
        onChange={handleInput}
        type="text"
        value={userValue}
      ></input>
    </div>
  );
};

export default Input;
