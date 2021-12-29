import React, { useRef } from "react";
import "./App.css";

const App = () => {
  const myVideo = useRef();

  const handlePlay = () => {
    myVideo.current.play();
  };

  const handlePause = () => {
    myVideo.current.pause();
  };

  return (
    <div className="container">
      <video width="750" height="500" controls ref={myVideo}>
        <source src="/Video/pexels-kelly-lacy-9722139.mp4" type="video/mp4" />
      </video>
      <div className="btn-container">
        <button className="btn btn-play" onClick={handlePlay}></button>
        <button className="btn btn-pause" onClick={handlePause}></button>
      </div>
    </div>
  );
};

export default App;
