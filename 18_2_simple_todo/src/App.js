import React from "react";
import "./App.css";
import List from "./components/List/List";

function App() {
  const data = [
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
  ];
  return (
    <div className="container">
      <List listData={data} />
    </div>
  );
}

export default App;
