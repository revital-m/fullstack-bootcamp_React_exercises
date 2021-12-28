import React, { useState, useRef } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

function App() {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const btnText = useRef("Edit");

  const handleClick = () => {
    if (btnText.current === "Edit") {
      btnText.current = "Save";
      setShow(true);
    } else {
      btnText.current = "Edit";
      setShow(false);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="container">
      {!show && (
        <Button
          categoryBtnClass=""
          handleClick={handleClick}
          btnText={btnText.current}
        />
      )}
      {show && (
        <div className="show-container">
          <Input labelName="" handleInput={handleChange} userValue={value} />
          <Button
            categoryBtnClass="btn--category"
            handleClick={handleClick}
            btnText={btnText.current}
          />
        </div>
      )}
    </div>
  );
}

export default App;
