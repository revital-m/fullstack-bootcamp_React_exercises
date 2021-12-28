import React from "react";
import "./Button.css";

const Button = ({ categoryBtnClass, handleClick, btnText }) => {
  return (
    <div className="btn-container">
      <button className={`btn ${categoryBtnClass}`} onClick={handleClick}>
        {btnText}
      </button>
    </div>
  );
};

export default Button;
