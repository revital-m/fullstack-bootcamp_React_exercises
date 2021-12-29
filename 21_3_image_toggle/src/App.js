import React, { useRef } from "react";
import "./App.css";

const App = () => {
  const myImg1 = useRef(null);
  const myImg2 = useRef(null);

  function handleBlackAndWhiteImg(e) {
    switch (e.target.name) {
      case "img1":
        myImg1.current.style.filter = "grayscale(0%)";
        break;
      case "img2":
        myImg2.current.style.filter = "grayscale(0%)";
        break;
    }
  }

  function handleColorsImg(e) {
    switch (e.target.name) {
      case "img1":
        myImg1.current.style.filter = "grayscale(100%)";
        break;
      case "img2":
        myImg2.current.style.filter = "grayscale(100%)";
        break;
    }
  }

  return (
    <div className="container">
      <img
        ref={myImg1}
        name="img1"
        onMouseOver={handleBlackAndWhiteImg}
        onMouseOut={handleColorsImg}
        src="https://images.unsplash.com/photo-1459478309853-2c33a60058e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        className="image"
      />
      <img
        ref={myImg2}
        name="img2"
        onMouseOver={handleBlackAndWhiteImg}
        onMouseOut={handleColorsImg}
        src="https://images.unsplash.com/photo-1558470598-a5dda9640f68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
        className="image"
      />
    </div>
  );
};

export default App;
