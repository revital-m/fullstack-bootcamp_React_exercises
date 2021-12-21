// Import the React & ReactDOM libraries.
import React from "react";
import ReactDOM from "react-dom";
import App from "./componenets/App"

if (module.hot) {
  module.hot.accept();
}

// Take the react component & show it on screen.
ReactDOM.render(<App />, document.querySelector("#root"));
