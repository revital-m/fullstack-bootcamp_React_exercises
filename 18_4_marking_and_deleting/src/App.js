import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input/Input";

function App() {
  const listArr = ["one", "two", "three", "four", "five"];

  let filteredListArr = [];

  const [data, setData] = useState(listArr);
  const [checked0, setChecked0] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);

  let checkedArr = [checked0, checked1, checked2, checked3, checked4];

  const handleChecked = (e) => {
    switch (e.target.id) {
      case "0":
        setChecked0(e.target.checked);
        break;
      case "1":
        setChecked1(e.target.checked);
        break;
      case "2":
        setChecked2(e.target.checked);
        break;
      case "3":
        setChecked3(e.target.checked);
        break;
      case "4":
        setChecked4(e.target.checked);
        break;
      default:
        break;
    }
  };

  const handleDelete = () => {
    listArr.forEach((item, index) => {
      if (!checkedArr[index]) {
        filteredListArr.push(item);
      }
    });
    resetChecked();
    setData(filteredListArr);
  };

  const handleReset = () => {
    resetChecked();
    setData(listArr);
  };

  const resetChecked = () => {
    setChecked0(false);
    setChecked1(false);
    setChecked2(false);
    setChecked3(false);
    setChecked4(false);
  };

  const displayInputs = () => {
    return data.map((item, idx) => {
      let checked = false;
      switch (idx) {
        case 0:
          checked = checked0;
          break;
        case 1:
          checked = checked1;
          break;
        case 2:
          checked = checked2;
          break;
        case 3:
          checked = checked3;
          break;
        case 4:
          checked = checked4;
          break;
        default:
          break;
      }
      return (
        <Input
          key={idx}
          labelName={item}
          handleInputChange={handleChecked}
          id={idx}
          checked={checked}
        />
      );
    });
  };

  return (
    <div className="container">
      <div className="btn-container">
        <button className="btn" onClick={handleDelete}>
          Delete
        </button>
        <button className="btn" onClick={handleReset}>
          Reset
        </button>
      </div>
      {displayInputs()}
    </div>
  );
}

export default App;
