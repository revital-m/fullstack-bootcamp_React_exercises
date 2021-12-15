import React from "react";
import "./App.css";
import Box from "./components/Box";

class App extends React.Component {
  
  render() {
    return (
      <div className="box-container">
        <Box sizeBox="smallBox"/>
        <Box sizeBox="mediumBox"/>
        <Box sizeBox="largeBox"/>
        
      </div>
    );
  }
}

export default App;
