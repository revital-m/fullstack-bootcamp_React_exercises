import React from "react";
import "./Button.css";

const Button = ({ categoryBtnClass, handleClick, name, btnText }) => {
  return (
    <div className="btn-container">
      <button
        className={`btn ${categoryBtnClass}`}
        onClick={handleClick}
        name={name}
      >
        {btnText}
      </button>
    </div>
  );
};

export default Button;
