import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input/Input";

function App() {
  const timeArr = [
    {
      lable: "Seconds:",
      time: "",
      id: 0,
    },
    {
      lable: "Minutes:",
      time: "",
      id: 1,
    },
    {
      lable: "Hours:",
      time: "",
      id: 2,
    },
  ];

  const [data, setData] = useState(timeArr);

  const handleChange = (e) => {
    const newTime = [1, 1, 1];
    newTime[e.target.id] = e.target.value;
    switch (e.target.id) {
      case "0":
        newTime[1] = newTime[0] / 60;
        newTime[2] = newTime[1] / 60;
        break;
      case "1":
        newTime[0] = newTime[1] * 60;
        newTime[2] = newTime[1] / 60;
        break;
      case "2":
        newTime[1] = newTime[2] * 60;
        newTime[0] = newTime[1] * 60;
        break;
      default:
        break;
    }

    const changedData = data.map((item, idx) => {
      return {
        lable: item.lable,
        time: newTime[idx],
        id: item.id,
      };
    });
    setData(changedData);
  };

  const displayInputs = () => {
    return data.map((item) => {
      return (
        <Input
          key={item.id}
          labelName={item.lable}
          handleInputChange={handleChange}
          id={item.id}
          value={item.time}
        />
      );
    });
  };

  return <div className="container">{displayInputs()}</div>;
}

export default App;
