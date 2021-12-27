import React from "react";
import "./Input.css";

const Input = ({ labelName, handleInputChange, value, handleClick }) => {
  return (
    <div className="searchInput">
      <label className="searchInput--label">{labelName}</label>
      <input
        className="searchInput--info"
        onChange={handleInputChange}
        type="text"
        value={value}
      ></input>
      <button className="searchInput--btn" onClick={handleClick}>
        Search
      </button>
    </div>
  );
};

export default Input;
