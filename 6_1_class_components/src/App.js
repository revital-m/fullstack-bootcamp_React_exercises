import React from "react";
import "./App.css";
import Card from "./components/Card";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Card imgSrc="https://images.unsplash.com/photo-1639380540776-1a8c1376b26d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" title="Lorem ipsum dolor." description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem a atque molestiae, aut eaque possimus." share="#" explore="#" />
        <Card imgSrc="https://images.unsplash.com/photo-1639368216157-33c8fdd3c7b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" title="Lorem ipsum dolor." description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem a atque molestiae, aut eaque possimus." share="#" explore="#" />
        <Card imgSrc="https://images.unsplash.com/photo-1639330186966-c3e3ad72accc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" title="Lorem ipsum dolor." description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem a atque molestiae, aut eaque possimus." share="#" explore="#" />
      </div>
    );
  }
}

export default App;
