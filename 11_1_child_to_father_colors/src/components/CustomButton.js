import React from "react";

const CustomButton = (props) => {
  return (
    <button
      className={`btn ${props.colorName}`}
      onClick={() => props.handleClick(props.colorName)}
    >
      {props.colorName}
    </button>
  );
};

export default CustomButton;
