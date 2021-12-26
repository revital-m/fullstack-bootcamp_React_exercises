import React from "react";
import "./App.css";
import Text from "./components/Text/Text";

function App() {
  const myStr =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, odio minus pariatur vitae provident omnis aut. Voluptates quaerat consequatur, similique quos hic nam laboriosam tempora consequuntur nisi ipsum omnis modi minus possimus ratione ipsam, quasi excepturi alias aliquam, repellat numquam! Ea iusto itaque vel provident, dolor voluptatibus unde repellat eligendi?";
  const myMaxLength = 100;
  return (
    <div className="container">
      <Text str={myStr} strMaxLength={myMaxLength} />
    </div>
  );
}

export default App;
