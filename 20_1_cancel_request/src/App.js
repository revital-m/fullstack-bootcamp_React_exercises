import React, { useState } from "react";
import "./App.css";
import Joke from "./components/Joke/Joke";

function App() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="container">
      <button className="btn" onClick={handleClick}>
        Toggle
      </button>
      {show && <Joke />}
    </div>
  );
}

export default App;
