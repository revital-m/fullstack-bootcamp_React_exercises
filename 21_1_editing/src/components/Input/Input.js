import React, { useEffect, useRef } from "react";
import "./Input.css";

const Input = ({ labelName, handleInput, userValue }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="searchInput">
      <label className="searchInput--label">{labelName}</label>
      <input
        ref={inputRef}
        className="searchInput--info"
        onChange={handleInput}
        type="text"
        value={userValue}
      ></input>
    </div>
  );
};

export default Input;
